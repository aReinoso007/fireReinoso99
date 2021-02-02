import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Animal } from '../model/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(
    public afs: AngularFirestore
  ) { }

  registrarAnimal(animal: Animal){
    const refAnimal = this.afs.collection("animal");
    if (animal.uid == null ){
      animal.uid = this.afs.createId();
    }
    refAnimal.doc(animal.uid).set(Object.assign({}, animal), {merge: true})
  }

  getAnimals(): Observable<any[]>{
    return this.afs.collection("animal").valueChanges();
  }
}
