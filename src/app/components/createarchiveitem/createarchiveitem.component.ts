import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ApirequestsService } from '../../services/apirequests.service';
import { ArchiveItemClass, ArchiveItemDates, ArchiveItemImages, ArchiveItemVideos, ArchiveItemWebsiteURLs, ArchiveItemAssets } from '../../classes/archiveitemclass';

@Component({
  selector: 'app-createarchiveitem',
  templateUrl: './createarchiveitem.component.html',
  styleUrls: ['./createarchiveitem.component.css']
})
export class CreatearchiveitemComponent implements OnInit {

  generatedRndId: String = '';
  todayObj: number = Date.now();
  createdArchiveItem = new FormGroup({ });

  newArchiveItem: ArchiveItemClass = { 
    id: '',
    category: '',
    name: '',
    aliases: [],
    shortdescription: '',
    longdescription: '',
    dates: [],
    tags: [],
    images: [],
    videos: [],
    websiteURLs: [],
    assets: [],
    artifacts: [],
    persons: [],
    events: []
  };

  newArchiveItemDates: ArchiveItemDates = {
    label: '',
    date: ''
  };

  newArchiveItemImages: ArchiveItemImages = {
    id: '',
    url: '',
    name: '',
    description: ''
  };

  newArchiveItemVideos: ArchiveItemVideos = {
    id: '',
    url: '',
    name: '',
    description: ''
  };

  newArchiveItemWebsiteURLs: ArchiveItemWebsiteURLs = {
    id: '',
    url: '',
    name: '',
  };

  newArchiveItemAssets: ArchiveItemAssets = {
    id: '',
    url: '',
    name: '',
  };

  newAliases: Array<string> = [];
  newTags: Array<string> = [];
  newRelatedArtifacts: Array<string> = [];
  newRelatedPersons: Array<string> = [];
  newRelatedEvents: Array<string> = [];

  constructor( public auth: AuthService, private apirequestsService: ApirequestsService) { }

  ngOnInit(): void {

    this.generatedRndId = 'a' + Math.floor(Math.random() * 10) + '_' + this.todayObj;

    this.createdArchiveItem = new FormGroup({ 
      id: new FormControl(this.generatedRndId), 
      category: new FormControl('artifacts',Validators.required),
      name: new FormControl('',Validators.required),
      aliases: new FormControl('',Validators.required),
      shortdescription: new FormControl('',Validators.required),
      longdescription: new FormControl('',Validators.required),
      dates: new FormGroup({
        label: new FormControl('',Validators.required),
        date: new FormControl('',Validators.required),
      }),
      tags: new FormControl('',Validators.required),
      images: new FormGroup({
        id: new FormControl('',Validators.required),
        url: new FormControl('',Validators.required),
        name: new FormControl('',Validators.required),
        description: new FormControl('',Validators.required)
      }),
      videos: new FormGroup({
        id: new FormControl('',Validators.required),
        url: new FormControl('',Validators.required),
        name: new FormControl('',Validators.required),
        description: new FormControl('',Validators.required)
      }),
      websiteURLs: new FormGroup({
        id: new FormControl('',Validators.required),
        url: new FormControl('',Validators.required),
        name: new FormControl('',Validators.required)
      }),
      assets: new FormGroup({
        id: new FormControl('',Validators.required),
        name: new FormControl('',Validators.required),
        url: new FormControl('',Validators.required)
      }),
      artifacts: new FormControl('',Validators.required),
      persons: new FormControl('',Validators.required),
      events: new FormControl('',Validators.required)
    });

  }

  saveNewArchiveItem() {

    this.newArchiveItemDates = {
      label: this.createdArchiveItem.value.dates.label,
      date: this.createdArchiveItem.value.dates.date
    };
  
    this.newArchiveItemImages = {
      id: this.createdArchiveItem.value.images.id,
      url: this.createdArchiveItem.value.images.url,
      name: this.createdArchiveItem.value.images.name,
      description: this.createdArchiveItem.value.images.description
    };
  
    this.newArchiveItemVideos = {
      id: this.createdArchiveItem.value.videos.id,
      url: this.createdArchiveItem.value.videos.url,
      name: this.createdArchiveItem.value.videos.name,
      description: this.createdArchiveItem.value.videos.description
    };
  
    this.newArchiveItemWebsiteURLs = {
      id: this.createdArchiveItem.value.websiteURLs.id,
      url: this.createdArchiveItem.value.websiteURLs.url,
      name: this.createdArchiveItem.value.websiteURLs.name,
    };
  
    this.newArchiveItemAssets = {
      id: this.createdArchiveItem.value.assets.id,
      url: this.createdArchiveItem.value.assets.url,
      name: this.createdArchiveItem.value.assets.name,
    };

    this.newAliases = this.createdArchiveItem.value.aliases.split(',');
    this.newTags = this.createdArchiveItem.value.tags.split(',');
    this.newRelatedArtifacts = this.createdArchiveItem.value.artifacts.split(',');
    this.newRelatedPersons = this.createdArchiveItem.value.persons.split(',');
    this.newRelatedEvents = this.createdArchiveItem.value.events.split(',');

    this.newArchiveItem = {
      id: this.createdArchiveItem.value.id,
      category: this.createdArchiveItem.value.category,
      name: this.createdArchiveItem.value.name,
      aliases: this.newAliases,
      shortdescription: this.createdArchiveItem.value.shortdescription,
      longdescription: this.createdArchiveItem.value.longdescription,
      dates: [this.newArchiveItemDates],
      tags: this.newTags,
      images: [this.newArchiveItemImages],
      videos: [this.newArchiveItemVideos],
      websiteURLs: [this.newArchiveItemWebsiteURLs],
      assets: [this.newArchiveItemAssets],
      artifacts: this.newRelatedArtifacts,
      persons: this.newRelatedPersons,
      events: this.newRelatedEvents
    };

    console.log(this.newArchiveItem);

    this.apirequestsService.postArchiveItem(JSON.stringify(this.newArchiveItem), this.createdArchiveItem.value.category).subscribe((data)=>{
      console.log('Request successful');
    });

  }


}
