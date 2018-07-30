import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpinnerService } from './spinner/spinner.service';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from './component/error/error-dialog.component';

@Injectable()
export class CustomHttpClient {

    constructor(public http: HttpClient, private spinnerService: SpinnerService, private injector: Injector, private dialog: MatDialog) {
    }

    private baseOptions = new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' });

    private _showErrorDialog(msg) {
        this.dialog.open(ErrorDialogComponent, {
            data: { msg: msg }
        });
    }

    public delete(url: string, options?: HttpHeaders, handleError?: boolean): Observable<any> {
        if (!options) {
            options = this.baseOptions;
        }

        this.spinnerService.addLoader();
        return this.http.delete(url, { headers: options }).pipe(tap(
            (res: Response) => {
                return res;
            },
            (err: any) => {
                if (!handleError) {
                    this._showErrorDialog(err.message);
                }
            })).pipe(finalize(() => this.spinnerService.removeLoader()));
    }

    public get(url: string, options?: HttpHeaders, handleError?: boolean): Observable<any> {
        if (!options) {
            options = this.baseOptions;
        }

        this.spinnerService.addLoader();
        return this.http.get(url, { headers: options }).pipe(tap(
            (res: Response) => {
                return res;
            },
            (err: any) => {
                if (!handleError) {
                    this._showErrorDialog(err.message);
                }
            })).pipe(finalize(
                () => this.spinnerService.removeLoader()));

    }

    public post(url: string, body: any, options?: HttpHeaders, handleError?: boolean): Observable<any> {
        if (!options) {
            options = this.baseOptions;
        }

        this.spinnerService.addLoader();
        return this.http.post(url, body, { headers: options }).pipe(tap(
            (res: Response) => {
                return res;
            },
            (err: any) => {
                if (!handleError) {
                    this._showErrorDialog(err.message);
                }
            })).pipe(finalize(
                () => this.spinnerService.removeLoader()));
    }

    public put(url: string, body: any, options?: HttpHeaders, handleError?: boolean): Observable<any> {
        if (!options) {
            options = this.baseOptions;
        }

        this.spinnerService.addLoader();
        return this.http.put(url, body, { headers: options }).pipe(tap(
            (res: Response) => {
                return res;
            },
            (err: any) => {
                if (!handleError) {
                    this._showErrorDialog(err.message);
                }
            })).pipe(finalize(
                () => this.spinnerService.removeLoader()));
    }

    getRouter(): Router {
        return this.injector.get(Router);
    }

}
