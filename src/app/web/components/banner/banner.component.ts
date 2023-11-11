import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent{
  imgSelect?:string;
  banners = [
    'https://www.dropbox.com/scl/fi/acld6kbcc1wcty1gy9ved/banner2.webp?rlkey=6bcn9edogwb0ddfe9l2jc58e0&raw=1',
    'https://www.dropbox.com/scl/fi/ctpmu6ye4rg6ydpevvm42/banner3.webp?rlkey=a6ed0ob05c9gsvmgfku4rgyxp&raw=1',
    'https://www.dropbox.com/scl/fi/0ehtxaajgggtc7azdv8dw/banner4.webp?rlkey=otyxbsdmoeclv6qa9akt3skxp&raw=1',
    'https://www.dropbox.com/scl/fi/72oeiy1rdmz2853n49gjb/banner5.webp?rlkey=awpjruwcd5xb3o7axwxvsmojp&raw=1',
    'https://www.dropbox.com/scl/fi/2f2xwvo088p1v1j5hv6r3/banner6.webp?rlkey=e4qryeify3jteoyx4b6nbb6ed&raw=1'
  ];

  constructor () {
    const index = Math.floor(Math.random() * this.banners.length);
    this.imgSelect = this.banners[index] ?? '';

  }
}
