import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { DownloadResource } from './download-resource.json';

@Injectable()
export class DownloadResourceService {

  private baseUrl: string = 'http://demo8566578.mockable.io/test';
  constructor(private http: Http) {}
  
  get(): Observable<DownloadResource[]>{
    console.log("Coming 2");
    let downloadResource$ = this.http
      .get(`${this.baseUrl}`)
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
  console.log("Coming 3");
  return response.json().results.map(toDownloadResource);
}

function toDownloadResource(r: any): DownloadResource {
  console.log("Coming 4");
  let downloadResource = <DownloadResource>({
    name: r.name,
    description: r.description,
    version: r.version,
    downloadUrl: r.downloadUrl,
  });
  console.log('Parsed DownloadResource:', downloadResource);
  return downloadResource;
}
function handleError (error: any) {
  console.error(error.message);

  // throw an application level error
  return Observable.throw(error.message);
}