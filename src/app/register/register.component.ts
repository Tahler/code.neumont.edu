import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ModalDirective } from 'ng2-bootstrap';

import { emailValidator, matchingPasswordValidator } from './validators';
import { AuthService } from '../shared/firebase/auth.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent {
  nameControl = new FormControl('', Validators.required);
  emailControl = new FormControl('', [
    Validators.required,
    emailValidator
  ]);
  passwordControl = new FormControl('', [
    Validators.required,
    // As required by firebase
    Validators.minLength(6)
  ]);
  confirmPasswordControl = new FormControl('', Validators.required);

  registerForm = new FormGroup({
    name: this.nameControl,
    email: this.emailControl,
    password: this.passwordControl,
    confirmPassword: this.confirmPasswordControl
  }, matchingPasswordValidator('password', 'confirmPassword'));

  picture: File;
  profilePicturePreviewData = '';

  @ViewChild('modal') modal: ModalDirective;

  constructor(
    private authService: AuthService,
    private router: Router) { }

  fileChange(fileInput: any) {
    let reader = new FileReader();
    reader.onload = (e: any) => {
      // Done loading
      let src = reader.result;
      this.profilePicturePreviewData = src;
    };
    let file = fileInput.target.files[0];
    this.picture = file;
    reader.readAsDataURL(file);
  }

  submit() {
    let user: User = {
      name: this.nameControl.value,
      email: this.emailControl.value
    };
    let password = this.passwordControl.value;
    this.authService.registerNewUser(user, password, this.picture).then(
        () => this.modal.show(),
        err => {
          switch (err.code) {
            case 'auth/email-already-in-use':
              this.emailControl.setErrors({ emailAlreadyInUse: true });
              break;
            case 'auth/invalid-email':
              this.emailControl.setErrors({ invalidEmail: true });
              break;
            default:
              this.registerForm.setErrors({ unexpectedError: err });
              console.error(err);
              break;
          }
        });
  }

  isNeumontEmail(): boolean {
    return this.emailControl.value.endsWith('neumont.edu');
  }

  isFacultyEmail(): boolean {
    return this.emailControl.value.endsWith('@neumont.edu');
  }

  onModalHide(): void {
    this.router.navigateByUrl('/');
  }
}
