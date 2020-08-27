import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ApirequestsService } from '../../services/apirequests.service';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailsComponent implements OnInit {

archiveCategory: string = '';
archiveItem: any = {};
pageUrl: string;
relatedArtifacts: Array<object> = [];
relatedPersons: Array<object> = [];
relatedEvents: Array<object> = [];

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
                });
                break;
            }
        }
    });

  }

}
