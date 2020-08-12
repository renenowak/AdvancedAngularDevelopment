import { createAction, props } from "@ngrx/store";
import { FoodItem } from "../../food.model";

export const loadFoods = createAction("[Food] Load Foods");

export const loadFoodsSuccess = createAction(
  "[Food] Load Foods Success",
  props<{ foods: FoodItem[] }>()
);

export const loadFoodsFailure = createAction(
  "[Food] Load Foods Failure",
  props<{ error: Error }>()
);

export const deleteFood = createAction(
  "[Food] Delete Food",
  props<{ food: FoodItem }>()
);

export const addFood = createAction(
  "[Food] Add Food",
  props<{ food: FoodItem }>()
);

export const editFood = createAction(
  "[Food] Edit Food",
  props<{ food: FoodItem }>()
);
