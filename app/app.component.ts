import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OnlineHotelBooking';

  constructor(public auth: AuthService,private router:Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const url = event.url;
        if (url === '/home/login' || url === '/home/logout') {
          history.pushState(null, null, location.href);
        }
      }
    });
  }

  loggedin(){
    return localStorage.getItem('token');
  }
  onlogout(){
    localStorage.removeItem('token');
  }
}
