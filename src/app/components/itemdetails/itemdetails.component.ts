import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ApirequestsService } from '../../services/apirequests.service';
import { ArchiveItemClass, ArchiveItemDates, ArchiveItemImages, ArchiveItemVideos, ArchiveItemWebsiteURLs, ArchiveItemAssets } from '../../classes/archiveitemclass';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailsComponent implements OnInit {

    // Variables for displaying archive item details
    archiveCategory: string = '';
    archiveItem: any = {};
    pageUrl: string;

    relatedArtifacts: Array<object> = [];
    relatedPersons: Array<object> = [];
    relatedEvents: Array<object> = [];

    // Variables for editing archive item details
    editingFormArchiveItem = new FormGroup({});

    editedArchiveItem: ArchiveItemClass = { 
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

    editedArchiveItemDates: ArchiveItemDates = {
        label: '',
        date: ''
    };

    editedArchiveItemImages: ArchiveItemImages = {
        id: '',
        url: '',
        name: '',
        description: ''
    };

    editedArchiveItemVideos: ArchiveItemVideos = {
        id: '',
        url: '',
        name: '',
        description: ''
    };

    editedArchiveItemWebsiteURLs: ArchiveItemWebsiteURLs = {
        id: '',
        url: '',
        name: '',
    };

    editedArchiveItemAssets: ArchiveItemAssets = {
        id: '',
        url: '',
        name: '',
    };

    editedAliases: Array<string> = [];
    editedTags: Array<string> = [];
    editedRelatedArtifacts: Array<string> = [];
    editedRelatedPersons: Array<string> = [];
    editedRelatedEvents: Array<string> = [];

    deleteThis(dataType, id) {
        this.apirequestsService.deleteItem(dataType, id).subscribe((data)=>{
            console.log('Request successful');
    });

    }

    setCarouselActiveID(id){
        var elems = document.querySelectorAll('.active');
        [].forEach.call(elems, function(el) {
            el.classList.remove('active');
        });
        var activeElem = document.getElementById(id);
        activeElem.classList.add('active');
    };

    clipboardItemURL(itemurl) {
        itemurl.select();  
        document.execCommand('copy');  
        itemurl.setSelectionRange(0, 0);  
    }

    assignValuesToFormItem() {

        this.editingFormArchiveItem = new FormGroup({
            id: new FormControl(this.archiveItem.id, Validators.required),
            category:  new FormControl(this.archiveItem.category, Validators.required),
            name: new FormControl(this.archiveItem.name, Validators.required),
            aliases: new FormControl(this.archiveItem.aliases, Validators.required), 
            shortdescription: new FormControl(this.archiveItem.shortdescription, Validators.required),
            longdescription: new FormControl(this.archiveItem.longdescription, Validators.required),
            dates: new FormGroup({
                label: new FormControl(this.archiveItem.dates[0].label,Validators.required),
                date: new FormControl(this.archiveItem.dates[0].date,Validators.required),
            }),
            tags: new FormControl(this.archiveItem.tags, Validators.required),
            images: new FormGroup({
                id: new FormControl(this.archiveItem.images[0].id,Validators.required),
                url: new FormControl(this.archiveItem.images[0].url,Validators.required),
                name: new FormControl(this.archiveItem.images[0].name,Validators.required),
                description: new FormControl(this.archiveItem.images[0].description,Validators.required)
            }),
            videos: new FormGroup({
                id: new FormControl(this.archiveItem.videos[0].id,Validators.required),
                url: new FormControl(this.archiveItem.videos[0].url,Validators.required),
                name: new FormControl(this.archiveItem.videos[0].name,Validators.required),
                description: new FormControl(this.archiveItem.videos[0].description,Validators.required)
            }),
            websiteURLs: new FormGroup({
                id: new FormControl(this.archiveItem.websiteURLs[0].id,Validators.required),
                url: new FormControl(this.archiveItem.websiteURLs[0].url,Validators.required),
                name: new FormControl(this.archiveItem.websiteURLs[0],Validators.required)
            }),
            assets: new FormGroup({
                id: new FormControl(this.archiveItem.assets[0].id,Validators.required),
                name: new FormControl(this.archiveItem.assets[0].name,Validators.required),
                url: new FormControl(this.archiveItem.assets[0].url,Validators.required)
              }),
            artifacts: new FormControl(this.archiveItem.artifacts, Validators.required),
            persons: new FormControl(this.archiveItem.persons, Validators.required),
            events: new FormControl(this.archiveItem.events, Validators.required)
        });
    }

    saveNewArchiveItem() {

        this.editedArchiveItemDates = {
            label: this.editingFormArchiveItem.value.dates.label,
            date: this.editingFormArchiveItem.value.dates.date
        };
        
        this.editedArchiveItemImages = {
            id: this.editingFormArchiveItem.value.images.id,
            url: this.editingFormArchiveItem.value.images.url,
            name: this.editingFormArchiveItem.value.images.name,
            description: this.editingFormArchiveItem.value.images.description
          };
        
          this.editedArchiveItemVideos = {
            id: this.editingFormArchiveItem.value.videos.id,
            url: this.editingFormArchiveItem.value.videos.url,
            name: this.editingFormArchiveItem.value.videos.name,
            description: this.editingFormArchiveItem.value.videos.description
          };
        
          this.editedArchiveItemWebsiteURLs = {
            id: this.editingFormArchiveItem.value.websiteURLs.id,
            url: this.editingFormArchiveItem.value.websiteURLs.url,
            name: this.editingFormArchiveItem.value.websiteURLs.name,
          };
        
          this.editedArchiveItemAssets = {
            id: this.editingFormArchiveItem.value.assets.id,
            url: this.editingFormArchiveItem.value.assets.url,
            name: this.editingFormArchiveItem.value.assets.name,
          };
          if(this.editingFormArchiveItem.value.aliases.length)
          this.editedAliases = this.editingFormArchiveItem.value.aliases.split(',');
          this.editedTags = this.editingFormArchiveItem.value.tags.split(',');
          this.editedRelatedArtifacts = this.editingFormArchiveItem.value.artifacts.split(',');
          this.editedRelatedPersons = this.editingFormArchiveItem.value.persons.split(',');
          this.editedRelatedEvents = this.editingFormArchiveItem.value.events.split(',');

          this.editedArchiveItem = { 
            id: this.archiveItem.id,
            category: this.archiveItem.category,
            name: this.archiveItem.name,
            aliases: this.editedAliases,
            shortdescription: this.archiveItem.shortdescription,
            longdescription: this.archiveItem.longdescription,
            dates: [this.editedArchiveItemDates],
            tags: this.editedTags,
            images: [this.editedArchiveItemImages],
            videos: [this.editedArchiveItemVideos],
            websiteURLs: [this.editedArchiveItemWebsiteURLs],
            assets: [this.editedArchiveItemAssets],
            artifacts: this.editedRelatedArtifacts,
            persons: this.editedRelatedPersons,
            events: this.editedRelatedEvents
        };
    }

constructor(private apirequestsService: ApirequestsService, private route: ActivatedRoute, public auth: AuthService ) { }

ngOnInit(): void {

    let itemSlug;

    this.route.paramMap.subscribe(params => {
        this.archiveCategory = params.get('categoryId');
        itemSlug = params.get('itemId');
        this.pageUrl = this.archiveCategory + '/' + itemSlug;

        this.relatedArtifacts = [];
        this.relatedPersons = [];
        this.relatedEvents = [];

        switch (this.archiveCategory) {
            case 'events': {
                this.apirequestsService.getEvent(itemSlug)
                .subscribe(data => {
                    this.archiveItem = data;

                    for (let individualPerson of this.archiveItem.persons) {
                        this.apirequestsService.getPerson(individualPerson).subscribe(data => {
                            this.relatedPersons.push(data);
                        });
                    };
            
                    for (let individualArtifact of this.archiveItem.artifacts) {
                        this.apirequestsService.getArtifact(individualArtifact).subscribe(data => {
                            this.relatedArtifacts.push(data);
                        });
                    };
            
                    for (let individualEvent of this.archiveItem.events) {
                        this.apirequestsService.getEvent(individualEvent).subscribe(data => {
                            this.relatedEvents.push(data);
                        });
                    };
                    this.assignValuesToFormItem();
                });
                break;
            }

            case 'persons': {
                this.apirequestsService.getPerson(itemSlug)
                .subscribe(data => {
                    this.archiveItem = data;

                    for (let individualPerson of this.archiveItem.persons) {
                        this.apirequestsService.getPerson(individualPerson).subscribe(data => {
                            this.relatedPersons.push(data);
                        });
                    };
            
                    for (let individualArtifact of this.archiveItem.artifacts) {
                        this.apirequestsService.getArtifact(individualArtifact).subscribe(data => {
                            this.relatedArtifacts.push(data);
                        });
                    };
            
                    for (let individualEvent of this.archiveItem.events) {
                        this.apirequestsService.getEvent(individualEvent).subscribe(data => {
                            this.relatedEvents.push(data);
                        });
                    };
                    this.assignValuesToFormItem();
                });
                break;
            }

            case 'artifacts': {
                this.apirequestsService.getArtifact(itemSlug)
                .subscribe(data => {
                    this.archiveItem = data;

                    for (let individualPerson of this.archiveItem.persons) {
                        this.apirequestsService.getPerson(individualPerson).subscribe(data => {
                            this.relatedPersons.push(data);
                        });
                    };
            
                    for (let individualArtifact of this.archiveItem.artifacts) {
                        this.apirequestsService.getArtifact(individualArtifact).subscribe(data => {
                            this.relatedArtifacts.push(data);
                        });
                    };
            
                    for (let individualEvent of this.archiveItem.events) {
                        this.apirequestsService.getEvent(individualEvent).subscribe(data => {
                            this.relatedEvents.push(data);
                        });
                    };
                    this.assignValuesToFormItem();
                });
                break;
            }
        }
    });

  }

}
