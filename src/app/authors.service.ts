import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  authors:string[]=["John Green","Stephen Hawking", "JK Rowling","Sidney Sheldon","Leo Tolstoy","Roald Dahl","JRR Tolkien"]
  result:string[]=[];
  //returns the list of Authors to the Component
  getAuthors(){
    return this.authors;

  }

  noofAuthors(){
    return this.authors.length;
  }

  authorswJ():string[]{
    
    for (let i:number=0;i<this.authors.length;i++){
      if (this.authors[i][0]=="J"){
        this.result.push(this.authors[i]);

      }

      


    }

    return this.result;

  }

  constructor() { }
}
