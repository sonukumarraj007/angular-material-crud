import { UserApiService } from './../../api/user-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  users: any = [];

  constructor(public restApi: UserApiService) { }

  ngOnInit() {
    this.loadUsers();
  }

  // Get users list
  loadUsers() {
    return this.restApi.getUsers().subscribe(res => {
      this.users = res;
    });
  }

  // Delete employee
  deleteUser(id: string) {
    if (window.confirm("Are you sure, you want to delete?")) {
      this.restApi.deleteUser(id).subscribe(data => {
        this.loadUsers();
      });
    }
  }

}
