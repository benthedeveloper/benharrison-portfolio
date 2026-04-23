import { Injectable } from '@angular/core';
import { Project } from './models/project';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  protected readonly projects: Project[] = [
    {
      id: 'project-1',
      title: 'AI-powered assistant',
      shortDescription:
        "Front-end development for Microsoft's AI-powered assistant, featured on many pages across microsoft.com.",
      longDescriptionHtml: `
        <p>I worked as lead front-end developer for Microsoft's AI-powered assistant, a chat drawer built on Copilot Studio that user's can open to chat with an AI chat bot to answer
        their questions about Microsoft products.</p>
        <ul>
          <li>Collaborated with design team to implement the desired look and functionality</li>
          <li>Worked with back-end developers who worked on the chat bot logic, and project managers release new features on schedule.</li>
          <li>Built on Microsoft's <a href="https://github.com/microsoft/BotFramework-WebChat" target="_blank">Bot Framework Web Chat</a>, with extended functionality and custom styling</li>
          <li>Integrated with LivePerson's <a href="https://developers.liveperson.com/messaging-window-api-overview.html" target="_blank">Messaging Window API</a>, to allow user's to seamlessly switch between chatting with the AI chat bot, and a real person.</li>
        </ul>
        `,
      mainImage: {
        url: 'assets/project-images/project-1/ai-chat-drawer-main.png',
        altText:
          'Screenshot of the AI chat drawer open on a microsoft.com page',
      },
      exampleImages: [
        {
          url: 'assets/project-images/project-1/example1.png',
          altText: 'Example 1 for Project 1',
        },
        {
          url: 'assets/project-images/project-1/example2.png',
          altText: 'Example 2 for Project 1',
        },
      ],
      skillTags: [
        'HTML',
        'JavaScript',
        'SCSS',
        'AEM',
        'AI',
        'Websockets',
        'LivePerson API',
      ],
      date: new Date('2025-05-01'),
    },
    {
      id: 'project-2',
      title: 'Product comparison table',
      shortDescription:
        'Development of different variants of a product comparison table used on various pages across microsoft.com.',
      longDescriptionHtml: `<p>TODO detailed description of this project</p>`,
      mainImage: {
        url: 'assets/project-images/project-2/comparison-table-main.png',
        altText:
          'Screenshot of the product comparison table on a microsoft.com page',
      },
      exampleImages: [
        {
          url: 'assets/project-images/project-2/example1.png',
          altText: 'Example 1 for Project 2',
        },
        {
          url: 'assets/project-images/project-2/example2.png',
          altText: 'Example 2 for Project 2',
        },
      ],
      skillTags: ['HTML', 'JavaScript', 'SCSS', 'AEM'],
      date: new Date('2024-01-01'),
    },
    {
      id: 'project-3',
      title: 'Solution Wizard',
      shortDescription:
        'Key developer of this component used on specific microsoft.com pages. Users answer a series of questions and recieve recommendations at the end, based on their answers.',
      longDescriptionHtml: `<p>TODO detailed description of this project</p>`,
      mainImage: {
        url: 'assets/project-images/project-3/solution-wizard-main.png',
        altText:
          'Screenshot of the Solution Wizard component on a microsoft.com page, showing a question and an answer options',
      },
      exampleImages: [
        {
          url: 'assets/project-images/project-3/example1.png',
          altText: 'Example 1 for Project 3',
        },
        {
          url: 'assets/project-images/project-3/example2.png',
          altText: 'Example 2 for Project 3',
        },
      ],
      skillTags: ['JavaScript', 'C#', 'Sass'],
      date: new Date('2024-01-01'),
    },
  ];

  protected readonly trainingProjects: Project[] = [
    {
      id: 'training-project-1',
      title: 'MyReads',
      shortDescription:
        'A book tracking app built with React, allowing users to move books to different "shelves" based on their reading status.',
      longDescriptionHtml: `
        <p>TODO detailed description of this project</p>
        <ul>
          <li>TODO key aspect of the work done on this project</li>
          <li>TODO another key aspect of the work done on this project</li>
          <li>TODO another key aspect of the work done on this project</li>
        </ul>
        `,
      mainImage: {
        url: 'assets/project-images/training-project-1/my-reads-main.png',
        altText:
          'Screenshot of My Reads root page, with "Currently Reading" shelf, and "Want to Read" shelf',
      },
      exampleImages: [
        {
          url: 'assets/project-images/training-project-1/my-reads-example-01.png',
          altText: 'TODO Example 1 for Project 1',
        },
        {
          url: 'assets/project-images/training-project-1/my-reads-example-02.png',
          altText: 'TODO Example 2 for Project 1',
        },
      ],
      skillTags: ['React', 'State management', 'Routing'],
      date: new Date('2026-03-11'),
      liveUrl: 'https://benthedeveloper.github.io/udacity-react-myreads',
      repoUrl: 'https://github.com/benthedeveloper/udacity-react-myreads',
    },
    {
      id: 'training-project-2',
      title: 'Employee Polls',
      shortDescription:
        'A polling app built with React and Redux, allowing users to create new polls, answer polls created by other users, and view a leaderboard of users with the most created and answered polls.',
      longDescriptionHtml: `
        <p>TODO detailed description of this project</p>
        <ul>
          <li>TODO key aspect of the work done on this project</li>
          <li>TODO another key aspect of the work done on this project</li>
          <li>TODO another key aspect of the work done on this project</li>
        </ul>
      `,
      mainImage: {
        url: 'assets/project-images/training-project-2/employee-polls-main.png',
        altText:
          'Screenshot of dashboard view of Employee Polls app, showing the app header, and 2 tabs below with a tab for answered and unanswered questions',
      },
      exampleImages: [
        {
          url: 'assets/project-images/training-project-2/employee-polls-example-01.png',
          altText: 'Employee Polls login view',
        },
        {
          url: 'assets/project-images/training-project-2/employee-polls-example-02.png',
          altText:
            'Employee Polls poll detail view with an unanswered question',
        },
        {
          url: 'assets/project-images/training-project-2/employee-polls-example-03.png',
          altText: 'Employee Polls poll detail view with an answered question',
        },
        {
          url: 'assets/project-images/training-project-2/employee-polls-example-04.png',
          altText: 'Example 1 for Project 2',
        },
        {
          url: 'assets/project-images/training-project-2/employee-polls-example-05.png',
          altText: 'Example 1 for Project 2',
        },
      ],
      skillTags: ['React', 'Redux', 'Jest'],
      date: new Date('2026-04-21'),
      liveUrl: 'https://benthedeveloper.github.io/react-redux-employee-polls',
      repoUrl: 'https://github.com/benthedeveloper/react-redux-employee-polls',
    },
  ];

  constructor() {}

  getProjects(): Project[] {
    return this.projects;
  }

  getTrainingProjects(): Project[] {
    return this.trainingProjects;
  }

  getProjectById(id: string): Project | undefined {
    return (
      this.projects.find((project) => project.id === id) ||
      this.trainingProjects.find((project) => project.id === id)
    );
  }
}
