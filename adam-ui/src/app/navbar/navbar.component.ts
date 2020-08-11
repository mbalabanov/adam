import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchString: Object = {};

  constructor(private route: ActivatedRoute, private router: Router, private forms: FormsModule) { }

  search(value) {
    this.router.navigateByUrl('/search/' + value.searchInput);
  }

  ngOnInit(): void {
  }

}
