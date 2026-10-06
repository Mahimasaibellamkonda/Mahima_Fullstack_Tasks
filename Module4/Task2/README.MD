# Task 2 - Student Marks Using Props and State

## Aim

To create a React application that displays student details using Props and manages student marks using the `useState` Hook.

## Description

This task demonstrates the use of **Props** and **State** in React.

The student's name and subject are passed to the component using Props. The marks are maintained using the `useState` Hook. The user can increase or decrease the marks using buttons.

## Technologies Used

* React
* JavaScript
* JSX
* Vite
* Props
* `useState` Hook

## Features

* Displays student name
* Displays subject name
* Displays current marks
* Increase Marks button
* Decrease Marks button
* Dynamic update of marks using React State

## React Concepts Used

### 1. Props

Props are used to pass the student's name and subject to the `StudentMarks` component.

```jsx
<StudentMarks
  name="Rahul"
  subject="Java"
/>
```

Inside the component:

```jsx
function StudentMarks({ name, subject }) {
```

### 2. useState

The `useState` Hook is used to store and update the student's marks.

```jsx
const [m]()
```
