import { Component, OnInit } from '@angular/core';
import {LoginService} from '../shared/services/login.service';
import { ToastrModule,ToastrService } from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset-pwd.component.html',
  styleUrls: ['./reset-pwd.component.css']
})
export class ResetPwdComponent implements OnInit {

  email:string;

  constructor(private reset:LoginService, private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
             }


  renitialiser(){

    this.reset.renitialisation(this.email);
    this.toastr.success('Succée!','Mail envoyé avec:');
    this.router.navigate(['/Authentication']);

  }


}
