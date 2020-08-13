import { Component, OnInit } from "@angular/core";
import { FoodItem } from "../food.model";
import { FoodFacade } from "../store/facades/food.facades";

@Component({
  selector: "app-food-container",
  templateUrl: "./food-container.component.html",
  styleUrls: ["./food-container.component.scss"],
})
export class FoodContainerComponent implements OnInit {
  food: FoodItem[];
  selected: FoodItem = null;

  constructor(private foodFacade: FoodFacade) {}

  ngOnInit() {
    this.foodFacade.loadFoods();
    this.foodFacade.getFoods().subscribe((data) => (this.food = data));
  }

  selectFood(f: FoodItem) {
    this.selected = { ...f };
  }

  deleteFood(f: FoodItem) {
    console.log("deleting ", f);
    this.foodFacade.deleteFood(f);
  }

  foodSaved(f: FoodItem) {
    const existingFood = this.food.filter((food) => food.id === f.id);
    if (existingFood) {
      this.foodFacade.editFood(f);
    } else {
      this.foodFacade.addFood(f);
    }
    this.selected = null;
  }
}
