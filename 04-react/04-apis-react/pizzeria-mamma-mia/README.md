# Milestone 4 - Mamma Mía Pizzeria

In this milestone, we will validate our knowledge of consuming APIs with React. The goal is to implement an external API consumption in a web application using the provided backend API for pizzas.

## Steps:

### 1. Set up the backend:

- Download the provided backend material.
- Install dependencies with `npm install`.
- Start the server using `npm start` (runs on port 5000).

### 2. Consume the pizza API:

- The backend provides a `GET` endpoint (`http://localhost:5000/api/pizzas`) that returns an array of pizzas.

### 3. App.jsx:

- Modify `App.jsx` to consume the pizza API and display `Home.jsx`.

### 4. Home.jsx:

- Use the `useEffect` hook and `fetch` to request data from the pizza API and replace the static pizza array in `pizzas.js` with the API data.

### 5. Pizza.jsx:

- Create a component that displays individual pizza details by consuming the API with a fixed pizza ID endpoint (`GET http://localhost:5000/api/pizzas/p001`).
- Show pizza name, price, ingredients, image, and description.
- Add a "Add to Cart" button with no functionality for now.

---

This project focuses on practicing frontend API consumption using React.
