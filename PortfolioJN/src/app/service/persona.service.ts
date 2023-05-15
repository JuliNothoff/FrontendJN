import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'https://backendjn.onrender.com/persona'

  constructor(private http:HttpClient) { }

  public verPersona(): Observable<Persona> {
    return this.http.get<Persona>(this.URL+'/ver')
  }
}
