import { Injectable } from '@angular/core';
import { Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor( private messageService: MessageService) { }
  getHeroe(id: number): Observable <Hero>{
    this.messageService.add('HeroSercive: fetched heroes id = ${id}');
    return of (HEROES.find(hero => hero.id===id));
  }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add('HeroSercive: fetched heroes');
    return of(HEROES)
  }

}
