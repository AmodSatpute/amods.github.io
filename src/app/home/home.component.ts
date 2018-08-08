// this is a by default statement
import { Component, OnInit, OnDestroy } from '@angular/core';
import { GotHttpServiceService } from '../got-http-service.service';
import { GotService } from '../got.service';

// decorator

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// a simple class
export class HomeComponent implements OnInit, OnDestroy {
  
public allHouses=[];
  public allBooks=[];
  public allCharacters=[];

  constructor(public gotService:GotService, public gotHttpServiceService:GotHttpServiceService) {
    console.log("Home Component constructor called");
  }

  ngOnInit() {
    console.log("Home Component onInit called")
   // this.allBooks=this.gotHttpServiceService.getAllBooks();
  
        this.allBooks = this.gotHttpServiceService.getAllBooks().subscribe(
    
          data => {
            this.allBooks = data;
        this.allBooks.sort(function (a, b) {
          const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
          if (nameA < nameB) {//sort string ascending
            return -1;
          }
          if (nameA > nameB) {

            return 1;
          }
          return 0; //default return value (no sorting)
        });
            /*console.log("logging data ")
            console.log(data);
            this.allBooks = data["data"];*/
          },
          error => {
            console.log("some error occured");
            console.log(error.errorMessage)
          }
        )
        console.log(this.allBooks)
    

    /*this.allHouses=this.gotService.getAllHouses();
    console.log(this.allHouses)*/

    this.allHouses = this.gotHttpServiceService.getAllHouses().subscribe(
    
      data => {
        this.allHouses = data;
    this.allHouses.sort(function (a, b) {
      const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
      if (nameA < nameB) {//sort string ascending
        return -1;
      }
      if (nameA > nameB) {

        return 1;
      }
      return 0; //default return value (no sorting)
    });
        /*console.log("logging data ")
        console.log(data);
        this.allBooks = data["data"];*/
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
    console.log(this.allHouses)


    this.allCharacters = this.gotHttpServiceService.getAllCharacters().subscribe(
    
      data => {
        this.allCharacters = data;
    this.allCharacters.sort(function (a, b) {
      const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
      if (nameA < nameB) {//sort string ascending
        return -1;
      }
      if (nameA > nameB) {

        return 1;
      }
      return 0; //default return value (no sorting)
    });
        /*console.log("logging data ")
        console.log(data);
        this.allBooks = data["data"];*/
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage)
      }
    )
    console.log(this.allCharacters)

  }


    
  


  ngOnDestroy() {
    console.log("Home Component destroyed")
  }

}
