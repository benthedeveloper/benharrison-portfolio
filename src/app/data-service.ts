import { Injectable } from '@angular/core';
import { Project } from './models/project';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  protected readonly projects: Project[] = [
    {
      id: 'project-1',
      title: 'AI-powered assistant',
      shortDescription: 'Front-end development for Microsoft\'s AI-powered assistant, featured on many pages across microsoft.com.',
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
        altText: 'Screenshot of the AI chat drawer open on a microsoft.com page'
      },
      exampleImages: [
        { url: 'assets/project-images/project-1/example1.png', altText: 'Example 1 for Project 1' },
        { url: 'assets/project-images/project-1/example2.png', altText: 'Example 2 for Project 1' }
      ],
      skillTags: ['HTML', 'JavaScript', 'SCSS', 'AEM', 'Websockets'],
      year: 2025
    },
    {
      id: 'project-2',
      title: 'Product comparison table',
      shortDescription: 'Development of different variants of a product comparison table used on various pages across microsoft.com.',
      longDescriptionHtml: `<p>TODO detailed description of this project</p>`,
      mainImage: {
        url: 'assets/project-images/project-2/comparison-table-main.png',
        altText: 'Screenshot of the product comparison table on a microsoft.com page'
      },
      exampleImages: [
        { url: 'assets/project-images/project-2/example1.png', altText: 'Example 1 for Project 2' },
        { url: 'assets/project-images/project-2/example2.png', altText: 'Example 2 for Project 2' }
      ],
      skillTags: ['React', 'JavaScript', 'HTML'],
      year: 2025
    },
    {
      id: 'project-3',
      title: 'Solution Wizard',
      shortDescription: 'Key developer of this component used on specific microsoft.com pages. Users answer a series of questions and recieve recommendations at the end, based on their answers.',
      longDescriptionHtml: `<p>TODO detailed description of this project</p>`,
      mainImage: {
        url: 'assets/project-images/project-3/solution-wizard-main.png',
        altText: 'Screenshot of the Solution Wizard component on a microsoft.com page, showing a question and an answer options'
      },
      exampleImages: [
        { url: 'assets/project-images/project-3/example1.png', altText: 'Example 1 for Project 3' },
        { url: 'assets/project-images/project-3/example2.png', altText: 'Example 2 for Project 3' }
      ],
      skillTags: ['Vue', 'JavaScript', 'Sass'],
      year: 2025
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