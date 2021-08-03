import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:scroll)': 'onScroll($event)'
  }
})


export class AppComponent {

  ngOnInit(){
    AOS.init();
  }

  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 100;

  constructor() {}

  onScroll(evt : any){
    
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);

    if(this.currPos >= this.changePos)
      this.isScrolled = true;
    else
      this.isScrolled = false;
  }

  renderMenu() : void{
    // burger line and mobile menu variables
    const line1 = document.querySelector('.line1') as HTMLElement;
    const line2 = document.querySelector('.line2') as HTMLElement;
    const menu = document.querySelector('.menu') as HTMLElement;

    // add corresponding animations --
    line1.classList.toggle('animate-line1');
    line2.classList.toggle('animate-line2');
    menu.classList.toggle('active');
  }

  scrollToSection(section : string) : void{
    const name = document.querySelector(section) as HTMLElement;
    const line1 = document.querySelector('.line1') as HTMLElement;
    const line2 = document.querySelector('.line2') as HTMLElement;

    line1.classList.remove('animate-line1');
    line2.classList.remove('animate-line2');

    name.scrollIntoView({behavior: 'smooth'});

    const menu = document.querySelector('.menu') as HTMLElement;
    menu.classList.remove('active');

    
  }

  
}
