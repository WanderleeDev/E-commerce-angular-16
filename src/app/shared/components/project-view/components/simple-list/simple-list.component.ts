import { Component, Input } from '@angular/core';
import { IDataList } from '../../project-view.component';

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.scss']
})
export class SimpleListComponent {
  @Input({required: true}) contentList?: IDataList;
  @Input() unicode?: string;
}
