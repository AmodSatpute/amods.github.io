import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { GotService } from '../got.service';
import {GotHttpServiceService} from'../got-http-service.service';

@Component({
  selector: 'app-characterview',
  templateUrl: './characterview.component.html',
  styleUrls: ['./characterview.component.css']
})
export class CharacterviewComponent implements OnInit {
  public currentCharacter;
  public allCharacters;

  constructor(private _route: ActivatedRoute, private router: Router,  public gotService:GotService,
    public gotHttpServiceService:GotHttpServiceService) { 
    console.log("chatacter-view Constructor  called");
  }

  ngOnInit() 
  {
    console.log("ngOnInit called");
   
     // getting the name of the book from the route
     let myCharacterName = this._route.snapshot.paramMap.get('gender');
     console.log(myCharacterName);
     
     this.gotHttpServiceService.getSingleBookcInformation(myCharacterName).subscribe(
 
       data => {
         this.currentCharacter = data;
       },
       error => {
         console.log("some error occured");
         console.log(error.errorMessage);
       }
     )
   
    }
}


