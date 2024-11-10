# Design Handoff Project

This project aimed to replicate a Figma design for a web page titled Random Acts of Kindness (R.A.O.K) provided by a UX designer. The goal was to build a responsive and maintainable React application using reusable components and styled-components.

🔍 Project Overview
The page is built using React and leverages styled-components for styling. We focused on creating a modular structure with reusable components to ensure a scalable and easily maintainable codebase.

### The Problem

- Structuring the Layout
  Problem: Structuring the layout and organizing it into components was the primary challenge.
  Solution: We approached the project by first building the smallest reusable components (e.g., typography components) and then progressively creating larger section components. As the project evolved, we had to refactor and reorganize some components for better maintainability.

- JSON Data Management
  Problem: Handling the page content in a scalable way.
  Solution: We stored the content in JSON files, allowing for easy updates and a more maintainable code structure. This approach also makes it simpler to modify content in the future.

- Working with Branches
  Problem: Managing code changes collaboratively.
  Solution: We followed a branching strategy with frequent commits and pull requests to minimize merge conflicts. This practice helped us maintain a clean and stable codebase throughout development.

- Handling Inconsistent Spacing
  Problem: The design had inconsistent spacing values, making it challenging to implement a unified spacing system.
  Solution: We defined a set of spacing values in themes.js but had to introduce custom margins and paddings in specific components where unique spacings were required. This helped maintain a balance between design fidelity and code maintainability.

- Slideshow Implementation
  Problem: Creating a seamless image slideshow with smooth transitions.
  Solution: Despite multiple attempts to refine the animation, the slideshow still has a minor "jump" when it reloads. This remains an area for future improvement.

if we had more time:

- Fix the slideshow issue to ensure a smooth, seamless transition between images.
- Refactor component naming to make the names more logical and easier to understand for future developers.
- Create reusable button components for the social links section to follow the DRY principle and ensure consistent styling across the application.
- Enhance the responsive layout for tablet and desktop views, making it more aligned with the provided design specifications.
- Add comments and documentation throughout the components to explain their purpose and functionality, improving code readability.

### View it live

https://act-of-kindness.netlify.app

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
