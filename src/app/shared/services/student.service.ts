import { Injectable } from '@angular/core' ;
import { AngularFirestore } from '@angular/fire/firestore' ;
import { Student } from '../models/student' ;

@ Injectable ({
  providedIn: 'root'
  })
export class StudentService {

constructor (private firestore: AngularFirestore) { }

AddStudent (student: Student) {

  return this.firestore.collection('Students').add(student);
}

listStudents(){

  return this.firestore.collection('Students').snapshotChanges();

}

deleteStudent (studentId: string ){
  //debugger;
  //console.log(studentId);
  this.firestore.doc('Students/'+studentId).delete();
}

getStudent (id :string) {
  return this.firestore.doc('Students/'+id ).get();
  }

  updateStudent (student : Student ) { 
    return this.firestore.doc('Students/'+student.id ).update(student);
                                    }

}