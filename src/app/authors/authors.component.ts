import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  title="This is the Authors Component(Displays List of Authors)";

  //this list will normally be consumed through an API.
   authors:string[];
   noOfAuthors:number;
   startingwJ:string[];


  constructor(service:AuthorsService) {
    //let service=new AuthorsService(); (tightly coupled service to Component), instead pass in the constructor (decoupling)
    this.authors=service.getAuthors(); 
    this.noOfAuthors=service.noofAuthors();
    this.startingwJ= service.authorswJ();
   }

  ngOnInit(): void {
  }

}
