import { Component, OnInit, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';


@Component({
  selector: 'app-edititemspage',
  templateUrl: './edititemspage.component.html',
  styleUrls: ['./edititemspage.component.css']
})
export class EdititemspageComponent implements OnInit {

  isBrowser: boolean;

  constructor(  private route: ActivatedRoute, private router: Router, @Inject(PLATFORM_ID) platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {

  }

}
