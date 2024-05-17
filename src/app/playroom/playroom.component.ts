import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AttributeDirective } from '../attribute.directive';
import { StructuralDirective } from '../structural.directive';
import { MakeUppercasePipe } from '../make-uppercase.pipe';

@Component({
  selector: 'app-playroom',
  standalone: true,
  imports: [FormsModule,CommonModule,AttributeDirective,StructuralDirective,MakeUppercasePipe],
  templateUrl: './playroom.component.html',
  styleUrl: './playroom.component.css'
})
export class PlayroomComponent {
  isShow = false;
}
