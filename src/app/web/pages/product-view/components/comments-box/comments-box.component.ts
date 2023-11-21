import { Component, OnInit } from '@angular/core';
import { ICometary } from 'src/app/web/interfaces/ICometary.interface';
import { pipe, take } from 'rxjs';

//  services
import { HttpCometaryService } from 'src/app/web/services/HttpCometary/http-cometary.service';


@Component({
  selector: 'app-comments-box',
  templateUrl: './comments-box.component.html',
  styleUrls: ['./comments-box.component.scss']
})
export class CommentsBoxComponent implements OnInit {
  listComentareis: ICometary[] = [];

  constructor (
    private httpCometarySvc: HttpCometaryService
  ) {}

  ngOnInit(): void {
    this.httpCometarySvc.getRandomComets()
    .pipe(take(1))
    .subscribe(res => this.listComentareis = res.comments)
  }
}
