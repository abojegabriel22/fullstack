import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { Icity } from "../model/location.model";
import { IRest } from "../model/rest.model"
import { IMeal } from "../model/quickSearch.model";
import { environment } from "../../environments/environment"

@Injectable({
    providedIn: "root"
})

export class HomeService{
    // base_url = "http://3.17.216.66:4000";

    constructor(private http: HttpClient){}
    getCityData(): Observable<Icity[]>{
        return this.http.get<Icity[]>(`${environment.apiUrl}/location`)
    }

    getRestwrtCity(stateId:number):Observable<IRest[]>{
        return this.http.get<IRest[]>(`${environment.apiUrl}/restaurant?stateId=${stateId}`)
    }

    getMeal():Observable<IMeal[]>{
        return this.http.get<IMeal[]>(`${environment.apiUrl}/quicksearch`)
    }
}