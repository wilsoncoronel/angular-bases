import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 29;
  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  public getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }
  getChageHero():void{
    this.name = "Spiderman";
  }
  getChageAge():void{
    this.age = 30;
  }
  resetForm():void{
    //this.name = 'ironman';
    this.age = 45;
    document.querySelectorAll('h1')!.forEach(element =>{
      element.innerHTML = '<h1>Desde Angular</h1>';
    }) 
  }


}
