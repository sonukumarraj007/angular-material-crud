import { UserApiService } from './../../api/user-api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userData: any = {};
  updateUserForm: any;
  id: any;
  tmpdate: any;

  constructor(
    public restApi: UserApiService,
    public actRoute: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.updateUserForm = this.formBuilder.group({
      userName: [null, Validators.required],
      age: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      dob: [null, Validators.required],
      gender: [null, Validators.required],
    });

    this.id = this.actRoute.snapshot.params.id;
    this.restApi.getUser(this.id).subscribe((res: any) => {

      this.updateUserForm.patchValue({
        userName: res.userName,
        age: res.age,
        dob: res.dob,
        phone: res.phone,
        email: res.email,
        gender: res.gender
      });
    }, (err) => {
      console.log(err);
    });
  }

  // Update user details
  updateUser() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.restApi.updateUser(this.id, this.updateUserForm.value).subscribe(data => {
        this.router.navigate(['/list-user']);
      });
    }
  }


}
