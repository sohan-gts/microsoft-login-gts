import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

constructor(private authService: MsalService){
}

  ngOnInit(): void {

  }
  // title = 'msal-example';



  login() {
    this.authService.loginPopup()
      .subscribe((results: AuthenticationResult)=>{
        console.log(results);
      });
  }


}
