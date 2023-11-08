<h1 align="center">
  <a href="">
    <img src="/src/assets/design-handoff.svg" alt="Project Banner Image">
  </a>
</h1>

### Remove git

rm -rf .git

# Design Handoff Project

The project is about creating a web app for the handover from a UX designer. The web app, named "Serenity Yoga," is inspired by the first-ever yoga master in Stockholm, aiming to provide a serene and welcoming environment for yoga enthusiasts. The primary goal is to offer an inclusive yoga experience that caters to all levels of practitioners.

This web app aims to provide a comprehensive and serene experience for all yoga enthusiasts, ensuring that everyone can find a welcoming and supportive community at Serenity Yoga. The design and content are intended to reflect this mission and make the user experience as peaceful and inviting as possible.

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

### The Problem

1. Navbar Styling:

Problem: Navbar items weren't centered, and the mobile menu wasn't working.
Solution: Updated CSS classes for proper centering and added mobile menu functionality using React.

2. Component Styling:

Problem: Component styling wasn't affecting the components.
Solution: Corrected CSS class names in the component styles object to apply the styles.
Text Alignment:

Problem: Text wasn't centering on mobile and tablet views.
Solution: Added text-align: center to the appropriate CSS classes.

3. Viewport Height Issue:

Problem: When setting the height to 100vh, white gaps appeared on mobile and tablet views.
Solution: Adjusted CSS to ensure proper scaling and removed unnecessary minimum width.

4. Multiple Components:

Problem: Concern about setting 100vh height for one section affecting other components below.
Solution: 100vh will indeed affect other components. You may want to use a more flexible approach, like relative or percentage heights, to avoid unintended effects on other components.

5. Design Explanation:

Problem: Required an explanation of the project's design and its inspiration.
Solution: Provided a detailed explanation of the Serenity Yoga project's design, including its inspiration and mission.

6. Multipage Components and Routing:

Issue: In the project, there was a requirement to create a web app with multiple pages, each represented by different components. The challenge arose when trying to implement navigation between these pages using React Router.

Solution: To address this, it's crucial to ensure that routes are correctly defined in the React Router configuration. Additionally, the use of the Link component is vital for smooth navigation between different pages.

Context: This issue underscores the common challenge of setting up routing in a multi-page React web app. Properly configuring routes and ensuring seamless transitions between components is essential for a user-friendly experience.

## Technologies Used:

In the development of this project, several technologies were employed to build a web app capable of handling the UX designer's handover. Some of the key technologies used include:

React: The project was primarily built using the React library, which provides a robust framework for creating user interfaces. It allowed for the creation of dynamic and interactive components.

React Router: To enable multi-page functionality and navigation within the web app, React Router was utilized. It's a widely-used library for handling routing in React applications.

HTML/CSS: These fundamental web technologies were employed for structuring the content and styling the user interface. CSS was particularly crucial for ensuring a visually appealing design.

Node.js and NPM: Node.js served as the runtime environment for the project, and NPM (Node Package Manager) was used for managing project dependencies.

Git: Although the initial project came with a Git repository, the instructions included removing it. Git is a version control system used to track changes in code and collaborate with other developers.

## Future Steps with More Time:
Given more time and resources, there are several areas where this project could be enhanced:

User Authentication: Implementing user authentication to personalize the user experience. This could include user profiles, saved preferences, and history.

Backend Integration: Developing a backend using technologies like Node.js, Express, and a database (e.g., MongoDB) to handle data storage, user information, and server-side logic.

Responsive Design: Ensuring the web app is fully responsive on various devices and screen sizes, creating an optimal experience for users on mobile, tablet, and desktop.

Testing and Deployment: Conducting thorough testing, including unit testing and integration testing, and deploying the project to a production server for public access.

SEO Optimization: Enhancing the web app's search engine optimization to improve visibility on search engines like Google.

Analytics and Monitoring: Integrating analytics tools to gain insights into user behavior and monitor the web app's performance.

Localization: Adapting the app for international audiences by implementing multi-language support.

Accessibility: Ensuring the web app is accessible to all users, including those with disabilities, by following accessibility guidelines (e.g., WCAG).

Security: Implementing security best practices to protect user data and the application from potential vulnerabilities.

Scalability: Preparing the project for future growth by optimizing code and architecture for scalability.

### View it live

Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.

[View Live Project](https://65479af35f288e47c705de7d--friendly-paprenjak-3de396.netlify.app/)


## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
