import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.css']
})
export class ChildOutputComponent {

  listStudent = ['yến', 'chuan']
  @Output() sendData = new EventEmitter;

  addStudent(student: string) {
    this.listStudent.push(student);
    this.sendData.emit(this.listStudent);
  }
}
