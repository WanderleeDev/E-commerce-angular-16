import { Component } from '@angular/core';
import { IProducts } from '../../interfaces/IProducts.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  whishList: IProducts[] = [];
}
