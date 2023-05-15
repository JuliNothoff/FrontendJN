import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-newexperiencia',
  templateUrl: './newexperiencia.component.html',
  styleUrls: ['./newexperiencia.component.css']
})
export class NewexperienciaComponent implements OnInit {

  nombreE!: string;
  descripcionE!: string; 
  periodoE!: string; 

  constructor(private sExperiencia: ExperienciaService, private router: Router) { }


  ngOnInit(): void {
    
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
