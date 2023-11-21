import { Component, Input, OnInit } from '@angular/core';

interface IDataPanel {
  price: number,
  discount: number
}

@Component({
  selector: 'app-price-panel',
  templateUrl: './price-panel.component.html',
  styleUrls: ['./price-panel.component.scss']
})
export class PricePanelComponent implements OnInit {
  @Input({required: true}) dataPanel!: IDataPanel;
  previousPrice!: number;

  ngOnInit(): void {
    this.previousPrice = parseFloat(
      (this.dataPanel.price / (1 - (this.dataPanel.discount / 100))).toFixed(2)
    );
  }
}
