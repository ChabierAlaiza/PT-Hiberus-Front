import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { UsersService } from '../users.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent {
  public user: any = {
    name: "Chabier",
    email: "chabier@chabier.com",
    surname: "Alaiza",
  };

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {

  }

  save() {
  }

  delete() {
  }


}
