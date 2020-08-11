import { Component, OnInit } from "@angular/core";
import { FoodService } from "src/app/shared/food.service";
import { FoodItem } from "src/app/shared/foodItem";

@Component({
  selector: "app-food-container",
  templateUrl: "./food-container.component.html",
  styleUrls: ["./food-container.component.scss"]
})
export class FoodContainerComponent implements OnInit {
  food: FoodItem[];
  selected: FoodItem;

  constructor(private fs: FoodService) {}

  ngOnInit() {
    this.fs.getFood().subscribe(data => (this.food = data));
  }

  selectFood(f: FoodItem) {
    this.selected = { ...f };
  }

  deleteFood(f: FoodItem) {
    console.log("deleteing ", f);
    this.food = this.food.filter(item => item.id != f.id);
  }

  foodSaved(f: FoodItem) {
    this.food = this.food.filter(item => item.id != f.id);
    this.food.push(f);
    this.selected = null;
  }
}
