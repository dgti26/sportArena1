import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { register } from 'swiper/element/bundle';
register();

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { provideAuth, getAuth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC7kL3zjtMJpcMUOx0yRw7syYz6iU5bXUY",
  authDomain: "sportarena-74f2d.firebaseapp.com",
  projectId: "sportarena-74f2d",
  storageBucket: "sportarena-74f2d.appspot.com",
  messagingSenderId: "512071285646",
  appId: "1:512071285646:web:afd8e23792de331ed9c2df",
  measurementId: "G-W4QESJR8S7"
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})



export class AppModule {}

