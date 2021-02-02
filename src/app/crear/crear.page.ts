import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from '../model/animal';
import { AnimalService } from '../service/animal.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  animal: Animal = new Animal();

  constructor(
    private animalService: AnimalService
    ) { }

  ngOnInit() {
  }
  
  registarNuevoAnimal(){
    this.animalService.registrarAnimal(this.animal);
    this.animal = new Animal();
    alert("Animal registrado");
  }

}
