import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-edititemspage',
  templateUrl: './edititemspage.component.html',
  styleUrls: ['./edititemspage.component.css']
})
export class EdititemspageComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router, public auth: AuthService) { }

  ngOnInit(): void {

  }

}
