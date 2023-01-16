import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.page.html',
  styleUrls: ['./category-form.page.scss'],
})
export class CategoryFormPage implements OnInit {



  constructor(private http: HttpClient) { }

  addCategory(form: NgForm){
    console.log(form);
    this.http.post('http://localhost:8080/marmiton-1/src/category.php?action=add', JSON.stringify(form.value)).toPromise().then((response:any)=>{console.log(response) })

  }


  ngOnInit() {
  }

}
