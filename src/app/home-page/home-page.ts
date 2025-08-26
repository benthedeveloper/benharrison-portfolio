import { Component } from '@angular/core';
import { ProjectsList } from "../projects-list/projects-list";
import { Hero } from "../hero/hero";
import { ExperimentsList } from "../experiments-list/experiments-list";

@Component({
  selector: 'app-home-page',
  imports: [ProjectsList, Hero, ExperimentsList],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
