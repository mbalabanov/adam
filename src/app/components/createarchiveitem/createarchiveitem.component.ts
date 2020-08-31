import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
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

  newArchiveItemDate0: ArchiveItemDates = {
    label: '',
    date: ''
  };

  newArchiveItemDate1: ArchiveItemDates = {
    label: '',
    date: ''
  };


  newArchiveItemImage0: ArchiveItemImages = {
    id: '',
    url: '',
    name: '',
    description: ''
  };

  newArchiveItemImage1: ArchiveItemImages = {
    id: '',
    url: '',
    name: '',
    description: ''
  };

  newArchiveItemImage2: ArchiveItemImages = {
    id: '',
    url: '',
    name: '',
    description: ''
  };

  newArchiveItemImage3: ArchiveItemImages = {
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
      category: new FormControl('artifacts'),
      name: new FormControl('',Validators.required),
      aliases: new FormControl(''),
      shortdescription: new FormControl('',Validators.required),
      longdescription: new FormControl('',Validators.required),
      date0: new FormGroup({
        label: new FormControl(''),
        date: new FormControl(''),
      }),
      date1: new FormGroup({
        label: new FormControl(''),
        date: new FormControl(''),
      }),
      tags: new FormControl(''),
      images0: new FormGroup({
        id: new FormControl('0'),
        url: new FormControl('',Validators.required),
        name: new FormControl('',Validators.required),
        description: new FormControl('')
      }),
      images1: new FormGroup({
        id: new FormControl('1'),
        url: new FormControl(''),
        name: new FormControl(''),
        description: new FormControl('')
      }),
      images2: new FormGroup({
        id: new FormControl('2'),
        url: new FormControl(''),
        name: new FormControl(''),
        description: new FormControl('')
      }),
      images3: new FormGroup({
        id: new FormControl('3'),
        url: new FormControl(''),
        name: new FormControl(''),
        description: new FormControl('')
      }),
      videos: new FormGroup({
        id: new FormControl('0'),
        url: new FormControl(''),
        name: new FormControl(''),
        description: new FormControl('')
      }),
      websiteURLs: new FormGroup({
        id: new FormControl('0'),
        url: new FormControl(''),
        name: new FormControl('')
      }),
      assets: new FormGroup({
        id: new FormControl('0'),
        name: new FormControl(''),
        url: new FormControl('')
      }),
      artifacts: new FormControl(''),
      persons: new FormControl(''),
      events: new FormControl('')
    });

  }

  // Get the form data for validation
  get name() {
    return this.createdArchiveItem.get('name');
  }

  get shortdescription() {
    return this.createdArchiveItem.get('shortdescription');
  }

  get longdescription() {
    return this.createdArchiveItem.get('longdescription');
  }

  get imagesurl() {
    return this.createdArchiveItem.get('images0.url');
  }

  get imagesname() {
    return this.createdArchiveItem.get('images0.name');
  }

  saveNewArchiveItem() {

    let tempImage = {

    };

    this.newArchiveItemDate0 = {
      label: this.createdArchiveItem.value.date0.label,
      date: this.createdArchiveItem.value.date0.date
    };

    this.newArchiveItemDate1 = {
      label: this.createdArchiveItem.value.date1.label,
      date: this.createdArchiveItem.value.date1.date
    };
  
    this.newArchiveItemImage0 = {
      id: this.createdArchiveItem.value.images0.id,
      url: this.createdArchiveItem.value.images0.url,
      name: this.createdArchiveItem.value.images0.name,
      description: this.createdArchiveItem.value.images0.description
    };
    this.newArchiveItemImage1 = {
      id: this.createdArchiveItem.value.images1.id,
      url: this.createdArchiveItem.value.images1.url,
      name: this.createdArchiveItem.value.images1.name,
      description: this.createdArchiveItem.value.images1.description
    };
    this.newArchiveItemImage2 = {
      id: this.createdArchiveItem.value.images2.id,
      url: this.createdArchiveItem.value.images2.url,
      name: this.createdArchiveItem.value.images2.name,
      description: this.createdArchiveItem.value.images2.description
    };
    this.newArchiveItemImage3 = {
      id: this.createdArchiveItem.value.images3.id,
      url: this.createdArchiveItem.value.images3.url,
      name: this.createdArchiveItem.value.images3.name,
      description: this.createdArchiveItem.value.images3.description
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
      dates: [
        this.newArchiveItemDate0,
        this.newArchiveItemDate1
      ],
      tags: this.newTags,
      images: [
        this.newArchiveItemImage0,
        this.newArchiveItemImage1,
        this.newArchiveItemImage2,
        this.newArchiveItemImage3
      ],
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
