import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes: string[] = ['Spiderman','Thor','Hulk','Ironman'];

  heroeBorrado: string = '';

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.pop() || '';
    // console.log(typeof heroeBorrado);
  }

}
