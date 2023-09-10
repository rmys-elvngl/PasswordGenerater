import { Component, booleanAttribute } from '@angular/core';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  templateUrl: '\myPage.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstProject';
  password = '';
  //password:string = 'mss'
  length:number = 0;

  buttonClick() {
    const numbers ='1234567890';
    const letters = 'abcdefghijklmnoprstuwxyz';
    const symbols = '!@#$%^&*()'
    
    let validChars = '';

    if(this.includeLetters){
      validChars += letters
    }
    if(this.includeNumbers){
      validChars += numbers
    }
    if(this.includeSymbols){
      validChars += symbols
    }

    let generatedPassw = ' ';
    for(let i=0;i<this.length;i++){
      const index = Math.floor(Math.random()*validChars.length);
      generatedPassw += validChars[index];
    }
    this.password = generatedPassw;  }
  
  modifyLength(value:string){
    //console.log(value)
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)){
      //debugger;
      this.length = parsedValue;
    }
  }
  getPassword(){
    return this.password;
  }
  getName(){
    return 'Rumeysa'
  }
  includeLetters:boolean = false;
  modifyLetters(){
     this.includeLetters= !this.includeLetters;
  }

  includeNumbers:boolean = false;
  modifyNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  includeSymbols:boolean = false;
  modifySymbols(){
    this.includeSymbols =!this.includeSymbols;
  }

}
