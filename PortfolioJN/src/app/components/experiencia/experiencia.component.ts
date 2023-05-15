import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{

  expe: Experiencia[] = [];
  nombreE!: string;
  descripcionE!: string;
  periodoE!: string;

  constructor(private sExperiencia: ExperienciaService, private tokenService: TokenService, private router: Router) { }
  
  isLogged = false;
  
  
  
  ngOnInit(): void {
    this.cargarExperiencia();  
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }   
  }

  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data => {this.expe = data});
  } 

  delete(id: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(data =>{
        this.cargarExperiencia();
      }, err => {
        alert("No se pudo eliminar la experiencia");}
      )
    }
  }

  onCreate(): void{
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.periodoE);
    this.sExperiencia.save(expe).subscribe(data =>{
      alert("Experiencia agregada");
      this.router.navigate(['']);      
    }, err =>{
      alert("No se pudo agregar la experiencia");
      this.router.navigate(['']);
    })    
  }

}
