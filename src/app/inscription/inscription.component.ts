import { Component, OnInit } from '@angular/core';
import {Student} from '../shared/models/student';
import {LoginService} from '../shared/services/login.service';
import { ToastrModule,ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  public user = new Student(); 

  constructor(private inscrip:LoginService,private router:Router,private toastr:ToastrService,private trans:TranslateService) { }

  ngOnInit() {
  }

  inscription(){  
    this.inscrip.Inscription(this.user.email,this.user.password).then(value => {
      this.toastr.success(this.trans.instant('ToastMassega.succ'),this.trans.instant('ToastMassega.Inscr'));
      this.router.navigate(['../Authentication']);
             })
                  .catch(err => {
                  this.toastr.error('Echec!','ça marche pas:');
                  });    

}

}
