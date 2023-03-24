import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nidhey-indurkar';

  constructor(private meta: Meta) {
    this.meta.addTag({ name: 'description', 
                   content: "Discover the stunning portfolio of Nidhey Indurkar - a talented web developer and designer with a passion for crafting beautiful and functional websites. Explore his latest projects and learn more about his creative process, design philosophy, and technical skills. Whether you're looking for inspiration, guidance, or collaboration, Nidhey's website is a must-visit destination for anyone interested in web development and design. Click now to explore his work and get inspired!" });
  }

  

}
