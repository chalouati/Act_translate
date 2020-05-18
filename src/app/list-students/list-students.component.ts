import { Component, OnInit } from '@angular/core';
import {StudentService} from '../shared/services/student.service';
import { Student } from '../shared/models/student';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {LoginService} from '../shared/services/login.service';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})

export class ListStudentsComponent implements OnInit {

  students:Student[];

  constructor(private trans:TranslateService,private servstudents: StudentService,private servlogin: LoginService) { }
  
ngOnInit():void { this.getAllStudents(); }



getAllStudents () {

                    this.servstudents.listStudents().subscribe
                     (data => {
                                this.students = data.map ( e => {return {id:e.payload.doc.id , ...e.payload.doc.data() as Student };})
                              }
                                                              );
                  }




delete (id:string,nom: string) {

  Swal.fire({
    title: this.trans.instant('ToastMassega.del'),
    text: this.trans.instant('ToastMassega.delconf',{nom}),
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: 'red',
    cancelButtonColor: '#3085d6',
    cancelButtonText: this.trans.instant('ToastMassega.close'),
    confirmButtonText: this.trans.instant('ToastMassega.confDelete'),
  }).then((result) => {
    if (result.value) {
      this.servstudents.deleteStudent(id);
      Swal.fire(
        'Supprimer !',
        'Le fichier a été supprimé .',
        'Succée'
      )
    }
  })
      
        }

}
