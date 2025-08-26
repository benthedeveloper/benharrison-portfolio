import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // TODO update with real project data
  protected readonly projects = [
    {
      id: 'project-1',
      title: 'Project 1',
      description: 'Description of Project 1',
      mainImageUrl: 'assets/project-1/main.png',
      exampleImageUrls: [
        'assets/project-1/example1.png',
        'assets/project-1/example2.png'
      ],
      skillTags: ['Angular', 'TypeScript', 'CSS']
    },
    {
      id: 'project-2',
      title: 'Project 2',
      description: 'Description of Project 2',
      mainImageUrl: 'assets/project-2/main.png',
      exampleImageUrls: [
        'assets/project-2/example1.png',
        'assets/project-2/example2.png'
      ],
      skillTags: ['React', 'JavaScript', 'HTML']
    },
    {
      id: 'project-3',
      title: 'Project 3',
      description: 'Description of Project 3',
      mainImageUrl: 'assets/project-3/main.png',
      exampleImageUrls: [
        'assets/project-3/example1.png',
        'assets/project-3/example2.png'
      ],
      skillTags: ['Vue', 'JavaScript', 'Sass']
    },
    {
      id: 'project-4',
      title: 'Project 4',
      description: 'Description of Project 4',
      mainImageUrl: 'assets/project-4/main.png',
      exampleImageUrls: [
        'assets/project-4/example1.png',
        'assets/project-4/example2.png'
      ],
      skillTags: ['Node.js', 'Express', 'MongoDB']
    },
    {
      id: 'project-5',
      title: 'Project 5',
      description: 'Description of Project 5',
      mainImageUrl: 'assets/project-5/main.png',
      exampleImageUrls: [
        'assets/project-5/example1.png',
        'assets/project-5/example2.png'
      ],
      skillTags: ['Python', 'Django', 'PostgreSQL']
    },
    {
      id: 'project-6',
      title: 'Project 6',
      description: 'Description of Project 6',
      mainImageUrl: 'assets/project-6/main.png',
      exampleImageUrls: [
        'assets/project-6/example1.png',
        'assets/project-6/example2.png'
      ],
      skillTags: ['Java', 'Spring Boot', 'MySQL']
    }
  ];
}
