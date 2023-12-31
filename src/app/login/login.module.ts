import { NgModule } from "@angular/core";
import { TableModule } from "primeng/table";
import { CardModule } from "primeng/card";
import { DynamicDialogModule, DynamicDialogRef } from "primeng/dynamicdialog";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { LogOutComponent } from "./log-out/log-out.component";
import { LoginRoutingModule } from "./login-routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MessageService } from "primeng/api";
import { MessagesModule } from "primeng/messages";

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        LogOutComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        LoginRoutingModule,
        TableModule,
        CardModule,
        DynamicDialogModule,
        MessagesModule
    ],
    providers: [
        DynamicDialogRef,
        DynamicDialogRef,
        MessageService
    ]
})
export class LoginModule { }