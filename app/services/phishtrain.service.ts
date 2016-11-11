import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';

@Injectable()
export class PhishTrainService {
  constructor (private http: Http) {

  };
  Data=200;
  getCampaignsDeployed(): Promise<number> {
    return Promise.resolve(2);
  }

}