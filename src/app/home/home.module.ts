import { NgModule } from "@angular/core";
import { TableModule } from "primeng/table";
import { CardModule } from "primeng/card";
import { DynamicDialogModule, DynamicDialogRef } from "primeng/dynamicdialog";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HomeRoutingModule,
        TableModule,
        CardModule,
        DynamicDialogModule
    ],
    providers: [
        DynamicDialogRef,
        DynamicDialogRef
    ]
})
export class HomeModule { }