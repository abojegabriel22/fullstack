import { Component, OnInit } from "@angular/core";
import {Icity} from "../../model/location.model"
import { IRest } from "../../model/rest.model"
import {HomeService} from "../../services/home.service"

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.css"]
})

export class SearchComponent implements OnInit{
    title: string = "find best place near you";
    cities: Icity[] = []
    restautants: IRest[] = []
    disabled: boolean = true;


    // any thing that need to declare 
    constructor(private homeService: HomeService){
        console.log(">>>>>>>inside constructor");
    }

    // when the component will load 
    ngOnInit(): void{
        console.log(">>>>>>>inside ngOninit");
        
        this.homeService.getCityData()
        .subscribe((data:Icity[]) => this.cities = data)
    }
    handleCity(event:Event){
        console.log((event.target as HTMLInputElement).value)
        if((event.target as HTMLInputElement).value !== "default"){
            this.disabled = false
            let stateId = Number((event.target as HTMLInputElement).value)
            try{
                this.homeService.getRestwrtCity(stateId)
                .subscribe((data:IRest[]) => this.restautants = data)
            }catch(err){
                console.log(err)
            }
        }else{
            this.disabled = true
        }
        
    }
    
}