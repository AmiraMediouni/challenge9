import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Salle } from './salle';


@Injectable({
  providedIn: 'root'
})
export class SalleServiceService {
  salleUrl : string =  'http://localhost:3000/salles'

  constructor(private http:HttpClient) { }
  getAll():Observable<Salle[]>{
    return this.http.get<Salle[]>(this.salleUrl)
                    
  }
 /* getOne(uid:number):Observable<Salle[]>{
    return this.http.get<Salle[]>(this.salleUrl+'/'+uid)
                    
  }*/
}
