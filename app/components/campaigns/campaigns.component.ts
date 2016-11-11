import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {PhishTrainService} from '../../services/phishTrain.service';

@Component({
  selector: 'comapaigns',
  styles: [],
  templateUrl: './components/campaigns/campaigns.component.html',
  directives: [NgFor]
})

export class CampaignsComponent {
   Data = 'Comapaigns Template';

}