import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ProfileComponent } from './profile/profile.component';
import { PlayroomComponent } from './playroom/playroom.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormComponent,ProfileComponent,PlayroomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment03';
}
