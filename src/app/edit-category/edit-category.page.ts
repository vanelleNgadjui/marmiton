import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {AppModule} from "../app.module";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.page.html',
  styleUrls: ['./edit-category.page.scss'],
})
export class EditCategoryPage implements OnInit {

 c:any;
  category:any;
  constructor(private http: HttpClient, private router: Router, private route:ActivatedRoute, private cm: AppModule) {

    this.c= this.http.post('http://localhost:8080/marmiton-1/src/category.php?action=getone', JSON.stringify({'id':this.route.snapshot.paramMap.get('id')})).toPromise().then((response: any)=>{this.category=response; });
    this.category=this.cm.waitFor(this.c);
  }



  editCategory(f: NgForm)
  {
    //const form={name1: 'connard'};
    // eslint-disable-next-line max-len
    this.http.post('http://localhost:8080/marmiton-1/src/category.php?action=edit', JSON.stringify(f.value)).toPromise().then((response: any)=>{console.log(response); });

    this.router.navigate(['category-list'])
    this.ngOnInit();
    //
    //
    // this.http.get('http://localhost/project_ionic/src/category.php?action=get').toPromise().then((response: any)=>{this.results=response; });



  }


  ngOnInit() {
  }

}
