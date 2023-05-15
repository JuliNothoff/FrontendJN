import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hys } from 'src/app/model/hys';
import { HysService } from 'src/app/service/hys.service';

@Component({
  selector: 'app-edithabilidades',
  templateUrl: './edithabilidades.component.html',
  styleUrls: ['./edithabilidades.component.css']
})
export class EdithabilidadesComponent implements OnInit {

  hys: Hys = null!;


  constructor(private sHys: HysService, private activatedRouter: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHys.detail(id).subscribe(data => {
      this.hys = data;
    }, err =>{
      alert("Error al modificar HyS");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHys.update(id, this.hys).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar HyS");
      this.router.navigate(['']);
    })
  }

}
