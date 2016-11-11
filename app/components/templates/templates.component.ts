import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {PhishTrainService} from '../../services/phishTrain.service';

@Component({
  selector: 'templates',
  styles: [],
  templateUrl: './components/templates/templates.component.html',
  directives: [NgFor]
})

export class TemplatesComponent {
   Data = 'Templates Template';

}