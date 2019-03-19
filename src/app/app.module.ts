

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConnexionPage } from '../pages/connexion/connexion';

import { ResultPage } from '../pages/result/result';
import { Camera } from '@ionic-native/camera';
import RegisterService from '../services/registerServices';
import { HttpClient } from '@angular/common/http';
import imageService from '../services/imageServices';


@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    ConnexionPage,
    ResultPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    ConnexionPage,
    ResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,Camera,RegisterService,HttpClient,imageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
