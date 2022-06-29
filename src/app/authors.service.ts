import { Injectable } from '@angular/core';
import { Authors} from './authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  //initializing author objects from interface
  hawking:Authors = {name:"Stephen Hawking",birthCountry:"United Kingdom",noofBooks:15};
  green:Authors={name:"John Green",birthCountry:"United States",noofBooks:10};
  tolkien:Authors={name:"JRR Tolkien",birthCountry:"South Africa",noofBooks:55}

  // authors:string[]=["John Green","Stephen Hawking", "JK Rowling","Sidney Sheldon","Leo Tolstoy","Roald Dahl","JRR Tolkien"]
  authors:Authors[]=[this.hawking,this.green,this.tolkien];
  result:Authors[]=[];
  
  
  //returns the list of Authors to the Component
  getAuthors(){
    return this.authors;

  }

  //returns no of Authors
  noofAuthors(){
    return this.authors.length;
  }

  //returns author with a certain character
  authorswJ(char:string):Authors[]{
    this.result=[];
    for (let i:number=0;i<this.authors.length;i++){
      if (this.authors[i].name[0]==char){
        this.result.push(this.authors[i]);
      }
    }

    return this.result;

  }

  constructor() { }
}
