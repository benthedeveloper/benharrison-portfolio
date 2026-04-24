import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

import { DataService } from '../data-service';
import { Project } from '../models/project';
import { SiteHeader } from '../site-header/site-header';

@Component({
  selector: 'app-project-details',
  imports: [DatePipe, SiteHeader, FontAwesomeModule],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {
  project: Project | undefined;
  faDesktop = faDesktop;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.project = projectId
      ? this.dataService.getProjectById(projectId)
      : undefined;
  }
}
