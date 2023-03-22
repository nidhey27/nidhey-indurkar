import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  blogId = '0'


  constructor(private _activatedRoute: ActivatedRoute){
    
  }

  ngOnInit(){
    window.scroll(0,0)
    let id = this._activatedRoute.snapshot.paramMap.get("id")
    this.blogId = atob(id || "")
  }
}
