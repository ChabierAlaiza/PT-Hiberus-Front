import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersModule } from './users/users.module';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { LogOutComponent } from './login/log-out/log-out.component';
import { LoginModule } from './login/login.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MessagesModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UsersModule,
    LoginModule,
    HomeModule,
    TableModule,
    CardModule,
    DynamicDialogModule
  ],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
