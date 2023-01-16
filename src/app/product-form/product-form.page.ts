import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.page.html',
  styleUrls: ['./product-form.page.scss'],
})
export class ProductFormPage implements OnInit {
 
  categories:any
  constructor(private http: HttpClient) { }

  addProduct(form: NgForm){

    this.http.post('http://localhost:8080/marmiton-1/src/product.php?action=add', JSON.stringify(form.value)).toPromise().then((response:any)=>{console.log(response) })


  }


  ngOnInit() {
    this.http.get('http://localhost:8080/marmiton-1/src/category.php?action=getall').toPromise().then((response: any)=>{this.categories=response});

  }

}
