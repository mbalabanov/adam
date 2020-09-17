import { Component, OnInit, Testability } from '@angular/core';
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

    // Create the object to be edited (will be populated in the Angular Form)
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

    // These are the objects for the two dates in the date array
    editedArchiveItemDate0: ArchiveItemDates = {
        label: '',
        date: ''
    };

    editedArchiveItemDate1: ArchiveItemDates = {
        label: '',
        date: ''
    };

    // These are the image objects for the image infos in the image array
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

    // These are the video object for the video infos in the video array
    editedArchiveItemVideos: ArchiveItemVideos = {
        url: '',
        name: '',
        description: ''
    };

    // These are the website URL object for the website infos in the website array
    editedArchiveItemWebsiteURLs: ArchiveItemWebsiteURLs = {
        url: '',
        name: '',
    };

    // These are the asset object for the asset infos in the asset array
    editedArchiveItemAssets: ArchiveItemAssets = {
        url: '',
        name: '',
    };

    // These are the straight arrays ready for the use in the form
    editedAliases: Array<string> = [];
    editedTags: Array<string> = [];
    editedRelatedArtifacts: Array<string> = [];
    editedRelatedPersons: Array<string> = [];
    editedRelatedEvents: Array<string> = [];

    // These arrays are needed for the IDs of the related items in the form
    onlyIdsRelatedArtifacts: Array<string> = [];
    onlyIdsRelatedPersons: Array<string> = [];
    onlyIdsRelatedEvents: Array<string> = [];

    // This function is called by the delete button and sends the delete data to the API
    deleteThis(dataType, id) {
        this.apirequestsService.deleteItem(dataType, id).subscribe((data)=>{
    });

    }

    // Sets the correct image IDs in the carousel
    setCarouselActiveID(id){
        var elems = document.querySelectorAll('.active');
        [].forEach.call(elems, function(el) {
            el.classList.remove('active');
        });
        var activeElem = document.getElementById(id);
        activeElem.classList.add('active');
    };

    // This function is called when you click on the Share Link button and then on the copy button
    clipboardItemURL(itemurl) {
        itemurl.select();  
        document.execCommand('copy');  
        itemurl.setSelectionRange(0, 0);  
    }

    // This function populates the modal with the edit form with the values of the current page item
    assignValuesToFormItem() {

        // First the temporary arrays that hold the date values are generated
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

        // Then the temporary arrays that hold the image values are generated
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

        // This is the actual form for editing the item on the page
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
            artifacts: new FormControl(this.onlyIdsRelatedArtifacts),
            persons: new FormControl(this.onlyIdsRelatedPersons),
            events: new FormControl(this.onlyIdsRelatedEvents)
        });
    }

    // This function grabs the values from the form and sends them it the component for further relaying to the API.
    saveEditedArchiveItem() {

        // The first date input needs to be turned into an object
        this.editedArchiveItemDate0 = {
            label: this.editingFormArchiveItem.value.date0.label,
            date: this.editingFormArchiveItem.value.date0.date
        };

        // The second date input needs to be turned into an object
        // (so that the objects can populate the array in the main object)
        this.editedArchiveItemDate1 = {
            label: this.editingFormArchiveItem.value.date1.label,
            date: this.editingFormArchiveItem.value.date1.date
        };
        
        // The first image input needs to be turned into an object
        // (so that the objects can populate the array in the main object)
        this.editedArchiveItemImage0 = {
            url: this.editingFormArchiveItem.value.image0.url,
            name: this.editingFormArchiveItem.value.image0.name,
            description: this.editingFormArchiveItem.value.image0.description
        };

        // The second image input needs to be turned into an object
        // (so that the objects can populate the array in the main object)
        this.editedArchiveItemImage1 = {
            url: this.editingFormArchiveItem.value.image1.url,
            name: this.editingFormArchiveItem.value.image1.name,
            description: this.editingFormArchiveItem.value.image1.description
        };

        // The third image input needs to be turned into an object
        // (so that the objects can populate the array in the main object)
        this.editedArchiveItemImage2 = {
            url: this.editingFormArchiveItem.value.image2.url,
            name: this.editingFormArchiveItem.value.image2.name,
            description: this.editingFormArchiveItem.value.image2.description
        };

        // The fourth image input needs to be turned into an object
        // (so that the objects can populate the array in the main object)
        this.editedArchiveItemImage3 = {
            url: this.editingFormArchiveItem.value.image3.url,
            name: this.editingFormArchiveItem.value.image3.name,
            description: this.editingFormArchiveItem.value.image3.description
        };
        
        // The video input needs to be turned into an object
        this.editedArchiveItemVideos = {
            url: this.editingFormArchiveItem.value.videos.url,
            name: this.editingFormArchiveItem.value.videos.name,
            description: this.editingFormArchiveItem.value.videos.description
        };

        // The input of the related website URLS needs to be turned into an object
        this.editedArchiveItemWebsiteURLs = {
            url: this.editingFormArchiveItem.value.websiteURLs.url,
            name: this.editingFormArchiveItem.value.websiteURLs.name,
        };

        // The asset input needs to be turned into an object
        this.editedArchiveItemAssets = {
            url: this.editingFormArchiveItem.value.assets.url,
            name: this.editingFormArchiveItem.value.assets.name,
        };

        // Aliases need to be split into an array (or else turned into an empty array)
        if(this.editingFormArchiveItem.value.aliases.length > 0){
            this.editedAliases = this.editingFormArchiveItem.value.aliases.split(',');
        } else {
            this.editedAliases = [];
        }

        // Tags need to be split into an array (or else turned into an empty array)
        if(this.editingFormArchiveItem.value.tags.length > 0){
            this.editedTags = this.editingFormArchiveItem.value.tags.split(',');
        } else {
            this.editedTags = [];
        }

        // The related Artifacts need to be split into an array (or else turned into an empty array)
        if(this.editingFormArchiveItem.value.artifacts.length > 0){
            let tempArtifacts = this.editingFormArchiveItem.value.artifacts.split(/\s/).join('');
            this.editedRelatedArtifacts = tempArtifacts.split(',');
        } else {
            this.editedRelatedArtifacts = [];
        }

        // The related Persons need to be split into an array (or else turned into an empty array)
        if(this.editingFormArchiveItem.value.persons.length > 0){
            let tempPersons = this.editingFormArchiveItem.value.persons.split(/\s/).join('');
            this.editedRelatedPersons = tempPersons.split(',');
        } else {
            this.editedRelatedPersons = [];
        }

        // The related Events need to be split into an array (or else turned into an empty array)
        if(this.editingFormArchiveItem.value.events.length > 0){
            let tempEvents = this.editingFormArchiveItem.value.events.split(/\s/).join('');
            this.editedRelatedEvents = tempEvents.split(',');
        } else {
            this.editedRelatedEvents = [];
        }

        // This is the main object with the archived item.
        // It is populated with the inputs as well as the objects and arrays prepared above.
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

        console.log('NOCH IN DEN ITEMDETAILS');
        // Send composite main object to API request service
        this.apirequestsService.putArchiveItem(JSON.stringify(this.editedArchiveItem), this.archiveItem.category, this.archiveItem._id).subscribe((data)=>{
        });

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

    // Gets the URL and its parameters and splits them in to the item category (category) and the itemId.
    // Category can be artifacts, persons or events, the itemId is numeric value of the MongoDB ObjectId
    this.route.paramMap.subscribe(params => {
        this.archiveCategory = params.get('categoryId');
        itemSlug = params.get('itemId');

        // Stores the page URL for the share function
        this.pageUrl = this.archiveCategory + '/' + itemSlug;

        // Prepares the arrays for related items, that are only store as IDs in the main page item.
        this.relatedArtifacts = [];
        this.relatedPersons = [];
        this.relatedEvents = [];

        // This fucntion gets the necessary data to display the item based on its category (the switch) and its ID (the function call)
        // When the item data has been received, the loop gets the related items stored in the main item based on their ID and pushes the individual items into the arrays above.
        // The loops also populate the IDs of the related objects in the arrays, so that they can be put into the respecitve form fields.
        switch (this.archiveCategory) {
            case 'events': {
                this.apirequestsService.getEvent(itemSlug)
                .subscribe(data => {
                    this.archiveItem = data;

                    for (let individualPerson of this.archiveItem.persons) {
                        this.onlyIdsRelatedPersons.push(individualPerson.related_id);
                        this.apirequestsService.getPerson(individualPerson.related_id).subscribe(data => {
                            this.relatedPersons.push(data);
                        });
                    };
            
                    for (let individualArtifact of this.archiveItem.artifacts) {
                        this.onlyIdsRelatedArtifacts.push(individualArtifact.related_id);
                        this.apirequestsService.getArtifact(individualArtifact.related_id).subscribe(data => {
                            this.relatedArtifacts.push(data);
                        });
                    };
            
                    for (let individualEvent of this.archiveItem.events) {
                        this.onlyIdsRelatedEvents.push(individualEvent.related_id);
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
                        this.onlyIdsRelatedPersons.push(individualPerson.related_id);
                        this.apirequestsService.getPerson(individualPerson.related_id).subscribe(data => {
                            this.relatedPersons.push(data);
                        });
                    };
            
                    for (let individualArtifact of this.archiveItem.artifacts) {
                        this.onlyIdsRelatedArtifacts.push(individualArtifact.related_id);
                        this.apirequestsService.getArtifact(individualArtifact.related_id).subscribe(data => {
                            this.relatedArtifacts.push(data);
                        });
                    };
            
                    for (let individualEvent of this.archiveItem.events) {
                        this.onlyIdsRelatedEvents.push(individualEvent.related_id);
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
                        this.onlyIdsRelatedPersons.push(individualPerson.related_id);
                        this.apirequestsService.getPerson(individualPerson.related_id).subscribe(data => {
                            this.relatedPersons.push(data);
                        });
                    };
            
                    for (let individualArtifact of this.archiveItem.artifacts) {
                        this.onlyIdsRelatedArtifacts.push(individualArtifact.related_id);
                        this.apirequestsService.getArtifact(individualArtifact.related_id).subscribe(data => {
                            this.relatedArtifacts.push(data);
                        });
                    };
            
                    for (let individualEvent of this.archiveItem.events) {
                        this.onlyIdsRelatedEvents.push(individualEvent.related_id);
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
