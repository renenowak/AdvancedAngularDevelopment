import { Injectable } from "@angular/core";
import { FoodService } from "../../food.service";
import { catchError, map, mergeMap } from "rxjs/operators";
import { Action } from "@ngrx/store";
import { Actions, ofType, Effect } from "@ngrx/effects";
import {
  loadFoods,
  loadFoodsSuccess,
  loadFoodsFailure,
} from "../actions/food.actions";
import { FoodItem } from "../../food.model";
import { Observable, of } from "rxjs";

@Injectable()
export class FoodEffects {
  constructor(private actions$: Actions, private foodService: FoodService) {}

  @Effect()
  loadFoods$: Observable<Action> = this.actions$.pipe(
    ofType(loadFoods),
    mergeMap((action) =>
      this.foodService.getFood().pipe(
        map((foods: FoodItem[]) => loadFoodsSuccess({ foods })),
        catchError((error) => of(loadFoodsFailure({ error })))
      )
    )
  );
}
