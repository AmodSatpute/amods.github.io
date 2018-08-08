import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { GotService } from '../got.service';
import {GotHttpServiceService} from'../got-http-service.service';
@Component({
  selector: 'app-bookview',
  templateUrl: './bookview.component.html',
  styleUrls: ['./bookview.component.css']
})
export class BookviewComponent implements OnInit, OnDestroy {
  public currentBook;

   constructor(private _route: ActivatedRoute, private router: Router, public gotService:GotService, public gotHttpServiceService:GotHttpServiceService) {
    console.log("book-view Constructor  called");
   }

  ngOnInit() {
    console.log("book-view ngOnInit called");
   
    
    // getting the name of the book from the route
    let myBookName = this._route.snapshot.paramMap.get('name');
    console.log(myBookName)
    this.gotHttpServiceService.getSingleBookInformation(myBookName).subscribe(

      data => {
        this.currentBook = data;
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    )
  }


  ngOnDestroy(){
    console.log("book-view ngOn Destroy called")
  }
    
  }

