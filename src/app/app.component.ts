import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Heroes Marvel';
  public counter: number = 0;
    increaseBy(value: number):void{
        this.counter +=value;
    }

    resetCounter():void{
        this.counter = 0;
    }
}
