import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../model/animal';
import { AnimalService } from '../service/animal.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  animals: Observable<any[]>;
  constructor(
    private animalService: AnimalService
  ) { }

  ngOnInit() {
    this.animals = this.animalService.getAnimals();
    console.log(this.animals);

  }


}
