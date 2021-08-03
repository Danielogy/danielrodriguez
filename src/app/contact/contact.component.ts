import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {

  senderName: string = "";

  constructor() { }

  ngOnInit(): void {
    
  }

  sendEmail(e : Event) {
    e.preventDefault();
    const formButton = document.querySelector('form button') as HTMLElement;
    formButton.textContent = "Sending...";

    emailjs.sendForm('default_service', 'template_5p52mb3', e.target as HTMLFormElement, 'user_Y5LnxVuk4QuAM8DYNoIXA')
      .then((result: EmailJSResponseStatus) => {
        formButton.textContent = "Sent"
        setTimeout(this.sendThanks, 3000);
        setTimeout(this.resetForm, 3000);
        console.log(result.text);
      }, (error) => {
        formButton.textContent = "Error Sending"
        setTimeout(this.resetForm, 3000);
        console.log(error.text);
    });

    
    
  }

  sendThanks() : void {
    const thanks = document.querySelector('form h5') as HTMLElement;
    thanks.style.cssText = "display: block";

    setTimeout(function() { thanks.style.cssText = "display: none"}, 5000);
  }

  resetForm(){
    const nameInput = document.querySelector('#name') as HTMLFormElement;
    const email = document.querySelector('#email') as HTMLFormElement;
    const message = document.querySelector('#message') as HTMLFormElement;

    const btn = document.querySelector('form button') as HTMLFormElement;

    this.senderName = nameInput.value;

    nameInput.value = "";

    email.value = "";
    message.value = "";
    btn.textContent = "Send Message";
  }

  
}
