import { Injectable, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {Observable,of, from } from 'rxjs';
import { ToastrModule,ToastrService } from 'ngx-toastr';
import {LocalStorageService} from 'ngx-localstorage';
import { Router } from '@angular/router';
@Injectable({

  providedIn: 'root'
})
export class LoginService {

 auth:boolean;
 user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth, private router:Router,private toastr:ToastrService,private localStor:LocalStorageService) { 

   this.user=firebaseAuth.authState;

  }


  verifierlogin(password:string,mail:string) {

             return this.firebaseAuth.signInWithEmailAndPassword(mail,password)
             this.auth=true
             
            
                 
                         }


 Inscription(email: string, password: string) {

              return this.firebaseAuth.createUserWithEmailAndPassword(email, password);
                        }

renitialisation(email:string){
  return this.firebaseAuth.sendPasswordResetEmail(email);
}


   logout() {
      console.log(this.localStor.get('login'));
      this.localStor.remove('login');
      console.log(this.localStor.get('login'));
      this.firebaseAuth.signOut();
      this.toastr.success('Succée!','Déconnexion avec:');
     
    
                       }

  isAuthentifier(){
   if(this.localStor.get('login'))
   return true;
   else return false;
                  }

getlog() { return this.localStor.get('login');  }
                

}
