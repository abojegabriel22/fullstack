import { Component, OnInit } from "@angular/core";
import { IMeal } from "../../model/quickSearch.model"
import { HomeService } from "../../services/home.service"
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
    selector: "app-quickSearch",
    templateUrl: "./quickSearch.component.html",
    styleUrls: ["./quickSearch.component.css"]
})

export class QuickSearch implements OnInit{
    constructor(
        private homeService: HomeService,
        private http: HttpClient
    ){}

    mealData: IMeal[] = [];

    ngOnInit(){
        this.getDataFromApi().subscribe((result) => {
            this.mealData = result;
        })
    }

    getDataFromApi():Observable<any[]>{
        const apiUrl = "http://3.17.216.66:4000/quicksearch";

        return this.http.get(apiUrl).pipe(
            map((Response: any) => {
                return Response
            })
        )
    }

    // ngOnInit(){
    //     this.homeService.getMeal().subscribe((result) => {
    //         this.mealData = result;
    //     })
    // }
}