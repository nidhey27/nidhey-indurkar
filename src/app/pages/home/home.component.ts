import { Component, Renderer2 } from '@angular/core';
import blogs from '../../../assets/blogs.json'
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  blogs: any = blogs
  constructor(private renderer: Renderer2, private _router: Router) {
    let theme = localStorage.getItem('theme')

    const link = this.renderer.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'src/app/stylesheets/blue.css';
    this.renderer.appendChild(document.head, link);

    
  }

  whatIDo = [
    "I'm a software engineer who takes the 'break it till you make it' approach - if it's not working, you can bet I'll find a way to break it even more until it miraculously starts working again!",
    "I'm a Software Engineer who likes to code, drink coffee, and occasionally argue with my computer screen.",
    "I'm a software engineer who's constantly trying to break things, but don't worry - I always make sure they work again before anyone notices!",
    "I'm a software engineer who's not afraid to break a few eggs to make an omelette... or in my case, break a few lines of code to make an awesome app!"
  ]

  randomIndex = Math.floor(Math.random() * this.whatIDo.length);

  techinicalSkills = [
    "Docker",
    "K8s",
    "Go Lang",
    "Micro Services",
    "REST API",
    "Ansible",
    "NodeJS",
    "JavaScript",
    "TypeScript",
    "Angular",
    "AWS Cloud",
    "Python",
    "Flutter",
    "Jenkins, Travis CI",
    "GIT",
    "Ionic",
    "MySQL,MongoDB",
    "PHP",
  ]
  
  

  opensourceContributions = [
    {
      name: "Prometheus",
      description: "Prometheus is a free software application used for event monitoring and alerting. It records real-time metrics in a time series database built using a HTTP pull model, with flexible queries and real-time alerting.",
      thumbnail: "assets/oss/prometheus.png",
      prs: [
        "https://github.com/prometheus/prometheus/pull/12096",
        "https://github.com/prometheus/prometheus/pull/12031",
      ]

    }
  ]

  personalProjects = [
    {
      name: "BeSafe v1.0.0",
      description: "When it comes to safety apps for women, 'Be Safe' is one of the best options. It was of the utmost importance to develop the app with a focus on personal safety. The application comes with all the essential features, including GPS tracking, emergency numbers, and directions to safe areas.",
      thumbnail: "assets/projects/besafe.png",
      
    }
  ]

  ngOnInit(){
    this.blogs = this.blogs.reverse()
  }

  navigate(id: any) {
    this._router.navigateByUrl('/blogs/'+ btoa(id.toString()))
  }
}
