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
        console.log(itemurl);
        itemurl.select();  
        document.execCommand('copy');  
        itemurl.setSelectionRange(0, 0);  
    }

    replaceUnreadables(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
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
                    console.log(this.archiveItem);
                    // Replace unreadable characters in longdescription.
                    this.archiveItem.longdescription = this.replaceUnreadables(this.archiveItem.longdescription, '<EQUALS>', '=');
                    this.archiveItem.longdescription = this.replaceUnreadables(this.archiveItem.longdescription, '<AMPERSAND>', '&');

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
                });
                break;
            }

            case 'persons': {
                this.apirequestsService.getPerson(itemSlug)
                .subscribe(data => {
                    this.archiveItem = data;
                    console.log(this.archiveItem);
                    // Replace unreadable characters in longdescription.
                    this.archiveItem.longdescription = this.replaceUnreadables(this.archiveItem.longdescription, '=', '<EQUALS>');
                    this.archiveItem.value.longdescription = this.replaceUnreadables(this.archiveItem.longdescription, '&', '<AMPERSAND>');

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
                });
                break;
            }

            case 'artifacts': {
                this.apirequestsService.getArtifact(itemSlug)
                .subscribe(data => {
                    this.archiveItem = data;
                    console.log(this.archiveItem);
                    // Replace unreadable characters in longdescription.
                    this.archiveItem.longdescription = this.replaceUnreadables(this.archiveItem.longdescription, '=', '<EQUALS>');
                    this.archiveItem.value.longdescription = this.replaceUnreadables(this.archiveItem.longdescription, '&', '<AMPERSAND>');

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
                });
                break;
            }
        }
    });

  }

}
