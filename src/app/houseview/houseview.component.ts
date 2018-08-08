import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { GotService } from '../got.service';
import {GotHttpServiceService} from'../got-http-service.service';
@Component({
  selector: 'app-houseview',
  templateUrl: './houseview.component.html',
  styleUrls: ['./houseview.component.css']
})
export class HouseviewComponent implements OnInit {
  public currentHouse;
  
  constructor(private _route: ActivatedRoute, private router: Router, public gotService:GotService,
     public gotHttpServiceService:GotHttpServiceService) { 
    console.log("house-view Constructor  called");
   }

  ngOnInit() {
    console.log("ngOnInit called");
   
    // getting the name of the book from the route
    let myHouseName = this._route.snapshot.paramMap.get('name');
    console.log(myHouseName);
    
    this.gotHttpServiceService.getSingleBookhInformation(myHouseName).subscribe(

      data => {
        this.currentHouse = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
  }
    
  }
