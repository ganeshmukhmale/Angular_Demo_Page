import { Component } from '@angular/core';

@Component({
  selector: 'app-proposal-form',
  templateUrl: './proposal-form.component.html',
  styleUrls: ['./proposal-form.component.css']
})
export class ProposalFormComponent {
  name: string = '';
  response: number | null = null;
  outputMessage: string = '';
  pattern: string[] = [];


  submitResponse() {
    const responseValue = Number(this.response); // Ensure numeric comparison

    if (responseValue === 1) {
      this.outputMessage = `I   ♥   You `;
    } else if (responseValue === 2) {
      this.outputMessage = `Why are you not interested, ${this.name}?`;
   
    } else {
      this.outputMessage = 'Please choose either 1 or 2.';
  
    }
  }
}
