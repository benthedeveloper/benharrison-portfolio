import { Injectable } from '@angular/core';
import { Project } from './models/project';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  protected readonly projects: Project[] = [
    {
      id: 'ai-powered-assistant',
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
          url: 'assets/project-images/project-1/ai-chat-banner-main.png',
          altText: 'Screenshot of the AI chat banner on a microsoft.com page',
        },
        {
          url: 'assets/project-images/project-1/ai-chat-button-main.png',
          altText: 'Screenshot of the AI chat button on a microsoft.com page',
        },
        {
          url: 'assets/project-images/project-1/ai-chat-button-01.png',
          altText: 'Screenshot of the AI chat button on a microsoft.com page',
        },
        {
          url: 'assets/project-images/project-1/ai-chat-drawer-chat-with-sales.png',
          altText:
            'Screenshot of the AI chat drawer showing options to chat with sales agent after chatting with the AI chat bot',
        },
        {
          url: 'assets/project-images/project-1/ai-chat-drawer-focused.png',
          altText:
            'Screenshot of the AI chat drawer showing an example of a chat',
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
      legalDisclaimer:
        'Screenshots contain components developed for Microsoft.com. © Microsoft.',
    },
    {
      id: 'product-comparison-table',
      title: 'Product comparison table',
      shortDescription:
        'Development of different variants of a product comparison table used on various pages across microsoft.com.',
      longDescriptionHtml: `
        <p>I was a key developer of this product comparison table component, a complex and feature-rich solution deployed across multiple Microsoft.com pages.</p>
        <ul>
          <li>Built a flexible table component that compares 2-4 products side-by-side with aligned rows and columns</li>
          <li>Implemented expandable/collapsible rows with optional subheadings to handle complex feature hierarchies</li>
          <li>Integrated visual indicators (checkmark icons) to clearly show feature inclusion/exclusion across products</li>
          <li>Configured dynamic buy/try action links sourced from the backend for real-time product pricing and availability</li>
          <li>Added region-specific tax disclaimers to meet compliance requirements for different customer locations</li>
          <li>Ensured full accessibility compliance (WCAG) with semantic HTML and ARIA attributes</li>
          <li>Implemented bidirectional language support (LTR/RTL) for international markets</li>
          <li>Developed with AEM for content authoring, SCSS for styling, and plain JavaScript with Microsoft Web Framework (MWF) component utilities for consistent styling and functionality</li>
        </ul>
        `,
      mainImage: {
        url: 'assets/project-images/project-2/comparison-table-main.png',
        altText:
          'Screenshot of the product comparison table on a microsoft.com page',
      },
      exampleImages: [
        {
          url: 'assets/project-images/project-2/comparison-table-collapsed.png',
          altText:
            'Screenshot of the product comparison table on a microsoft.com page, showing the collapsed view',
        },
        {
          url: 'assets/project-images/project-2/comparison-table-expanded.png',
          altText:
            'Screenshot of the product comparison table on a microsoft.com page, showing the expanded view',
        },
      ],
      skillTags: ['HTML', 'JavaScript', 'SCSS', 'AEM'],
      date: new Date('2024-01-01'),
      legalDisclaimer:
        'Screenshots contain components developed for Microsoft.com. © Microsoft.',
    },
    {
      id: 'solution-wizard',
      title: 'Solution Wizard',
      shortDescription:
        'Key developer of this component used on specific microsoft.com pages. Users answer a series of questions and recieve recommendations at the end, based on their answers.',
      longDescriptionHtml: `
        <p>I was a key front-end developer for this dynamic solution wizard component, collaborating with a back-end developer to create an intelligent questionnaire that guides users to personalized product recommendations.</p>
        <ul>
          <li>Built a multi-step questionnaire component supporting a variable number of questions that could branch based on user responses</li>
          <li>Implemented flexible progress tracking with both deterministic (fixed question count) and indeterminate (dynamic question count) progress bars to keep users informed</li>
          <li>Developed interactive form controls including custom-styled radio buttons and checkboxes with enhanced accessibility and user experience</li>
          <li>Integrated optional disclaimer popovers that provide contextual information without disrupting the user flow</li>
          <li>Created seamless navigation with previous/next/start-over buttons enabling users to review and modify their answers</li>
          <li>Engineered client-side state management to enable all-questions-in-memory transitions with no page reloading between steps</li>
          <li>Collaborated with the design team to implement pixel-perfect styling and ensure consistent visual design throughout the wizard</li>
          <li>Connected the front-end to back-end logic (C#, Java) that calculated personalized product recommendations based on user answers</li>
          <li>Built a results screen that prominently displayed recommended products with clear visual hierarchy highlighting the top recommendation</li>
          <li>Developed with JavaScript and Sass, ensuring responsive design and cross-browser compatibility</li>
        </ul>
      `,
      mainImage: {
        url: 'assets/project-images/project-3/solution-wizard-main.png',
        altText:
          'Screenshot of the Solution Wizard component on a microsoft.com page, showing a question and an answer options',
      },
      exampleImages: [
        {
          url: 'assets/project-images/project-3/solution-wizard-start.png',
          altText:
            'Screenshot of the start of the Solution Wizard component on a microsoft.com page, showing a question and a set of answer options',
        },
        {
          url: 'assets/project-images/project-3/solution-wizard-start-02.png',
          altText:
            'Screenshot of the start of the Solution Wizard component on a microsoft.com page, showing a welcom message and a start button',
        },
        {
          url: 'assets/project-images/project-3/solution-wizard-middle.png',
          altText:
            'Screenshot of the Solution Wizard component on a microsoft.com page, showing the progress bar and a question with answer options, and previous, next, and start over buttons',
        },
        {
          url: 'assets/project-images/project-3/solution-wizard-middle-02.png',
          altText:
            'Screenshot of the Solution Wizard component on a microsoft.com page, ',
        },
      ],
      skillTags: [
        'JavaScript',
        'HTML',
        'A11y',
        'Java',
        'C#',
        'SCSS',
        'API integration',
      ],
      date: new Date('2024-01-01'),
      legalDisclaimer:
        'Screenshots contain components developed for Microsoft.com. © Microsoft.',
    },
  ];

  protected readonly trainingProjects: Project[] = [
    {
      id: 'my-reads',
      title: 'MyReads',
      shortDescription:
        'A book tracking app built with React, allowing users to move books to different "shelves" based on their reading status.',
      longDescriptionHtml: `
        <p>Built with React, this app allows users to track their books and manage their reading status.</p>
        <ul>
          <li>Books are fetched asynchronously from a backend API</li>
          <li>Users can move books between "Currently Reading", "Want to Read", and "Read" shelves. UI stays in sync with the selected shelf.</li>
          <li>Books are displayed with their cover image, title, and author information</li>
          <li>Implemented client-side routing to navigate between the main page and a search page for finding new books to add to shelves</li>
          <li>Search waits for user input before filtering the list of available books</li>
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
      id: 'employee-polls',
      title: 'Employee Polls',
      shortDescription:
        'A polling app built with React and Redux, allowing users to create new polls, answer polls created by other users, and view a leaderboard of users with the most created and answered polls.',
      longDescriptionHtml: `
        <p>Built with React and Redux, this app allows users to create and answer polls, and view a leaderboard of users with the most created and answered polls.</p>
        <ul>
          <li>Users can log in and log out, and only access routes they are authorized to view</li>
          <li>Front-end makes API calls to a backend server to fetch and update user and question data</li>
          <li>State is managed with Redux, and the UI updates in real time as users create and answer polls</li>
          <li>Users can create new polls with a question and two answer options</li>
          <li>Users can answer polls created by any user</li>
          <li>Once answered, a poll will display the percentage of users that answered each option, and the total number of votes</li>
          <li>A leaderboard page ranks users based on the total number of polls they've created and answered</li>
          <li>Unit and browser tests were written with Vitest to ensure the app functions as expected</li>
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
