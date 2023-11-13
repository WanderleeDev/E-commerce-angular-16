import { Component } from '@angular/core';
//  interface
import { ICategory } from '../../interfaces/ICategory.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  listCategories: ICategory[] = [
    {
      "category": "smartphones",
      "item": "Smartphone",
      "img": "https://www.dropbox.com/scl/fi/gv9l2bn8o1i7x47rlfvyo/smartphone.webp?rlkey=zclsh5a3x5l4xg6tn6pu354cb&raw=1"
    },
    {
      "category": "laptops",
      "item": "Laptop",
      "img": "https://www.dropbox.com/scl/fi/6jziq5c6gqowcmmvhxznx/laptop.webp?rlkey=a5eh69omnx6tazjsntu7io59j&raw=1"
    },
    {
      "category": "fragrances",
      "item": "Fragrance",
      "img": "https://www.dropbox.com/scl/fi/n5n01lb5cauvuclgplxz9/fragance.webp?rlkey=o9spn14qlh1oaamoc59fc3qek&raw=1"
    },
    {
      "category": "skincare",
      "item": "Skincare Product",
      "img": "https://www.dropbox.com/scl/fi/uqk3k4a04n7vm3anvarzn/skincare.webp?rlkey=2u0nv7h7rwqoqoard5j6mp62a&raw=1"
    },
    {
      "category": "groceries",
      "item": "Grocery",
      "img": "https://www.dropbox.com/scl/fi/l7huoxa44zni1eky0mvic/groceries.webp?rlkey=lnmlxn5qef91h5b72fs7dovli&raw=1"
    },
    {
      "category": "home-decoration",
      "item": "Home Decoration",
      "img": "https://www.dropbox.com/scl/fi/hihoteu5k7aybtcymsjzt/home-decoration.webp?rlkey=m1pzflgv4f429ab7sdwcr8j50&raw=1"
    },
    {
      "category": "furniture",
      "item": "Furniture",
      "img": "https://www.dropbox.com/scl/fi/j8ptfdqpod3bubl1mh75x/forniture.webp?rlkey=fosnc0ndc5uk5p5527zohpm9j&raw=1"
    },
    {
      "category": "tops",
      "item": "Top",
      "img": "https://www.dropbox.com/scl/fi/d7spoz0i0kki25mvv1qd8/tops.webp?rlkey=hjs6n7tbtvpxbcg5ik8ha6gx9&raw=1"
    },
    {
      "category": "womens-dresses",
      "item": "Women's Dress",
      "img": "https://www.dropbox.com/scl/fi/le47c9yeh4cjs2btksmm4/womens-dresses.webp?rlkey=p9idzvk6ytdomz432e550bugr&raw=1"
    },
    {
      "category": "womens-shoes",
      "item": "Women's Shoes",
      "img": "https://www.dropbox.com/scl/fi/138xnoyc1vc6j6pd9zkh1/womens-shoes.webp?rlkey=63fzc4mcn11thvip0hpdor9ji&raw=1"
    },
    {
      "category": "mens-shirts",
      "item": "Men's Shirt",
      "img": "https://www.dropbox.com/scl/fi/ovdz8fh699omcxmlrxpd2/mens-shirts.webp?rlkey=bj0mwz9ws6kgxc62qabcd3osc&raw=1"
    },
    {
      "category": "mens-shoes",
      "item": "Men's Shoes",
      "img": "https://www.dropbox.com/scl/fi/asrst3lwc6z0koor1g00q/mens-shoesjpeg.webp?rlkey=bs7k5fqd74qmy70mvwddsbh50&raw=1"
    },
    {
      "category": "mens-watches",
      "item": "Men's Watch",
      "img": "https://www.dropbox.com/scl/fi/4kxbxk9u01ddwwg1wsx99/mens-watches.webp?rlkey=9agjpcd86i73ett3nls8byfwk&raw=1"
    },
    {
      "category": "womens-watches",
      "item": "Women's Watch",
      "img": "https://www.dropbox.com/scl/fi/vrjvajcevuasrjr965be7/womens-watches.webp?rlkey=zwn81t0yjwteln15wv48zsp4y&raw=1"
    },
    {
      "category": "womens-bags",
      "item": "Women's Bag",
      "img": "https://www.dropbox.com/scl/fi/l2atniupkrjg9wlelm3mz/womens-bags.webp?rlkey=kpvl85k1gxgrzgmp0kz5vkqxq&raw=1"
    },
    {
      "category": "womens-jewellery",
      "item": "Women's Jewellery",
      "img": "https://www.dropbox.com/scl/fi/874uvu2db4osv1sq4tznl/womens-jewellery.webp?rlkey=3jq7x2sr2yu9cr0y5yafgf8ky&raw=1"
    },
    {
      "category": "sunglasses",
      "item": "Sunglasses",
      "img": "https://www.dropbox.com/scl/fi/dlf29oi75fpq1b4xvy3e3/sunglasses.webp?rlkey=3r4f9yrvowbj5032yoedxehc5&raw=1"
    },
    {
      "category": "automotive",
      "item": "Automotive Product",
      "img": "https://www.dropbox.com/scl/fi/w44fbq3eb3hjbriho2oz6/automotive.webp?rlkey=bhddzrjdw9r73zi4jsnj6slb6&raw=1"
    },
    {
      "category": "motorcycle",
      "item": "Motorcycle",
      "img": "https://www.dropbox.com/scl/fi/ll37oc967tcbe3jol3pqd/motorcycle.webp?rlkey=sscfk0s35mf9kn90mg36hewjl&raw=1"
    },
    {
      "category": "lighting",
      "item": "Lighting",
      "img": "https://www.dropbox.com/scl/fi/5f50cnh7g45txd5i9s1fm/lighting.webp?rlkey=6913msyv1mdf5uuibsr8i8685&raw=1"
    }
  ];

  public errorImageLoaded (e: Event): void {
    const imgFail = e.target as HTMLImageElement;
    imgFail.src = 'assets/img/default.png'
  }
}
