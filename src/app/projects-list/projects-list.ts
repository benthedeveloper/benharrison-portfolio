import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../data-service';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './projects-list.html',
  styleUrl: './projects-list.scss'
})
export class ProjectsList implements OnInit {
  projects: Project[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.projects = this.dataService.getProjects();
  }
}