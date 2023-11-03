<h1 align="center">
  <a href="">
    <img src="/src/assets/design-handoff.svg" alt="Project Banner Image">
  </a>
</h1>

# Design Handoff Project

The task was to, in cooperation with a UX Design Student, transform a design for a fitness club into code using React and several third-party libraries of our choice. The site also needed to be translated into at least one other language.

## Getting Started with the Project

### Dependency Installation

Since I didn't have the design when I started on the project, I first installed all the required dependencies, as well as the dependencies for Styled Components, Tailwind CSS and react-i18next. I chose to work with Day.js instead of Moment.js for two reasons. First, I have already tried Moment.js at an other time, and second, I wanted to try and keep the file size of the project to a minimum. I later unistalled Day.js because I didn't use it. 

### Styling
As I was done laying out the content I styled each section by itself. In the sketch the margins and padding differed a lot, meaning the maring and padding in one section could be compleatly different in the next. If all the pages, components and heading etc would've had the same margins & paddings I would have styled this first in the root style-sheet, and later make small adjustments only in the component css-files. I used mostly regular CSS. Styled components where good, but I felt it became too crowded in my components. I however decided to use it at one or two places to hide a part of the component so that I didn't have to create a whole css-file for that. Tailwind is installed. I however couldn't use it due to the fact that I had to replicate the design as closely as possible. I din't uninstall it, since that would take away a lot of CSS resets applied by Tailwind - giving me extra work. 

### Deployment to Netlify

I deployed the project right away to allow the UX Designer Linnea Pettersson to view it from her end, in review purposes. The link can be found further down.

### Proud moments

I'm really proud of my reusable "Text with image"-components and the fact that one big section like the Contact Us could be used on two of my pages. I'm also really proud of the fact that I decided to make routes/links to all my subpages, even though they are empty. It makes the site feel more complete. 

### The Problem

I implemented a lot of code to make my subscribe section work as intended. And then when I went over to the contact form I decided to use React Form Hook instead, which made the code shorter. I watched videos on it, and read the docs. This project is probably one of the few where I've used Google and Youtube basically as much as ChatGpt to find the correct information, instructions and tips and tricks. We talked a lot in our team as well, to solve issues. 

## View it live

https://align-studio-yoga.netlify.app/about-us