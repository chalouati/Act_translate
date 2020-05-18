import { Component, OnInit } from '@angular/core';
import {LoginService} from '.././../services/login.service';
import {LocalStorageService} from 'ngx-localstorage';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
   loge :boolean;
   login:string;
   
  constructor(private serAuth:LoginService,private localStor:LocalStorageService) 
  
       {this.login=this.localStor.get('login'); }
 

  ngOnInit() {
    this.loge=this.serAuth.isAuthentifier();

  }
  

  logout2() {
    this.serAuth.logout();
            }
   

}
