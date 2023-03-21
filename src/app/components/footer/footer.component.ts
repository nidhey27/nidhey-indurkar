import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  visitores = 0
  constructor(private _http: HttpClient){
    _http.get("https://api.countapi.xyz/hit/nidhey27.github.ionidhey-indurkar").subscribe((res: any) => {
      this.visitores = res.value
    })
  }
}
