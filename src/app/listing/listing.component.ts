import { Component, OnInit } from "@angular/core";
import { listingService } from "../services/listing.service";
import { ActivatedRoute } from "@angular/router";
import { IRest } from "../model/rest.model";

@Component({
    selector: "app-listing",
    templateUrl: "./listing.component.html",
    styleUrls: ["./listing.component.css"]
})

export class listingComponent implements OnInit{
    mealId: number = 1;
    restaurants: IRest[] = [];

    constructor(
        private route:ActivatedRoute,
        private listingService:listingService
    ){}


    ngOnInit(): void {
        this.mealId = this.route.snapshot.params["id"];
        this.listingService.getWrtM(this.mealId)
        .subscribe((data:IRest[]) => {
            this.restaurants = data
        })
    }




}