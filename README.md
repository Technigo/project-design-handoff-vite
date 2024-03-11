<h1 align="center">
  <a href="">
    <img src="/src/assets/design-handoff.svg" alt="Project Banner Image">
  </a>
</h1>

### Remove git

rm -rf .git

# Design Handoff Project

We did this project during a particularly busy week, so I really didn't have much time to work on it. There was a lot to do. I probably made some of it harder on myself than needed. I could have copy-pasted font sizes and buttons, but I wanted to make as much of it as possible responsive. In the inspect tool, I had a lot of trouble with the "iPad Pro." I would change the sizes to fit the iPad Pro, it would look correct, and then going back, it looked wrong, and I had to change it again. Therefore, the Media sizes are not consistent throughout the code. The designer designed the project for iPhone 14, iPad Pro, and MacBook Air. I have tried to take that and the iPhone 12, iPad Air, and Mini into consideration, but I have not prioritized the iPhone SE or other media sizes.

Going back and finishing was also a challenge because the week I did it was so stressful that I hadn't written a readme and was not sure about all the decisions I had made. I'll have to add more comments in the future. Some of them I would probably not choose again. I did take some liberties with the design, most of them because parts of the design were not consistent (like font sizes not changing when the font type was, and small stuff like that) and some because (like centering buttons and keeping it consistent in size, like on the form) it's easier, and I think it looks more consistent. Because I couldn't finish my project on time the week we were doing it, I did not consult changes with the designer, but if the situation had been different and I had time to work on the project in November, I would have, of course.

### The Problem

My biggest problem was making carousels. I could not figure out how to use them with any libraries. I installed different ones, but it was a struggle for me. I ended up doing it without any libraries. Both of them work pretty much with the way the design looks, but I wanted them to "scroll indefinitely" seamlessly. Most of the libraries crashed when I tried using them. When I went back now to finish it, Swiper did work, but not with the functions I needed, so I decided to not use libraries and make it look more like the design.

It took me a while to grasp how to translate the text, especially with the pre-set font sizes in "/UI/textAndTypography/Text.jsx," but once I made the first few work, it was easy to follow the pattern.

I had a lot of fun trying to follow a design. I just wish I had more time the week we were originally doing it to ask the designer more questions along the way.

### View it live

https://yoga-balance.netlify.app/

### The Design:

https://www.figma.com/file/ilgFeihFlz32pS8mHAuGZO/Week-9-Linda-%C3%85kerlund?type=design&node-id=819-1623&mode=design&t=ZgTJHRTGr7qRumR7-0

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```
