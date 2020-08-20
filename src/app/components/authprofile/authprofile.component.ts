import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-authprofile',
  templateUrl: './authprofile.component.html',
  styleUrls: ['./authprofile.component.css']
})
export class AuthprofileComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
