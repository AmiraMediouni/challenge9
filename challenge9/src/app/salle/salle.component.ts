import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SalleServiceService } from '../salle-service.service';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit{

  public salleId:any
  public salles:any=[]
    
  constructor(private route:ActivatedRoute,private router:Router ,private _salleService:SalleServiceService){  }
  ngOnInit(){
      let id=parseInt((this.route.snapshot.paramMap.get('id')!))
      this.salleId=id
      this._salleService.getOne(this.salleId)
      .subscribe(
        data => this.salles=data
        )    
    
  }
 
}
