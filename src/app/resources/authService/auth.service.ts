import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userDashboard:any;
  constructor(private auth:AngularFireAuth) { }

  async login(email:string , password:string){
    try{
      return await this.auth.signInWithEmailAndPassword(email , password);
    }catch(err){
      console.error("no se a podido iniciar sesion");
      return null
    }
  }

  async register(email:string , password:string){
    try{
      return await this.auth.createUserWithEmailAndPassword(email , password);
    }catch(err){
      console.error("no se a podido iniciar sesion");
      return null
    }
  }

  async loginGoogle(){
    try{
      return await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }catch(err){
      console.error("no se a podido iniciar sesion");
      return null
    }
  }

  setUser(user:any){
    this.userDashboard = user;
  }

  getUser(){
    return this.userDashboard;
  }

  getUserLogued(){
   return this.auth.authState;
  }
}
