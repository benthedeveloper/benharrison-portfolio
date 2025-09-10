import { Injectable } from '@angular/core';
import { Project } from './models/project';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  protected readonly projects: Project[] = [
    {
      id: 'project-1',
      title: 'Project 1',
      description: 'Description of Project 1',
      mainImage: {
        url: 'https://placehold.co/600x300',
        altText: 'Main image for Project 1'
      },
      exampleImages: [
        { url: 'assets/project-1/example1.png', altText: 'Example 1 for Project 1' },
        { url: 'assets/project-1/example2.png', altText: 'Example 2 for Project 1' }
      ],
      skillTags: ['Angular', 'TypeScript', 'CSS']
    },
    {
      id: 'project-2',
      title: 'Project 2',
      description: 'Description of Project 2',
      mainImage: {
        url: 'https://placehold.co/600x300',
        altText: 'Main image for Project 2'
      },
      exampleImages: [
        { url: 'assets/project-2/example1.png', altText: 'Example 1 for Project 2' },
        { url: 'assets/project-2/example2.png', altText: 'Example 2 for Project 2' }
      ],
      skillTags: ['React', 'JavaScript', 'HTML']
    },
    {
      id: 'project-3',
      title: 'Project 3',
      description: 'Description of Project 3',
      mainImage: {
        url: 'https://placehold.co/600x300',
        altText: 'Main image for Project 3'
      },
      exampleImages: [
        { url: 'assets/project-3/example1.png', altText: 'Example 1 for Project 3' },
        { url: 'assets/project-3/example2.png', altText: 'Example 2 for Project 3' }
      ],
      skillTags: ['Vue', 'JavaScript', 'Sass']
    },
    {
      id: 'project-4',
      title: 'Project 4',
      description: 'Description of Project 4',
      mainImage: {
        url: 'https://placehold.co/600x300',
        altText: 'Main image for Project 4'
      },
      exampleImages: [
        { url: 'assets/project-4/example1.png', altText: 'Example 1 for Project 4' },
        { url: 'assets/project-4/example2.png', altText: 'Example 2 for Project 4' }
      ],
      skillTags: ['Node.js', 'Express', 'MongoDB']
    },
    {
      id: 'project-5',
      title: 'Project 5',
      description: 'Description of Project 5',
      mainImage: {
        url: 'https://placehold.co/600x300',
        altText: 'Main image for Project 5'
      },
      exampleImages: [
        { url: 'assets/project-5/example1.png', altText: 'Example 1 for Project 5' },
        { url: 'assets/project-5/example2.png', altText: 'Example 2 for Project 5' }
      ],
      skillTags: ['Python', 'Django', 'PostgreSQL']
    },
    {
      id: 'project-6',
      title: 'Project 6',
      description: 'Description of Project 6',
      mainImage: {
        url: 'https://placehold.co/600x300',
        altText: 'Main image for Project 6'
      },
      exampleImages: [
        { url: 'assets/project-6/example1.png', altText: 'Example 1 for Project 6' },
        { url: 'assets/project-6/example2.png', altText: 'Example 2 for Project 6' }
      ],
      skillTags: ['Java', 'Spring Boot', 'MySQL']
    }
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find(project => project.id === id);
  }
}