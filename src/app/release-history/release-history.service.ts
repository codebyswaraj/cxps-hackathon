import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ReleaseHistory } from './release-history.json';

@Injectable()
export class ReleaseHistoryService {

  private baseUrl: string = 'http://demo8566578.mockable.io/release-history';

  constructor(private http: Http) {}
  
  get(): Observable<ReleaseHistory[]>{
    console.log("Coming 2");
    let releaseHistory$ = this.http
      .get(`${this.baseUrl}`)
      .map(mapReleaseHistory)
      .catch(handleError);
      return releaseHistory$;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapReleaseHistory(response: Response): ReleaseHistory[] {
  return response.json().results.map(toReleaseHistory);
}

function toReleaseHistory(r: any): ReleaseHistory {
  let releaseHistory = <ReleaseHistory>({
    version: r.version,
    uploadedby: r.uploadedby,
    uploadedDate: r.uploadedDate,
    dirtypatch: r.dirtypatch,
    currentpatch: r.currentpatch,
    label: r.label,
    download: r.download
  });
  console.log('Parsed ReleaseHistory:', releaseHistory);
  return releaseHistory;
}
function handleError (error: any) {
  console.error(error.message);
  return Observable.throw(error.message);
}
