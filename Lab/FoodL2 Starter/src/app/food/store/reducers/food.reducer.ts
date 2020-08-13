import { createReducer, on } from "@ngrx/store";
import {
  createEntityAdapter,
  EntityAdapter,
  EntityState,
  Update,
} from "@ngrx/entity";
import { FoodItem } from "../../food.model";
import {
  loadFoodsSuccess,
  loadFoodsFailure,
  deleteFood,
  addFood,
  editFood,
} from "../actions/food.actions";

export const foodFeatureKey = "food";

export interface FoodState extends EntityState<FoodItem> {}
export const foodAdapter: EntityAdapter<FoodItem> = createEntityAdapter<
  FoodItem
>();
export const defaultFoodState: FoodState = {
  ids: [],
  entities: {},
};
export const initialState = foodAdapter.getInitialState(defaultFoodState);

export const foodReducer = createReducer(
  initialState,
  on(loadFoodsSuccess, (state, action) =>
    foodAdapter.setAll(action.foods, { ...state })
  ),
  on(loadFoodsFailure, (state, action) => ({ ...state })),
  on(deleteFood, (state, action) =>
    foodAdapter.removeOne(action.food.id, { ...state })
  ),
  on(addFood, (state, action) => foodAdapter.addOne(action.food, { ...state })),
  on(editFood, (state, action) => {
    const updateSkill: Update<FoodItem> = {
      id: action.food.id,
      changes: { ...action.food },
    };
    return foodAdapter.updateOne(updateSkill, { ...state });
  })
);
