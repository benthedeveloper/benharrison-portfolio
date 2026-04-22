import { Component, OnInit } from '@angular/core';
import { ProjectsList } from "../projects-list/projects-list";
import { Hero } from "../hero/hero";
import { ExperimentsList } from "../experiments-list/experiments-list";
import { AboutMe } from "../about-me/about-me";
import { ContactMe } from "../contact-me/contact-me";
import { DataService } from '../data-service';
import { Project } from '../models/project';

@Component({
  selector: 'app-home-page',
  imports: [ProjectsList, Hero, ExperimentsList, AboutMe, ContactMe],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage implements OnInit {
  workProjects: Project[] = [];
  trainingProjects: Project[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.workProjects = this.dataService.getProjects();
    this.trainingProjects = this.dataService.getTrainingProjects();
  }
}
