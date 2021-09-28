import { Component, OnInit } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  cardJson= <Card>{
    "title_headind":"Title Heading",
    "title_description":" Title description",
    "date":"Jun 7, 2021",
    "img":"www.google.com",
    "p_one":"Some text..",
    "p_two":"Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
  }

  ngOnInit(): void {
  }

}
