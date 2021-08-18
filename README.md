## To view the working result, please click on the link below:
[https://hbf-timer-fe.herokuapp.com/counter](https://hbf-timer-fe.herokuapp.com/counter)

-------------------------------

## Instructions

![Capture](https://user-images.githubusercontent.com/3336960/129758393-df327913-b886-45e8-8c02-2f7369e0bc22.PNG)

![Capture2](https://user-images.githubusercontent.com/3336960/129758472-a6b58e23-bcec-44bf-b5a1-697ec9987a8e.PNG)

The app is a timer application that allows the user to start counting time by clicking  the button on the center of the screen, which also displays the currently tracked time. Clicking the button again stops the timer and resets the small timer displayed in the button.

The total tracked time by all users is shown in the timer above the button, as shown in the design. The big timer should be updated when the app loads on the screen, and when the user stops his timer.

No authentication or registration is needed for the users.

The user should also be able to switch between light and dark mode using the switch by the side
of the time button.

## Technical requirements

**Frontend**

- The frontend application must be built using React + Typescript
- Feel free to use whatever styling or for components libraries you like (or none)

**Backend**

- The backend application must be build using Node + Typescript
- Feel free to use whatever kind of dependencies / frameworks you like with Node (i.e. Nest, Sails, Express, Fastify, etc)
- Feel free to use whatever kind of database for persisting the data

## Great to have the following practices:

- Good commit messages
- Clean, easy to read code
- A README that includes
    - A short description about the project
    - Instructions on how to run it

## Extra points

- Host your application somewhere (like Netlify or Heroku) or Containerise the application
- API security
- Extra features

-------------------------------

This is a React Next.js project

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000/counter](http://localhost:3000/counter) with your browser to see the result.

## About the project

In this project the following practices has been covered:

- Using of Typescript
- Using of next.js on top of react
- Using of next.js server side requests and rendering.
- API requests to the developed backend in order to read and write data
- Practicing of functional component programming
- Practicing of composition over inheritance
- Using cookie to save latest user preferential theme 
- Using of react hooks
- Developing of reusable components
- Implementing of memoization for the switch component as example (to show case react performance optimization techniques)
- Using of environment variables
- Deploy the final product on Heroku cloud
