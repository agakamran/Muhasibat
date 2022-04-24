import { Injectable } from "@angular/core";
import { Actions,  createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { catchError, map, of, switchMap, withLatestFrom } from "rxjs";
import { AppState } from "src/app/reducers";
import { shirket } from "src/models/_muhasibat";
import { AyarlarService } from "src/services/ayarlar.service";
import * as fromshirkets from './shirkets.actions';
import { ShirketActionTypes } from './shirkets.actions';
import { getShirketsState } from "./shirkets.selectors";
//import { addShirket,  loadShirkets, requestLoadShirkets, searchShirket } from "./../store/shirkets.actions";


@Injectable()
export class ShirketsEffects {
   // constructor(private actions$: Actions, private _caSer: AyarlarService) { }
     constructor(
        private actions$: Actions,
        private _caSer: AyarlarService,
        private store: Store<AppState>) { }

    
    query$ = createEffect(() =>
     this.actions$.pipe(
         ofType<fromshirkets.ShirketsQuery>(ShirketActionTypes.SHIRTKETS_QUERY),
        withLatestFrom(this.store.pipe(select(getShirketsState))),
        switchMap(([, user]: any) => {
            return this._caSer._getshirket(user.uid)
                .pipe(
                    map((data: any) => {
                        const shirsData: shirket[] = data.map((res: any) => {
                            const key = res.payload.key;
                            const _shirket: shirket = res.payload.val();
                            return {
                                    key: key || null,
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
                        return (new fromshirkets.ShirketsLoaded({ shirkets: shirsData }));
                    }),
                    catchError(error => of(new fromshirkets.ShirketsError({ error })))
                );
        }),
    ));
    
    // query$ = createEffect(() =>
    //   this.actions$.pipe(
    //     ofType(ShirketActionTypes.SHIRTKETS_QUERY),
    //     withLatestFrom(this.store.pipe(select(getShirketsState))),
    //     switchMap(([, shir]: any) => this._caSer._getshirket(shir.SId)
    //         .pipe(
    //             map((data: any) => {
    //                 const shirketData: shirket[] = data.map((res: any) => {
    //                     const key = res.payload.key;
    //                     const _shirket: shirket = res.payload.val();
    //                     return {
    //                         key: key,
    //                         ShId: _shirket.ShId,
    //                         Aznhesab: _shirket.Aznhesab,
    //                         Bankadi: _shirket.Bankadi,
    //                         Bankkodu: _shirket.Bankkodu,
    //                         Bankvoen: _shirket.Bankvoen,
    //                         Cavabdehshexs: _shirket.Cavabdehshexs,
    //                         Email: _shirket.Email,
    //                         Muxbirhesab: _shirket.Muxbirhesab,
    //                         Shiricrachi: _shirket.Shiricrachi,
    //                         Shirpercent: _shirket.Shirpercent,
    //                         Shirvoen: _shirket.Shirvoen,
    //                         Swift: _shirket.Swift,
    //                         Unvan: _shirket.Unvan,
    //                         UserId: _shirket.UserId
    //                     };
    //                 });
                 
    //                 return (new fromshirkets.ShirketsLoaded({ shirkets: shirketData }));
    //             }),
    //             catchError(error => {
    //                 return of(new fromshirkets.ShirketsError({ error }));
    //             })
    //         )
    //     ),
    // ));


    // loadShirkets$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(requestLoadShirkets),
    //         switchMap(_ =>
    //             this._caSer._getshirket('').pipe(
    //                 delay(3000),
    //                 map(data => loadShirkets({ shirkets: data }))
    //             ))
    //     )
    // );
    // addshirket$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(addShirket),
    //    switchMap(action => this._caSer._posshirket(action._shirket)
    //             .pipe(
    //                 delay(1000),
    //                 map(data => loadShirkets({ shirkets: data }))
    //             ))
    //         )
    // );
    
    // updateShirket$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(updateShirket),
    //         switchMap(action => this._caSer._posshirket(action._shirket)
    //             .pipe(
    //                 delay(1000),
    //                 map(data => loadShirkets({ shirkets: data }))
    //             ))
    //     )
    // );
    // searchShirket$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(searchShirket),
    //         switchMap(action => this._caSer._getshirket(action.searchQuery)
    //             .pipe(
    //                 delay(1000),
    //                 map(data => loadShirkets({ shirkets: data }))
    //             ))
    //     )
    // );
    /*
        query$ = createEffect(() =>
         this.actions$.pipe(
            ofType(ShirketActionTypes.SHITKET_QUERY),
            
          //  withLatestFrom(this.store.pipe(select(getUser))),
          
            switchMap(([,]: any) => this._caSer._getshirket('')//shirket shirket.ShId
                .pipe(  map((data: any) => {
                       
                        const shirketsData: shirket[] = data.map((res: any) => {
                            // console.log(shirketsData)
                            // console.log('res')
                            // console.log(res)
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
        added$ = createEffect(() =>
         this.actions$.pipe(
            ofType(ShirketActionTypes.SHITKET_ADDED),
            map((action: fromShirkets.ShirketsAdded) => action.payload),
          //  withLatestFrom(this.store.pipe(select(getUser))),
            switchMap(([payload]: any) => this._caSer._posshirket(payload.shirket))//, shirket, shirket.ShId
            
            ),
            {
                dispatch: false,
            });
    
       // @Effect({ dispatch: false })
        edit$ = createEffect(() => this.actions$.pipe(
            ofType(ShirketActionTypes.SHITKET_EDITED),
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
            ofType(ShirketActionTypes.SHITKET_DELETED),
            map((action: fromShirkets.ShirketsDeleted) => action.payload),
           // withLatestFrom(this.store.pipe(select(getUser))),
            switchMap(([payload]: any) => this._caSer._delshirket(payload.shirket))  // , shirket , shirket.ShId
            ),
             { dispatch: false }
             );*/
}

