import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  //returns the list of Authors to the Component
  getAuthors(){
    return ["John Green","Stephen Hawking", "JK Rowling","Sidney Sheldon","Leo Tolstoy","Roald Dahl","JRR Tolkien"]

  }

  noofAuthors(){
    return ["John Green","Stephen Hawking", "JK Rowling","Sidney Sheldon","Leo Tolstoy","Roald Dahl","JRR Tolkien"].length
  }

  constructor() { }
}
