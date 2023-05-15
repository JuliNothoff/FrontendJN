import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyecto: Proyecto[] = [];
  nombre!: string;
  descripcion!: string;
  fecha!: string;
  link!: string;

  constructor(private proyectoS: ProyectoService, private tokenService: TokenService, private router: Router) { }

  isLogged = false;



  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;      
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void{
    this.proyectoS.lista().subscribe(data =>{this.proyecto = data});
  }

  delete(id: number){
    if(id != undefined){
      this.proyectoS.delete(id).subscribe(data => {this.cargarProyecto()}, 
      err => {
        alert("No se pudo eliminar item de proyecto"); }
      )
    }
  }

  onCreate(): void{
    const proyecto = new Proyecto (this.nombre, this.descripcion, this.fecha, this.link);
    this.proyectoS.save(proyecto).subscribe(data =>{
      alert("Proyecto creado correctamente");
      this.router.navigate(['']);
    }, err =>{
      alert("Fallo la creacion de nuevo proyecto");
      this.router.navigate(['']);
    })
  }


}
