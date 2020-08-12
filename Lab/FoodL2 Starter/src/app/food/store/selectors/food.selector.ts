import { createFeatureSelector, createSelector } from "@ngrx/store";
import {
  FoodState,
  foodFeatureKey,
  foodAdapter,
} from "../reducers/food.reducer";

export const getFoodState = createFeatureSelector<FoodState>(foodFeatureKey);

export const getFoodEntities = createSelector(
  getFoodState,
  foodAdapter.getSelectors().selectAll
);

export const getAllFoods = createSelector(getFoodEntities, (entities) => {
  return Object.keys(entities).map((id) => entities[parseInt(id, 10)]);
});
