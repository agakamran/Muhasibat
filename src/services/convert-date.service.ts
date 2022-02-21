import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertDateService {

  // Date:dateString = '01-01-1970 01:03:44' ;
  // let newDate = new Date(dateString);
  constructor() { }
  
  getFormatedDate(date: Date, format: string) {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(date, format);
}

// Convert date to user timezone
//const localDate: Date = this.convertToLocalDate('01/01/2021');
//var unixTimeZero = Date.parse('01 Jan 1970 00:00:00 GMT');
convertToLocalDate(responseDate: any) {
  
    try {
        if (responseDate != null) {
            if (typeof (responseDate) === 'string') {
                if (String(responseDate.indexOf('T') >= 0)) {
                    responseDate = responseDate.split('T')[0];
                }
                if (String(responseDate.indexOf('+') >= 0)) {
                    responseDate = responseDate.split('+')[0];
                }
            }
            responseDate = new Date(responseDate);
            const newDate = new Date(responseDate.getFullYear(), responseDate.getMonth(), responseDate.getDate(), 0, 0, 0);
            const userTimezoneOffset = newDate.getTimezoneOffset() * 60000;
         //  const minDateValue='01-01-1970 01:03:44' ;
            const finalDate: Date = new Date(newDate.getTime() - userTimezoneOffset);
           // return finalDate > Util.minDateValue ? finalDate : null;
            return finalDate ;
        } else {
            return null;
        }
    } catch (error) {
        return responseDate;
    }
}
}
