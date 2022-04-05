import { Injectable } from "@angular/core";
import { Actions, createEffect,  ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { ShirketActionTypes } from "./shirkets.actions";
import * as fromShirkets from './../store/shirkets.actions';
import { of } from "rxjs";
import { AyarlarService } from "src/services/ayarlar.service";
import { shirket } from "src/models/_muhasibat";

@Injectable()
export class ShirketsEffects {
    constructor( private actions$: Actions,private _caSer: AyarlarService )
     { }

    query$ = createEffect(() =>
     this.actions$.pipe(
        ofType(ShirketActionTypes.SHITKETS_QUERY),
      //  withLatestFrom(this.store.pipe(select(getUser))),
        switchMap(([,]: any) => this._caSer._getshirket()//shirket shirket.ShId
            .pipe(
                map((data: any) => {
                    const shirketsData: shirket[] = data.map((res: any) => {
                        const key = res.payload.key;
                        const _shirket: shirket = res.payload.val();
                        return {
                            key: key,
                            ShId: _shirket.ShId,
                            Aznhesab: _shirket.Aznhesab,
                            Bankadi: _shirket.Bankadi,
                            Bankkodu: _shirket.Bankkodu,
                            Bankvoen: _shirket.Bankvoen,
                            Cavabdehshexs: _shirket.Cavabdehshexs,
                            Email: _shirket.Email,
                            Muxbirhesab: _shirket.Muxbirhesab,
                            Shiricrachi: _shirket.Shiricrachi,
                            Shirpercent: _shirket.Shirpercent,
                            Shirvoen: _shirket.Shirvoen,
                            Swift: _shirket.Swift,
                            Unvan: _shirket.Unvan,
                            UserId: _shirket.UserId
                        };
                    });
                    return (new fromShirkets.ShirketsLoaded({ shirkets: shirketsData }));
                }),
                catchError(error => {
                    return of(new fromShirkets.ShirketsError({ error }));
                })
            )
        ),
    ));

   // @Effect({ dispatch: false })
    added$ = createEffect(() =>
     this.actions$.pipe(
        ofType(ShirketActionTypes.SHITKETS_ADDED),
        map((action: fromShirkets.ShirketsAdded) => action.payload),
      //  withLatestFrom(this.store.pipe(select(getUser))),
        switchMap(([payload]: any) => this._caSer._posshirket(payload.shirket))//, shirket, shirket.ShId
        
        ),
        {
            dispatch: false,
        });

   // @Effect({ dispatch: false })
    edit$ = createEffect(() => this.actions$.pipe(
        ofType(ShirketActionTypes.SHITKETS_EDITED),
        map((action: fromShirkets.ShirketsEdited) => action.payload),
       // withLatestFrom(this.store.pipe(select(getUser))),
        switchMap(([payload ]: any) => this._caSer._posshirket(payload.shirkets) //, shirket.ShId
            .pipe(
                catchError(error => {
                    return of(new fromShirkets.ShirketsError({ error }));
                }))
        )
       ),
        {
            dispatch: false,
        }
    );

   // @Effect({ dispatch: false })
    delete$ = createEffect(() =>
     this.actions$.pipe(
        ofType(ShirketActionTypes.SHITKETS_DELETED),
        map((action: fromShirkets.ShirketsDeleted) => action.payload),
       // withLatestFrom(this.store.pipe(select(getUser))),
        switchMap(([payload]: any) => this._caSer._delshirket(payload.shirket))  // , shirket , shirket.ShId
        ),
         { dispatch: false }
         );
}
