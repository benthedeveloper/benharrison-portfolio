import { Component, Input } from '@angular/core';

import { RouterModule } from '@angular/router';
import { Project } from '../models/project';

@Component({
  selector: 'app-projects-list',
  imports: [RouterModule],
  templateUrl: './projects-list.html',
  styleUrl: './projects-list.scss'
})
export class ProjectsList {
  @Input() heading: string = 'Projects';
  @Input() projects: Project[] = [];
}