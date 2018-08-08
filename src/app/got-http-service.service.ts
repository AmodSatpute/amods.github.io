import { Injectable } from '@angular/core';
// importing http client to make the requests
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
//import observable related code
// import observable related code
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GotHttpServiceService 
{
  public allBooks;
  public currentBook;
  public allHouses;
  public currentHouse;
  public allCharacters;
  public currentCharacter;
  public baseUrl="https://www.anapioficeandfire.com/api";

  constructor(private _http:HttpClient) { 
    console.log("book-http service was called");
  }


  // exception handler
  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message)
  }
  public getAllBooks(): any{
    let myResponse = this._http.get(this.baseUrl+'/books');
    console.log(myResponse);
    return myResponse;
    
  }
  public getAllHouses(): any{

    let myResponse=this._http.get(this.baseUrl+'/houses');
    console.log(myResponse);
    return myResponse;
    
  }

  public getAllCharacters(): any{

    let myResponse=this._http.get(this.baseUrl+'/characters');
    console.log(myResponse);
    return myResponse;
    
  }
  


  public getSingleBookInformation(currentBookName): any
  {
    let myResponse = this._http.get(this.baseUrl + '/books?name=' + currentBookName)
    return myResponse;
  }// end get blog information function

    
  
  
  public getSingleBookhInformation(currentHouseName): any {
    let myResponse = this._http.get(this.baseUrl + '/houses?name=' + currentHouseName);
    return myResponse;
  } // end get house info function
  
      public getSingleBookcInformation(currentCharacterId): any {
        let myResponse = this._http.get(this.baseUrl + '/characters?gender=' + currentCharacterId );
        return myResponse;
      } //end get Character info function

}
