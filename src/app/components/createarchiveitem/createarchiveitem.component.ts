import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-createarchiveitem',
  templateUrl: './createarchiveitem.component.html',
  styleUrls: ['./createarchiveitem.component.css']
})
export class CreatearchiveitemComponent implements OnInit {

  constructor( public auth: AuthService ) { }

  ngOnInit(): void {
  }

}
