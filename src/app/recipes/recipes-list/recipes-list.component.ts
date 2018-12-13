import { Component, OnInit } from '@angular/core';
import { Recipes } from "../recipes.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipes[] = [
    new Recipes(
      "BakingShaking",
      "this is testing model",
      "https://www.seriouseats.com/2018/03/20180410-chocolate-skillet-cake-vicky-wasik-31.jpg",
      23 - 12 - 105
    ),
    new Recipes(
      "BakingShaking",
      "this is testing model",
      "https://www.seriouseats.com/2018/03/20180410-chocolate-skillet-cake-vicky-wasik-31.jpg",
      23 - 12 - 105
    )
  ];
  constructor() { }

  ngOnInit() {
  }

}
