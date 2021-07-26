import { UserApiService } from './../../api/user-api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  createUser: any;

  constructor(
    private formBuilder: FormBuilder,
    public restApi: UserApiService,
    public router: Router
  ) { }

  ngOnInit() {
    // user form
    this.createUser = this.formBuilder.group({
      userName: [null, Validators.required],
      age: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      dob: [null, Validators.required],
      gender: [null, Validators.required],
    });
  }

  onSubmit() {
    this.restApi.createUser(this.createUser.value).subscribe((data: {}) => {
      this.router.navigate(['/list-user']);
      alert('User Created...');
    });
  }

}
