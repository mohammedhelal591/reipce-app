import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipet', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2022/07/Hot-smoked-salmon-grain-bowl-with-dill-yogurt-1d92e6f.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
