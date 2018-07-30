import { Injectable } from '@angular/core';
import { CustomHttpClient } from '../CustomHttpClient';

@Injectable()
export class StartupService {

    constructor(private http: CustomHttpClient) {
    }

    // Utilizzare questo metodo per configurare
    // lo startup dell'applicazione
    load(): Promise<any> {
        console.log('IN StartupService.load()');
        return Promise.resolve('TODO');
        // return new Promise<any>((resolve, reject) => {
        //     zip(
        //         this.http
        //             .get(this.context + 'health', null, true)
        //     ).pipe(
        //         catchError((err) => {
        //             resolve(null);
        //             console.log(err);
        //             return Promise.resolve(err);
        //         })
        //     ).subscribe((response: HttpResponse<any>) => {
        //         if (response.body != null && response.body['esito'] != null && response.body['esito'] === 0) {
        //             this.http.restUpAndRunning = true;
        //         } else {
        //             this.http.restUpAndRunning = false;
        //             this.esitoSectionService.setErrorMessage('Impossibile contattare i servizi REST');
        //         }
        //     },
        //         (error) => {
        //             this.http.restUpAndRunning = false;
        //             this.esitoSectionService.setErrorMessage('Impossibile contattare i servizi REST');
        //             console.log(error);
        //             Promise.resolve();
        //         });
        // });

    }

}
