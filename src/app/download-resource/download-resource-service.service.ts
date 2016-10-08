import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { DownloadResource } from './download-resource.json';

@Injectable()
export class DownloadResourceServiceService {

  private baseUrl: string = 'http://swapi.co/api';
  constructor(private http: Http) {
  }
  get(): Observable<DownloadResource[]>{
    let downloadResource$ = this.http
      .get(`${this.baseUrl}`, {headers: this.getHeaders()})
      .map(mapDownloadResources)
      .catch(handleError);
      return downloadResource$;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapDownloadResources(response: Response): DownloadResource[] {
  return response.json().map(toDownloadResource);
}

function toDownloadResource(r: any): DownloadResource {
  let downloadResource = <DownloadResource>({
    name: r.name,
    description: r.description,
    version: r.version,
    downloadUrl: r.downloadUrl,
  });
  return downloadResource;
}
function handleError (error: any) {
  console.error(error.message);

  // throw an application level error
  return Observable.throw(error.message);
}