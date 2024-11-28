import { Component, EventEmitter, input, Input, Output } from '@angular/core';


@Component({
  selector: 'app-lista-pizza',
  standalone: true,
  imports: [],
  templateUrl: './lista-pizza.component.html',
  styleUrl: './lista-pizza.component.css'
})
export class ListaPizzaComponent {

  @Input({required:true}) pizze!: any;
  
  @Output() selectPizza = new EventEmitter<number>(); //obbligo l'event mitter a passarmi un number

  onSelectedPizza(id: number){
    this.selectPizza.emit(id)
  }
 
  @Input ({required:true}) pizzeObj!: any;
}
