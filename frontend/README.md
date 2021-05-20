# Frontend Challenges

Welcome to the frontend project.

Make sure you've read the top-level README to give you some background to the app.

The frontend is written in React and uses `vite` to serve, bundle and hot-reload the app.

## Pre-requisites

You will need the following already installed:

- `node` (v.14.5)
- `npm`
- An IDE or editor of your choice

## Setup

In order for the app to work, you will also need to start the backend server.

### Backend:

- Open a terminal in the `../backend` folder
- Install packages using `npm install`
- Run the server using `npm start`

### Frontend:

- Open a terminal in the `../frontend` folder
- Install packages using `npm install`
- Run the server using `npm start`
- http://localhost:3000 will be opened automatically

**_Note: you will need ports 3000 and 4000 available on your machine_**

## Challenges

1. Centre the question text and answer options in a box both horizontally and vertically within the page. Ensure it has a maximum width of 800px (~5 mins)

2. Complete the `verify` function in `useQuestion.js` to determine whether the option the user selects is correct. (~5 mins)

3. Randomise the order in which the answer options are displayed to the user. (~5 mins)

4. Keep track of the user's score and display it in a panel. The panel should include a count of correct questions and a "current streak", which is the number of questions correct in a row, that gets reset if they get a question wrong. Feel free to add other scores too! (~20 mins)

5. Add an "I don't know" option to each question. This shouldn't affect the user's score or current streak calculations (they should both stay the same if the user chooses "I don't know"). Your solution should include an optimisation that avoids re-rendering the score panel component if there's no change in the score. (~15 mins)

6. Use CSS animations to improve the transitions between different questions as well as when the `result` section is displayed to the user. (~10 mins)

7. Improve the user interface and user experience. This is an opportunity to show us what you can do. You can do as much or as little as you like, as long as there are some improvements. Please avoid using any 3rd party UI frameworks for this task.

## Important Information

- Please commit at least once per task and include the task number at the start of the message.
- The (mins) after each task is to give you an idea of the complexity of the task. We will not be analysing commit times to see how long each one took you.
- Make sure your commit diffs are clean - if you want to use different linting rules that's fine, but please apply all changes in a single commit so they don't pollute the task commits.
- Try to avoid using 3rd party libraries for this test but if you do need to include one, please add a comment explaining why it is required.
