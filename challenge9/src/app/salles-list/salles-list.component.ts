import { Component, OnInit } from '@angular/core';
import { Salle } from '../salle';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SalleServiceService } from '../salle-service.service';

@Component({
  selector: 'app-salles-list',
  templateUrl: './salles-list.component.html',
  styleUrls: ['./salles-list.component.css']
})
export class SallesListComponent implements OnInit {
  public selectedId:any
  public salles:any=[]
 /* salles:Salle[] = [
    {id:1, nom : 'éléctro mecanique',  capacite : 30 } , 
    {id:2,nom:'Genie civile',capacite:50}, 
    {id:3,nom:'IOT', capacite:100}, 
    {id:4,nom:'Informatique mecanique', capacite:10}, 
    {id:5,nom:'BI', capacite:50} ] 
    private _usersService:UserService){}
  
    */
   
    constructor(private router:Router, private route:ActivatedRoute,private _salleService:SalleServiceService){}
    ngOnInit(): void {
      this._salleService.getAll()
        .subscribe(data => this.salles=data)    
           
    }
    onSelect(salle: any){
      this.router.navigate(['salles',salle.id])
  
    }

    /*isSelected(salle:any){
      return salle.id===this.selectedId 
    }
  */
 
  }
   /* constructor(private router:Router, private route:ActivatedRoute){}
    ngOnInit(): void {
      this.route.paramMap.subscribe((params:ParamMap)=>{
        let id=parseInt(params.get('id')!);
        this.selectedId=id
      })
    }
    
 
  }*/
  
