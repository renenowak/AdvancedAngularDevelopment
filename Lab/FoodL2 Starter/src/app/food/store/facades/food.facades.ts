import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { FoodState } from "../reducers/food.reducer";
import { getAllFoods } from "../selectors/food.selector";
import {
  loadFoods,
  deleteFood,
  addFood,
  editFood,
} from "../actions/food.actions";
import { FoodItem } from "../../food.model";

@Injectable({
  providedIn: "root",
})
export class FoodFacade {
  constructor(private store: Store<FoodState>) {}

  loadFoods() {
    this.store.dispatch(loadFoods());
  }

  getFoods() {
    return this.store.select(getAllFoods);
  }

  deleteFood(food: FoodItem) {
    this.store.dispatch(deleteFood({ food }));
  }

  addFood(food: FoodItem) {
    this.store.dispatch(addFood({ food }));
  }

  editFood(food: FoodItem) {
    this.store.dispatch(editFood({ food }));
  }
}
