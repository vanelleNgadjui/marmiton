import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.page.html',
  styleUrls: ['./product-form.page.scss'],
})
export class ProductFormPage implements OnInit {

  constructor(private http: HttpClient) { }

  addProduct(form: NgForm){

    this.http.post('http://localhost/marmiton/marmiton/src/product.php?action=add', JSON.stringify(form.value)).toPromise().then((response:any)=>{console.log(response) })


  }


  ngOnInit() {
  }

}
