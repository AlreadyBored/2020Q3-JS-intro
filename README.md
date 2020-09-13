# JS Intro

⚠️ DO NOT SUBMIT PULL REQUESTS TO THIS REPO ⚠️

## General task description
Your task is to write several functions that are the solution to the subtasks. Subtasks descriptions, as well as instructions on how to run tests and submit solutions are below.

---

### **Time formatter**

Your task is to write a function that will format the `number` of seconds received, converting it according to the rules:
- The input parameter `sec` is a **natural** `number`;
- The function converts the `number` of seconds to a `string` of the following form: '\*Number of minutes\* min \*Number of seconds\* sec'
example:
   * `formatTime(90)` => `'1 min 30 sec'` 
- If the number of seconds or minutes after formatting is zero, the corresponding component of the resulting string is missing. For example:
   * `formatTime(35)` => `'35 sec'`
   * `formatTime(60)` => `'1 min'`
- The function converts a natural number of seconds up to the equivalent of one hour (1- 3600 seconds);
- If a value is received that does not comply with these rules, the function should throw an error.

Write your code in `src/timeFormatter.js`.

---

#### Prerequisites
1. Install [Node.js](https://nodejs.org/en/download/)   
2. Fork this repository: https://github.com/AlreadyBored/2020Q3-JS-intro
3. Clone your newly created repo: https://github.com/<%your_github_username%>/2020Q3-JS-intro/  
4. Go to folder `2020Q3-JS-intro`  
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)  
6. Run `npm run test` in command line.
7. You will see the number of pending, passing and failing tests.

---

#### Notes
1. We recommend you to use nodejs of version 12 or lower. If you use any of features, that does not supported by node v12, there may be problems with task submit.
2. Please, be sure that each of your tests is limited to 30 sec.

---

© [AlreadyBored](https://github.com/alreadybored)

& Thanks [mikhama](https://github.com/mikhama) for assistance!