import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: Educacion[] = [];
  nombreE!: string;
  descripcionE!: string;
  finalE!: string;

  constructor(private educacionS: EducacionService, private tokenService: TokenService, private router: Router) { }

  isLogged = false;


  ngOnInit(): void {

    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;      
    } else {
      this.isLogged = false;
    }
    
  }

  cargarEducacion(): void {
    this.educacionS.lista().subscribe(data =>{this.educacion = data;})
  }

  delete(id: number){
    if(id != undefined){
      this.educacionS.delete(id).subscribe(data => {this.cargarEducacion()}, 
      err => {
        alert("No se pudo eliminar item de educacion"); }
      )
    }
  }

  onCreate(): void{
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.finalE);
    this.educacionS.save(educacion).subscribe(data =>{
      alert("Educacion creada correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo la creacion de nueva educacion");
      this.router.navigate(['']);
    })
  }


}
