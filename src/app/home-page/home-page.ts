import { Component } from '@angular/core';
import { ProjectsList } from "../projects-list/projects-list";
import { Hero } from "../hero/hero";
import { ExperimentsList } from "../experiments-list/experiments-list";
import { AboutMe } from "../about-me/about-me";
import { ContactMe } from "../contact-me/contact-me";

@Component({
  selector: 'app-home-page',
  imports: [ProjectsList, Hero, ExperimentsList, AboutMe, ContactMe],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
