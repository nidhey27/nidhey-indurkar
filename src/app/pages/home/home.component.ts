import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

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

  blogs = [
    {
      title: "Earn while Learning: The process of removing “L” from Learning!",
      description: "Let me tell you: I am not the only person to achieve this milestone, but some of my friends have landed a job that is ...",
      thumbnail: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
      title: "The 3 Habits: “Foundation of Success”",
      description: "The phrase anticipates how to sell yourself. Oh! What I just said would sound disgusting, but it's a fact...",
      thumbnail: "https://www.success.com/wp-content/uploads/2020/01/Habits_WebThumbnails.png"
    },
    {
      title: "An Escape: From your Misery Inclination",
      description: "Hey Guys, Today I have an engaging story to share with you all. Perhaps some of you have heard about this story in ...",
      thumbnail: "../../../assets/blogs/blog1.jpg"
    },
    {
      title: "Can Money afford Happiness?",
      description: "Hey guys! In this blog, I would like to talk about the significant connection between happiness and money. How many of you think that happiness...",
      thumbnail: "../../../assets/blogs/blog3.jpg"
    },
    {
      title: "Who decides what to live by? Why do people live by others' templates? Choosing unconventional ways of living might cause short-term discomfort, but following a ...",
      description: "",
      thumbnail: "../../../assets/blogs/blog5.png"
    },
    {
      title: "Level Up Your Software Engineering Career: 6 Habits to Land a High-Paying Job",
      description: "You wake up in the morning, reach for your phone, and with a single ...",
      thumbnail: "../../../assets/blogs/blog6.jpg"
    },
  ]

  opensourceContributions = [
    {
      name: "Prometheus",
      description: "Prometheus is a free software application used for event monitoring and alerting. It records real-time metrics in a time series database built using a HTTP pull model, with flexible queries and real-time alerting.",
      thumbnail: "../../../assets/oss/prometheus.png",
      prs: [
        "https://github.com/prometheus/prometheus/pull/12096",
        "https://github.com/prometheus/prometheus/pull/12031",
      ]
      
    }
  ]
}
