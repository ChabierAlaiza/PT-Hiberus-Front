import { NgModule } from "@angular/core";
import { UsersListComponent } from "./users-list/users-list.component";
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersRoutingModule } from "./users-routing.module";
import { TableModule } from "primeng/table";
import { CardModule } from "primeng/card";
import { DynamicDialogModule, DynamicDialogRef } from "primeng/dynamicdialog";

@NgModule({
    declarations: [
        UsersListComponent,
        UsersDetailsComponent
    ],
    imports: [
        UsersRoutingModule,
        TableModule,
        CardModule,
        DynamicDialogModule
    ],
    providers: [
        DynamicDialogRef,
        DynamicDialogRef
    ]
})
export class UsersModule { }