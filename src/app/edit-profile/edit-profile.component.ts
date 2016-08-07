import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FORM_DIRECTIVES } from '@angular/forms';
import { RepositoryService, User } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-edit-profile',
  templateUrl: 'edit-profile.component.html',
  styleUrls: ['edit-profile.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class EditProfileComponent implements OnInit {
  user: User;
  picture: File;
  profilePicturePreviewData: string;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private repoService: RepositoryService) { }

  ngOnInit() {
    // Get the user we are updating
    let uid = this.route.snapshot.params['id'];
    this.repoService.getUser(uid).take(1).subscribe(
        user => this.user = user);
  }

  fileChange(fileInput: any) {
    let file = fileInput.target.files.length ? fileInput.target.files[0] : null;
    this.picture = file;
    if (file) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        // Done loading
        let src = reader.result;
        this.profilePicturePreviewData = src;
      };
      reader.readAsDataURL(file);
    } else {
      this.profilePicturePreviewData = '';
    }
  }

  update(): void {
    console.log(this.user);
    // TODO: show loading progress
    // TODO: potential bug with timing here.
    // let problemId = this.problem.$key;
    // this.repoService.updateProblem(this.problem, this.testCases);
    // this.router.navigate(['/problems', problemId]);
  }

}
