import { Component, OnInit } from '@angular/core';
import { BeersService } from './beers.service';
import { Response } from 'selenium-webdriver/http';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  public beersList: any [];
  public requestError: any;
  constructor(private beers: BeersService) { }

  ngOnInit() {
    this.getBeers();
  }
  /**
   * Get beers, page 1, perpage 20
   */

  public getBeers(){
    return this.beers.get(1, 20).subscribe(
      response => this.handleResponse(response),
      error => this.handleError(error)
    );
  }

  /**
   * Hadling response
   */
  protected handleResponse(response: any) {
    this.requestError = null;
    return this.beersList = response;
  }

  /**
   * Handling error
   */
  protected handleError(error: any) {
    return this.requestError = error;
  }

}
