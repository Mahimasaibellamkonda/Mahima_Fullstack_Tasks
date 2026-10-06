# Task 3 - Login Form Using State

## Aim

To create a simple Login Form using React `useState` Hook to manage username and password input values.

## Description

This task demonstrates how React state can be used to handle form inputs. The `useState` Hook is used to store and update the username and password entered by the user.

When the user clicks the **Login** button, a login success message is displayed.

## Technologies Used

* React
* JavaScript
* JSX
* Vite
* `useState` Hook

## Features

* Username input field
* Password input field
* State management using `useState`
* Login button
* Login success alert

## React Concepts Used

### 1. useState

The `useState` Hook is used to maintain the values entered in the username and password fields.

```jsx
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
```

### 2. Event Handling

The `onChange` event updates the state whenever the user enters or changes the input.

```jsx
onChange={(e) => setUsername(e.target.value)}
```

```jsx
onChange={(e) => setPassword(e.target.value)}
```

### 3. Button Click

The `onClick` event is used to handle the Login button.

```jsx
<button onClick={handleLogin}>Login</button>
```

## Project Structure

```text
Task3
├── src
│   ├── App.jsx
│   ├── LoginForm.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── package-lock.json
└── vite.config.js
```

## Output

The application displays a lo
