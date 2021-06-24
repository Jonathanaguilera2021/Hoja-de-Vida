import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  public social_network = [
    {
      name:"Facebook",
      icon: "fa fa-facebook",
      link:"https://www.facebook.com/jonathansebastian.aguileracaro"
      
    },
    {
      name:"Instagram",
      icon:"fab fa-instagram",
      link:"https://www.instagram.com/jonathanaguileracaro/"
    
    },
    {
      name:"LinkedIn",
      icon:"fab fa-linkedin",
      link:"https://www.linkedin.com/in/jonathan-sebastian-aguilera-caro-86a6aa94/"   
    },
    {
      name:"GitHub",
      icon:"fab fa-github",
      link:"https://github.com/Jonathanaguilera2021"   
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
