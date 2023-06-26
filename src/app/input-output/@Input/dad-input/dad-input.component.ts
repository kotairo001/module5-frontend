import {Component} from '@angular/core';

@Component({
  selector: 'app-dad-input',
  templateUrl: './dad-input.component.html',
  styleUrls: ['./dad-input.component.css']
})
export class DadInputComponent {
  listStudent = ['yến', 'chuan']

  addStudent(student: string) {
    this.listStudent.push(student);
  }
}
