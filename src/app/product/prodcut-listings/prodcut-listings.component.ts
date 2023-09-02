import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';

@Component({
  selector: 'app-prodcut-listings',
  templateUrl: './prodcut-listings.component.html',
  styleUrls: ['./prodcut-listings.component.scss']
})
export class ProdcutListComponent implements OnInit{
//  products: { name: string; price: number; description: string; } = { name: '', price: 0, description: '' };
  products = products;

constructor(
//  private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
//    throw new Error('Method not implemented.');
//    this.products = products;
//    any = [1, 2, 3, 4]
//  products: any = [1, 2, 3, 4]
//    this.route.paramMap.subscribe(_params => {
//      this.products = products[+_params.get('prodcutId')!]
//    })  
  }
}