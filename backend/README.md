# Backend Challenges

Welcome to the backend project.

Make sure you've read the top-level README to give you some background to the app.

The backend is a Node Express app written in TypeScript. The main file is `./src/index.ts` which starts the server and loads all the other modules and routes. Each module lives in its own folder within the `./src` folder.

## Pre-requisites

You will need the following already installed:

- `node` (v.14.5)
- `npm`
- An IDE or editor of your choice

## Setup

In order to start the backend server, follow these steps:

- Open a terminal in the `../backend` folder
- Install packages using `npm install`
- Run the server using `npm start`
- Check the server is running correctly by perform a GET request to http://localhost:4000/health

You don't need to run the frontend to complete the backend challenges, but feel free to spin it up to see your changes in a UI. See the separate README in the `../frontend` folder.

### Failing Tests

You can run the test suites via the `npm test` command in the `../backend` folder.

The test suite will not pass when you first check out this repository. By completing the challenges you should make all the existing tests pass (without needing to change them). When you start you should have:

- Test Suites: 3 failed, 1 passed, 4 total
- Tests: 12 failed, 3 passed, 15 total

## Challenges

1. The `/questions/get_question_by_id` in `questions.controller` is badly named. Rename and restructure this endpoint to follow better REST design. (~5 mins)

2. Prevent the `questions.service` from sending the `isCorrect` property of each answer option to the frontend. Use the failing tests in `questions.spec` to help you. (~10 mins)

3. The `verifyResponse` function in the `responses` service & route is currently unfinished. Write a POST endpoint that reads the question ID and user-supplied answer and checks whether the answer is correct. Use the existing unit tests in `responses.spec` as well as the e2e tests in `responses.e2e.spec` to cover all scenarios. (~15 mins)

4. Finish the `calculatePerformance` function in `responses.service`. Use the failing test in `responses.spec` and the explanation of performace below to help you. (~10 mins)

5. Extend the `calculatePerformance` function to return a monthly breakdown of performance. In addition to the overall average calculation from Q4 - this should also return the average performance for all questions answered, aggregated by the calendar month the answers were provided. Ensure your changes have good unit test coverage. (~30 mins)

### Performance Calculation

- Each question has a `difficulty` rating between 1 (easiest) and 5 (hardest).
- For every correct answer, the student gets `1 * difficulty` added to their **performance score**
- For each incorrect answer, `5 - difficulty` is deducted from their **performance score**
- To **performance rating** is then calculated as `performance score / sum(difficulty)` and will be a number between 0 and 100

## Important Information

- Please commit at least once per task and include the task number at the start of the message.
- The (mins) after each task is to give you an idea of the complexity of the task. We will not be analysing commit times to see how long each one took you.
- Make sure your commit diffs are clean - if you want to use different linting rules that's fine, but please apply all changes in a single commit so they don't pollute the task commits.
