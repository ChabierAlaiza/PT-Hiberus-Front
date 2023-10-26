import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { UsersDetailsComponent } from '../users-details/users-details.component';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  public users: any[] = [];

  constructor(
    private dialogService: DialogService,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.usersService.getAll().subscribe(
      data => {
        this.users = data;
      }
    )
  }

  editUser(user_id: number) {
    const ref = this.dialogService.open(UsersDetailsComponent, {
      data: {
        user_id: user_id
      },
      header: "Ficha de usuario",
      width: "65%",
      baseZIndex: 300
    });
    ref.onClose.subscribe((data: any) => {
      if (data) {
        this.loadData();
      }
    });

  }

}
