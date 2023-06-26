import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styleUrls: ['./child-input.component.css']
})
export class ChildInputComponent {
@Input() data?: string[]
}
