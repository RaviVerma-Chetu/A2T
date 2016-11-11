import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {PhishTrainService} from '../../services/phishtrain.service';

@Component({
  selector: 'overview',
  styles: [],
  templateUrl: './components/overview/overview.component.html',
  directives: [NgFor],
  providers: [PhishTrainService]
})

export class OverviewComponent {
  CampaignsDeployed:number;
 constructor(public srv: PhishTrainService) {
    this.CampaignsDeployed = this.srv.Data;
 }
  
   

}
