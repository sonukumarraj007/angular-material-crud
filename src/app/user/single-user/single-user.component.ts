import { UserApiService } from './../../api/user-api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {

  id = this.actRoute.snapshot.params.id;

  userData: any = {};

  constructor(
    public restApi: UserApiService,
    public actRoute: ActivatedRoute,
    public router: Router) {
  }

  ngOnInit() {
    this.restApi.getUser(this.id).subscribe((data: {}) => {
      this.userData = data;
    });
  }

}
