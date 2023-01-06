import { Component, OnInit, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UsersService } from 'app/services/users-service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@Input()
  email: any;
  password: any;


    constructor(private router: Router,
                private usersService: UsersService) { }

    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

    open(page: any) {
        this.router.navigateByUrl('/' + page);
    }

    getToken() {
        let data = {
          email: this.email,
          password: this.password
        }
        this.usersService.getToken(data).subscribe((data: any)=> {
            console.log("Uspješno ste se prijavili");
            console.log(data.token)
            sessionStorage.setItem("jwt", data.token);
            this.router.navigateByUrl('/profile')
          },
          (error: any)=>{
            console.log(error);
          }
          );

      }

}

