import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';

@Component({
  selector: 'app-prodcut-detail',
  templateUrl: './prodcut-detail.component.html',
  styleUrls: ['./prodcut-detail.component.scss']
})
export class ProdcutDetailComponent implements OnInit {
  //product: { name: string; price: number; description: string; } = { name: '', price: 0, description: '' };
//  products = products;
//  product!: { name: string; price: number; description: string; }; 
product: any;

  // ActivatedRouteサービスをDIします
  constructor(private route:ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(_params => {
      this.product = products[+_params.get('productId')!]
    })  
  }
}
