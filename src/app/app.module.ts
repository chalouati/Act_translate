import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule , Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { AngularFireModule } from '@angular/fire' ;
import { AngularFireDatabaseModule } from '@angular/fire/database' ;
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { StudentService } from './shared/services/student.service';
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ListStudentsComponent } from './list-students/list-students.component';
import {Observable, Subscription, from}  from 'rxjs';
import { ToastrModule,ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthentificationComponent } from './authentification/authentification.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {LoginService} from './shared/services/login.service';
import { ResetPwdComponent } from './reset-pwd/reset-pwd.component';
import {AutorisationGuard} from './autorisation.guard';
import {NgxLocalStorageModule} from 'ngx-localstorage';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { NavigationComponent } from './shared/component/navigation/navigation.component';

const routes : Routes = [
  { path:'addstudent',component: AddStudentComponent,canActivate:[AutorisationGuard] },
   {path:'all-students',component:ListStudentsComponent,canActivate:[AutorisationGuard]},
   { path:'Authentication',component:AuthentificationComponent },
   { path:'inscription',component:InscriptionComponent},
   { path:'Resetpwd',component: ResetPwdComponent},
   { path:'', component: AuthentificationComponent},
 
  ];
  @NgModule({
    declarations: [
      AppComponent,
      AddStudentComponent,
      ListStudentsComponent,
      AuthentificationComponent,
      InscriptionComponent,
      ResetPwdComponent,
      NavigationComponent,  
    ],

    imports: [BrowserModule,RouterModule.forRoot(routes),
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireDatabaseModule,AngularFirestoreModule.enablePersistence(),
      FormsModule,ToastrModule.forRoot(),BrowserAnimationsModule,AngularFireAuthModule,
      NgxLocalStorageModule.forRoot(),BsDropdownModule.forRoot(),HttpClientModule,
      TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
      ],
    
    providers: [AngularFireModule,StudentService,ToastrService,LoginService,AutorisationGuard],
    bootstrap: [AppComponent]
  })

  export class AppModule { }

 
export function HttpLoaderFactory(http: HttpClient) {
 return new TranslateHttpLoader(http,'assets/i18n/','.json');
   }