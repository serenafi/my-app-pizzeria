import { Component } from '@angular/core';
import { ListaPizzaComponent } from './lista-pizza/lista-pizza.component';
import { PizzaComponent } from './pizza/pizza.component';
import { DUMMY_PIZZA } from './DUMMY_PIZZA';

@Component({
  selector: 'app-pizzeria',
  standalone: true,
  imports: [ListaPizzaComponent, PizzaComponent],
  templateUrl: './pizzeria.component.html',
  styleUrl: './pizzeria.component.css'
})

export class PizzeriaComponent {

  pizze = DUMMY_PIZZA; 

  pizzaSel!: any;

  onSelectPizza(id: number){
    console.log('Pizza: ' + id)
    
    this.pizzaSel= this.pizze.filter((pizza)=> id === pizza.id);
    console.log(this.pizzaSel);
    console.log(typeof this.pizzaSel);

    this.pizzaSel = this.pizzaSel.pop(); //mi restituise l'elemento dell'array, quindi non è più un array ma c'è solo l'oggetto
    
  }

}

