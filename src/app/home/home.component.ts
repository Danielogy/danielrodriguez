import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  description : Array<any> = [
    {
      header: "Striking",
      des: `Beautifully crafted websites is my goal. I aim to provide
            striking designs that ultimately grabs the attention of the user. I hope
            to leave a vivid impression on the sight and allow the user to have a positive
            experience.`
    },
    {
      header: "Responsive",
      des: `Let's face it -- computers sit in our pockets now more than ever and we often 
            browse the internet on our portable and varying device screens. With a 
            mobile-first approach, I ensure my work is responsive and clean across all devices.`
    },
    {
      header: "Impactful",
      des: `It's not just my only goal to ensure a positive user experience and a nice design.
            I also strive to give meaning and embed an impactiful understanding with each pixel.`
    },

  ]
  ngOnInit(): void {
  }

  scrollToProjects() : void{
    document.querySelector('.projects')?.scrollIntoView({behavior: 'smooth'});
  }

}
