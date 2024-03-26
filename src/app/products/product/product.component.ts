import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
 
})
export class ProductComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    const productId = +(this.route.snapshot.paramMap.get('id') ?? '0');
    const productName = this.route.snapshot.paramMap.get('name') ?? '';
    const productDescription = this.route.snapshot.paramMap.get('description') ?? '';
    const productWarranty = this.route.snapshot.paramMap.get('warranty') ?? '';
    const productPrice = this.route.snapshot.paramMap.get('price') ?? '';
    this.product = { id: productId, name: productName, description: productDescription, warranty: productWarranty, price: productPrice };
}

}
