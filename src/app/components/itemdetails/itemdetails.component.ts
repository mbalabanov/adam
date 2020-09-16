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
    editingFormArchiveItem = new FormGroup({ });

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

    editedArchiveItemDate0: ArchiveItemDates = {
        label: '',
        date: ''
    };

    editedArchiveItemDate1: ArchiveItemDates = {
        label: '',
        date: ''
    };

    editedArchiveItemImage0: ArchiveItemImages = {
        url: '',
        name: '',
        description: ''
    };

    editedArchiveItemImage1: ArchiveItemImages = {
        url: '',
        name: '',
        description: ''
    };

    editedArchiveItemImage2: ArchiveItemImages = {
        url: '',
        name: '',
        description: ''
    };

    editedArchiveItemImage3: ArchiveItemImages = {
        url: '',
        name: '',
        description: ''
    };

    editedArchiveItemVideos: ArchiveItemVideos = {
        url: '',
        name: '',
        description: ''
    };

    editedArchiveItemWebsiteURLs: ArchiveItemWebsiteURLs = {
        url: '',
        name: '',
    };

    editedArchiveItemAssets: ArchiveItemAssets = {
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

        let tempDatesArray: Array<any> = [];
        for(let datesIndex = 0; datesIndex < 2; datesIndex++) {
            if(this.archiveItem.dates[datesIndex]) {
                tempDatesArray.push(this.archiveItem.dates[datesIndex]);
            } else {
                let emptydate: ArchiveItemDates = {
                    label: '',
                    date: ''
                };
                tempDatesArray.push(emptydate);
            }
        };

        let tempImagesArray: Array<any> = [];

        for(let imageIndex = 0; imageIndex < 4; imageIndex++) {
            if(this.archiveItem.images[imageIndex]) {
                tempImagesArray.push(this.archiveItem.images[imageIndex]);
            } else {
                let emptyImage: ArchiveItemImages = {
                    url: '',
                    name: '',
                    description: ''
                };
                tempImagesArray.push(emptyImage);
            }
        };

        this.editingFormArchiveItem = new FormGroup({
            id: new FormControl(this.archiveItem._id, Validators.required),
            category:  new FormControl(this.archiveItem.category),
            name: new FormControl(this.archiveItem.name, Validators.required),
            aliases: new FormControl(this.archiveItem.aliases.toString()),
            shortdescription: new FormControl(this.archiveItem.shortdescription),
            longdescription: new FormControl(this.archiveItem.longdescription),
            date0: new FormGroup({
                label: new FormControl(tempDatesArray[0].label),
                date: new FormControl(tempDatesArray[0].date),
            }),
            date1: new FormGroup({
                label: new FormControl(tempDatesArray[1].label),
                date: new FormControl(tempDatesArray[1].date),
            }),
            tags: new FormControl(this.archiveItem.tags.toString()),
            image0: new FormGroup({
                url: new FormControl(tempImagesArray[0].url, Validators.required),
                name: new FormControl(tempImagesArray[0].name),
                description: new FormControl(tempImagesArray[0].description)
            }),
            image1: new FormGroup({
                url: new FormControl(tempImagesArray[1].url),
                name: new FormControl(tempImagesArray[1].name),
                description: new FormControl(tempImagesArray[1].description)
            }),
            image2: new FormGroup({
                url: new FormControl(tempImagesArray[2].url),
                name: new FormControl(tempImagesArray[2].name),
                description: new FormControl(tempImagesArray[2].description)
            }),
            image3: new FormGroup({
                url: new FormControl(tempImagesArray[3].url),
                name: new FormControl(tempImagesArray[3].name),
                description: new FormControl(tempImagesArray[3].description)
            }),
            videos: new FormGroup({
                url: new FormControl(this.archiveItem.videos[0].url),
                name: new FormControl(this.archiveItem.videos[0].name),
                description: new FormControl(this.archiveItem.videos[0].description)
            }),
            websiteURLs: new FormGroup({
                url: new FormControl(this.archiveItem.websiteURLs[0].url),
                name: new FormControl(this.archiveItem.websiteURLs[0].name)
            }),
            assets: new FormGroup({
                name: new FormControl(this.archiveItem.assets[0].name),
                url: new FormControl(this.archiveItem.assets[0].url)
              }),
            artifacts: new FormControl(this.archiveItem.artifacts.toString()),
            persons: new FormControl(this.archiveItem.persons.toString()),
            events: new FormControl(this.archiveItem.events.toString())
        });
    }

    saveEditedArchiveItem() {

        this.editedArchiveItemDate0 = {
            label: this.editingFormArchiveItem.value.date0.label,
            date: this.editingFormArchiveItem.value.date0.date
        };

        this.editedArchiveItemDate1 = {
            label: this.editingFormArchiveItem.value.date1.label,
            date: this.editingFormArchiveItem.value.date1.date
        };
        
        this.editedArchiveItemImage0 = {
            url: this.editingFormArchiveItem.value.image0.url,
            name: this.editingFormArchiveItem.value.image0.name,
            description: this.editingFormArchiveItem.value.image0.description
        };

        this.editedArchiveItemImage1 = {
            url: this.editingFormArchiveItem.value.image1.url,
            name: this.editingFormArchiveItem.value.image1.name,
            description: this.editingFormArchiveItem.value.image1.description
        };

        this.editedArchiveItemImage2 = {
            url: this.editingFormArchiveItem.value.image2.url,
            name: this.editingFormArchiveItem.value.image2.name,
            description: this.editingFormArchiveItem.value.image2.description
        };

        this.editedArchiveItemImage3 = {
            url: this.editingFormArchiveItem.value.image3.url,
            name: this.editingFormArchiveItem.value.image3.name,
            description: this.editingFormArchiveItem.value.image3.description
        };
        
        this.editedArchiveItemVideos = {
            url: this.editingFormArchiveItem.value.videos.url,
            name: this.editingFormArchiveItem.value.videos.name,
            description: this.editingFormArchiveItem.value.videos.description
        };
        
        this.editedArchiveItemWebsiteURLs = {
            url: this.editingFormArchiveItem.value.websiteURLs.url,
            name: this.editingFormArchiveItem.value.websiteURLs.name,
        };
        
        this.editedArchiveItemAssets = {
            url: this.editingFormArchiveItem.value.assets.url,
            name: this.editingFormArchiveItem.value.assets.name,
        };

        if(this.editingFormArchiveItem.value.aliases.length > 0){
            this.editedAliases = this.editingFormArchiveItem.value.aliases.split(',');
        } else {
            this.editedAliases = [];
        }

        if(this.editingFormArchiveItem.value.tags.length > 0){
            this.editedTags = this.editingFormArchiveItem.value.tags.split(',');
        } else {
            this.editedTags = [];
        }

        if(this.editingFormArchiveItem.value.artifacts.length > 0){
            let tempArtifacts = this.editingFormArchiveItem.value.artifacts.split(/\s/).join('');
            this.editedRelatedArtifacts = tempArtifacts.split(',');
        } else {
            this.editedRelatedArtifacts = [];
        }

        if(this.editingFormArchiveItem.value.persons.length > 0){
            let tempPersons = this.editingFormArchiveItem.value.persons.split(/\s/).join('');
            this.editedRelatedPersons = tempPersons.split(',');
        } else {
            this.editedRelatedPersons = [];
        }

        if(this.editingFormArchiveItem.value.events.length > 0){
            let tempEvents = this.editingFormArchiveItem.value.events.split(/\s/).join('');
            this.editedRelatedEvents = tempEvents.split(',');
        } else {
            this.editedRelatedEvents = [];
        }

        this.editedArchiveItem = { 
            id: this.editingFormArchiveItem.value._id,
            category: this.editingFormArchiveItem.value.category,
            name: this.editingFormArchiveItem.value.name,
            aliases: this.editedAliases,
            shortdescription: this.editingFormArchiveItem.value.shortdescription,
            longdescription: this.editingFormArchiveItem.value.longdescription,
            dates: [
                this.editedArchiveItemDate0,
                this.editedArchiveItemDate1
            ],
            tags: this.editedTags,
            images: [
                this.editedArchiveItemImage0,
                this.editedArchiveItemImage1,
                this.editedArchiveItemImage2,
                this.editedArchiveItemImage3
            ],
            videos: [this.editedArchiveItemVideos],
            websiteURLs: [this.editedArchiveItemWebsiteURLs],
            assets: [this.editedArchiveItemAssets],
            artifacts: this.editedRelatedArtifacts,
            persons: this.editedRelatedPersons,
            events: this.editedRelatedEvents
        };

        // Send composite object to API request service
        this.apirequestsService.putArchiveItem(JSON.stringify(this.editedArchiveItem), this.archiveItem.category, this.archiveItem.id).subscribe((data)=>{
            console.log('Request successful');
        });

        // Reload page to show changed content
        window.location.reload();
    }

    constructor(private apirequestsService: ApirequestsService, private route: ActivatedRoute, public auth: AuthService ) { }

    // Date Picker Settings
    config = {
        firstDayOfWeek: 'su',
        monthFormat: 'MMM, YYYY',
        disableKeypress: false,
        allowMultiSelect: false,
        closeOnSelect: undefined,
        closeOnSelectDelay: 100,
        onOpenDelay: 0,
        weekDayFormat: 'ddd',
        appendTo: document.body,
        drops: 'down',
        opens: 'right',
        showNearMonthDays: true,
        showWeekNumbers: false,
        enableMonthSelector: true,
        format: "YYYY-MM-DD",
        yearFormat: 'YYYY',
        showGoToCurrent: true,
        dayBtnFormat: 'DD',
        monthBtnFormat: 'MMM',
        multipleYearsNavigateBy: 10,
        showMultipleYearsNavigation: false
    };

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
                        this.apirequestsService.getPerson(individualPerson.related_id).subscribe(data => {
                            this.relatedPersons.push(data);
                        });
                    };
            
                    for (let individualArtifact of this.archiveItem.artifacts) {
                        this.apirequestsService.getArtifact(individualArtifact.related_id).subscribe(data => {
                            this.relatedArtifacts.push(data);
                        });
                    };
            
                    for (let individualEvent of this.archiveItem.events) {
                        this.apirequestsService.getEvent(individualEvent.related_id).subscribe(data => {
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
                        this.apirequestsService.getPerson(individualPerson.related_id).subscribe(data => {
                            this.relatedPersons.push(data);
                        });
                    };
            
                    for (let individualArtifact of this.archiveItem.artifacts) {
                        this.apirequestsService.getArtifact(individualArtifact.related_id).subscribe(data => {
                            this.relatedArtifacts.push(data);
                        });
                    };
            
                    for (let individualEvent of this.archiveItem.events) {
                        this.apirequestsService.getEvent(individualEvent.related_id).subscribe(data => {
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
                        this.apirequestsService.getPerson(individualPerson.related_id).subscribe(data => {
                            this.relatedPersons.push(data);
                        });
                    };
            
                    for (let individualArtifact of this.archiveItem.artifacts) {
                        this.apirequestsService.getArtifact(individualArtifact.related_id).subscribe(data => {
                            this.relatedArtifacts.push(data);
                        });
                    };
            
                    for (let individualEvent of this.archiveItem.events) {
                        this.apirequestsService.getEvent(individualEvent.related_id).subscribe(data => {
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
