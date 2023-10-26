import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { UsersService } from '../users.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent {
  public user: any = {};


  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private usersService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.usersService.get(this.config.data.userId).subscribe(
      data => {
        this.user = data;
      }
    )
  }

  save() {
    console.log(this.user);
    this.usersService.save(this.user.id, this.user).subscribe(
      data => {
        this.ref.close();
      }
    )
  }

  delete() {
    this.user.deleted = true;
    this.save();
  }


}
