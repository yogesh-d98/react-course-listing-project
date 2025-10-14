React Course Listing Project
Overview

This project is a React-based course listing application where users can view, purchase, apply discounts, and delete courses dynamically. It demonstrates the use of multiple React concepts, including components, props, state management, hooks, conditional rendering, and custom hooks.

The data for courses is fetched from a mock API using json-server, allowing frontend development with realistic asynchronous data fetching.

Features

Course Listing

Displays a list of courses fetched from a mock API.

Each course includes:

Name

Description

Price (with optional discount)

Rating

Image

Custom Hook: useFetch

Fetches data from a URL asynchronously.

Handles loading state with a GIF loader.

Handles errors with proper messages.

Can be reused in other components.

Dynamic State Management

Each course tracks its own purchase state using useState.

Price updates dynamically when a discount is applied.

Courses can be deleted from the list dynamically.

Conditional Rendering

Buttons like “Buy Now” and “Apply Discount” are hidden after purchase or discount application.

Loader is displayed while data is fetching.

Error messages are displayed if the fetch fails.

Reusable Components

Course component displays individual course cards.

Courselist component maps through all courses and handles deletion.

Navbar and Footer components provide layout and branding.

Styling

Uses a combination of CSS classes and inline styles.

Responsive and clean card-based UI.

Buttons have conditional disabled attributes when discount or purchase actions are completed.

Integration with Mock API

json-server is used to simulate a REST API.

Courses data is served from mock-data/Mockdata.json.

Static images are served from public/assets or mock-data/assets.


Notes:

public/assets/
All static files such as GIFs or course images are placed here so they can be accessed by URLs in React components.

src/Course/
Contains course-related components:

Courselist.jsx handles mapping and rendering courses.

Coursemain.jsx is the reusable course card component.

Course.module.css contains scoped styles for the course cards.

src/mock-data/
Mock API data stored here; Mockdata.json can be served using json-server for local API testing.

src/useFetch.jsx
Custom hook to fetch data asynchronously with loading and error handling.

Component Organization
Each major UI piece (Navbar, Footer, Courses) is separated into its own folder for better maintainability.

Configuration files
ESLint, Vite, and package files are included at the root of react-app for proper build, linting, and dependency management.

Installation & Running the Project

Clone the repository

git clone <repository-url>
cd react-app


Install dependencies

npm install


Run mock API server

npx json-server --watch mock-data/Mockdata.json --port 3000 --static ./mock-data


Run React app

npm run dev   # if using Vite
# or
npm start     # if using CRA


Open your browser at:

http://localhost:5173  # Vite default
http://localhost:3000  # CRA default

Concepts Demonstrated

React Hooks: useState, useEffect

Custom Hooks: useFetch for reusable API calls

Conditional Rendering: Buttons and loading/error states

State Management: Local state for purchase, discount, and course list

Props Passing: Sending course data and event handlers to child components

Dynamic Lists: Mapping over arrays of courses and rendering components

Event Handling: Click events for purchase, discount, and deletion

Error Handling: Handling API errors gracefully

CSS Styling: Internal, external, and conditional styling

Integration with JSON Server: Mock backend for local development

Usage

Buy Now: Click to mark a course as purchased.

Apply Discount: Click to reduce course price (button disables after applying discount).

Delete: Remove a course from the list.

Loader & Error Handling: Shows a loader while fetching data and errors if API fails.

Notes

Course images must be stored in the public/assets folder or served via json-server static configuration to display correctly.

The useFetch hook demonstrates reusable data fetching, keeping components clean and separating concerns.

Future Enhancements

Add sorting functionality (by price or rating).

Add pagination for large course lists.

Integrate with a real backend instead of JSON Server.

Add search and filtering for courses dynamically.

Enhance UI styling using CSS frameworks like Tailwind or Material-UI.

Author

Yogesh Dhanabalan

React project hand-coded with multiple React concepts, JSX, and custom hooks.
