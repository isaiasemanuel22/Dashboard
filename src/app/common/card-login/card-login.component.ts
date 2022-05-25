import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../resources/authService/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.scss']
})
export class CardLoginComponent implements OnInit {
  userData!:FormGroup
  constructor(
    private fb:FormBuilder,
    private auth:AuthService,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }


  createForm(){
    this.userData = this.fb.group({
      email:['', Validators.required],
      password:['',Validators.required]
    })
  }

  submit(){

  }

  loginGoogle(){
    this.auth.loginGoogle().then((response)=>{
      this.auth.setUser(response);
      console.log(response);
      this.route.navigate(['home'])
    })
  }

}
