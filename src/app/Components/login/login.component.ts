import { Component, OnInit } from '@angular/core';
import { GoogleAuthProvider, signInWithPopup, Auth} from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userPhoto=''
  userName=''
  photo=false

  LoginComGoogle() {
    const provider = new GoogleAuthProvider()
    signInWithPopup(this.auth, provider).then((res: any) => {
      console.log(res)
      const credential = GoogleAuthProvider.credentialFromResult(res);
      console.log(credential)
      this.userPhoto = res.user.photoURL;
      this.userName = res.user.displayName;
      this.photo = true
      console.log(this.userName)
      console.log(res.user)
      sessionStorage.setItem('Usuario', this.userName);
      sessionStorage.setItem('fotoPerfil', this.userPhoto);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
    console.log('login com google')
  }


  constructor(private auth: Auth) { }

  ngOnInit() { }

}
