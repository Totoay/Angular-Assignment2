import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,RouterModule,CommonModule,JsonPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  profile: FormGroup = new FormGroup({
    firstname : new FormControl(null,[Validators.required]),
    lastname : new FormControl(null,[Validators.required]),
    birthDate : new FormControl(null,[Validators.required]),
    age : new FormControl(null,[Validators.required,Validators.min(1),Validators.max(100)]),
    gender : new FormControl(null,[Validators.required]),
  })

  constructor(private router:Router){}

  onSubmit() {
    if(this.profile.valid){
      console.log(this.profile.value)
      this.router.navigate(['/playroom'])
      return alert('Form submitted')
    }
    return alert('Form is invalid')
  }

}
