import { Component } from '@angular/core';

export interface IDataList {
  title: string;
  unicode: string;
  list: string[];
}

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})

export class ProjectViewComponent {
  listTools: IDataList = {
    title: 'Tools',
    unicode: '✏️',
    list: [
      'HTML',
      'Scss',
      'TypeScript',
      'Angular'
      ]
  };
  appliedKnowledge: IDataList = {
    title: 'Conocimientos aplicados',
    unicode: '✓',
    list: [
      'Rxjs (Observables)',
      'Solicitudes HTTP',
      'Componentización',
      'Modularización',
      'Carga perezosa de módulos',
      'Enrutamiento'
    ]
  };

  rotatePhoto() {
    console.log('as');
  }

}
