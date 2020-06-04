import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent   {

  pokemonObservable: Observable<any>;
  constructor(http: HttpClient, router: Router) {
    const baseUrl = 'https://jsonplaceholder.typicode.com/photos/';
    this.pokemonObservable = http.get(baseUrl + router.url );
  }
}
