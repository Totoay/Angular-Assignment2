import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,FormsModule,CommonModule,JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  signIn: FormGroup = new FormGroup({
    email : new FormControl(null,[Validators.email,Validators.required,Validators.minLength(4),Validators.maxLength(40)]),
    password : new FormControl(null,[Validators.minLength(8),Validators.maxLength(20),Validators.required])
  })

  constructor(private router:Router){}

  onSubmit() {
    if(this.signIn.valid){
      console.log(this.signIn.value)
      this.router.navigate(['/profile'])
      return alert('Login successfully')
    }
    return alert('Login is invalid')
  }
}
