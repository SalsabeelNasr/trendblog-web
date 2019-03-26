import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/service/authentication.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']

})
export class NavigationBarComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {

  }
  public logout() {
    this.authService.logout();
  }
}
