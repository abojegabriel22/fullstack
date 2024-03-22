import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./Home/home.component";
import { listingComponent } from "./listing/listing.component";

const routes: Routes = [
    {path: "listing/:id", component:listingComponent},
    {path: "",component:HomeComponent}

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    providers:[],
    exports:[RouterModule]
})

export class AppRoutingModule{}