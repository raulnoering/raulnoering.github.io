import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bat';
  constructor(private router: Router){}
  goToIndex() {
    this.setActive('index');
    this.router.navigate(['/', 'index']);
    ;
  }
  goToAboutUs() {
    this.setActive('about');
    this.router.navigate(['/', 'about']);
  }

  setActive (ide: string) {
    var elementos = document.getElementsByClassName('nav-link');
    for (let index = 0; index < elementos.length; index++) {
      const element = elementos[index];
      element.classList.remove("active");
      
    }
    var element=document.getElementById(ide);
    element?.classList.add('active');
  }
  
}
