import {Component} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {UserServiceClient} from './services/user.service.client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tele-connect';
  username = 'test';
  isCollapsed = true;
  strlen = localStorage.length;
  user = JSON.parse(localStorage.getItem('user'));
  searchTvQuery = '';

  constructor(private router: Router, private userService: UserServiceClient) {
  }

  searchQuery() {
    this.router.navigate(['home'], {
      queryParams: {
        'search': this.searchTvQuery
      }
    });
  }

  isAdmin() {
    // let admin = false;
    // console.log(this.user);
    // this.userService.findUserAdmin(this.user.id)
    //   .then(result => {
    //     console.log(result);
    //     admin = result.length !== 0;
    //   });
    // return admin;
    // return this.user.type === 'ADMIN';
    if (this.user === null) {
      return false;
    }
    if (this.user.hasOwnProperty('type')) {
      return this.user.type === 'ADMIN';
    } else {
      return false;
    }
    // return false
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['home']).then(() => location.reload());
  }
}
