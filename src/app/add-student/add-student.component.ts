import { Component, OnInit, ViewChild, Input,Output,EventEmitter } from '@angular/core';
import { Student } from '../shared/models/student' ;
import { StudentService } from '../shared/services/student.service' ;
import { AngularFirestore } from '@angular/fire/firestore' ;
import { RouterModule, Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Observable, Subscription}  from 'rxjs';
import { ToastrModule,ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  @ViewChild('addForm',{static:false}) 
  adForm: NgForm;

  @Output() public msgaddStudent= new EventEmitter();
  public student = new Student(); 
  public msgExport="je suis un variable déclaré dans le component add-Student";
  constructor (private trans:TranslateService, private studentService : StudentService, private route: ActivatedRoute,private router:Router,private toastr:ToastrService) { }
  
  ngOnInit(): void{

    let id=this.route.snapshot.queryParams['id'];
    if (id) {this.getStudent(id);
    }

  }
 
  save () {

  if(this.adForm.valid){

    if (!this.student.id) {
      this.studentService.AddStudent({ ... this.student}).then((res) => {
        this.adForm.resetForm();
        this.toastr.success("this.trans.instant('ToastMassega.succ')",'Ajout Document!');
        this.router.navigate(['/all-students']);
        
        })
    } else {
    this.studentService.updateStudent(this.student);
    this.toastr.success(this.trans.instant('ToastMassega.succ'),this.trans.instant('ToastMassega.oper1'));
    this.router.navigate(['/all-students']);
    }
  }
  console.log(this.msgExport );
  this.msgaddStudent.emit(this.msgExport);
     
}

  getStudent (id:string) {
    this.studentService.getStudent(id).subscribe(res => {
                                                            this.student = res.data() as Student ;
                                                           this.student.id = res.id ;
                                                          });
                                                        }

retour(){

 this.router.navigate(['/all-students']);
                                                        }
}
