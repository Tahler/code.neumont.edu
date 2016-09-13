import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EditProfileComponent } from './edit-profile.component';
import { editProfileRouting } from './edit-profile.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    editProfileRouting
  ],
  declarations: [EditProfileComponent],
  exports: [EditProfileComponent]
})
export class EditProfileModule { }
