# Task 1 - Student Profile Using Props

## Aim

To create a React application that displays student profile information using Props.

## Description

This task demonstrates how **Props** are used in React to pass data from a parent component to a child component.

The student's name, roll number, course, and college are passed as Props to the `Student` component and displayed as a student profile.

## Technologies Used

* React
* JavaScript
* JSX
* Vite
* Props

## Features

* Displays student name
* Displays roll number
* Displays course
* Displays college
* Uses a reusable Student component
* Demonstrates passing data through Props

## React Concept Used

### Props

Props are used to pass data from the parent component to the child component.

In this task, the `Student` component receives the following Props:

```jsx id="d2t5tq"
name
rollNo
course
college
```

The component is called from `App.jsx` as:

```jsx id="w1j0j9"
<Student
  name="Rahul"
  rollNo="101"
  course="BCA"
  college="ABC College"
/>
```

The `Student` component receives these values using:

```jsx id="f2rj9h"
function Student({ name, rollNo, course, college }) {
```

## Project Structure

```text id="36i0q4"
Task1
├── src
│   ├── App.jsx
│   ├── Student.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── package-lock.json
└── vite.config.js
```

## Output

The application displays a student profile containing:

```text id="r7o1wo"
Student Profile

Name     : Rahul
Roll No  : 101
Course   : BCA
College  : ABC College
```

## Conclusion

This task demonstrates the basic use of React Props for passing data to reusable components. The `Student` component receives student details as Props and displays them dynamically.
