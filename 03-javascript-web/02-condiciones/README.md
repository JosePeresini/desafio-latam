# 2nd Challenge - Frontend

This project was created as part of the 2nd Challenge in the Frontend course at Desafío Latam, with the goal of practicing and reinforcing skills in creating interfaces using HTML, CSS, and JavaScript.

## Description

The challenge consists of three interactive sections that implement different concepts of user interaction using HTML, CSS, and JavaScript.

### 1. **Interactive Borders**

In this section, when you click on a world image, a red border is applied or removed depending on its current state. This is achieved using JavaScript to dynamically change the image styles.

- **HTML**: A `<figure>` element containing an `<img>` and a `<figcaption>`.
- **CSS**: Styles are applied to the image and the border properties are set.
- **JavaScript**: An `onclick` event on the image changes its border.

### 2. **Stickers**

Here, the user can input the number of stickers they want to buy from three characters. The total number of stickers is calculated and displayed dynamically. If the total exceeds 10, a message is shown indicating that too many stickers are being bought.

- **HTML**: `<input>` elements are used to allow the user to enter values.
- **CSS**: Styles are applied for the presentation of the stickers and the input fields.
- **JavaScript**: Functionality to calculate the total and show an error message if the number exceeds the limit.

### 3. **Password Selectors**

In this section, the user must select the correct options from a set of three dropdown menus. If the selected options match the "correct" password, a message appears indicating that the password is correct, and the container's border color changes.

- **HTML**: Three dropdown menus (`<select>`) with multiple options (`<option>`).
- **CSS**: Styles for the dropdown menus, submit button, and message display.
- **JavaScript**: Functionality to verify the selected options and show a message based on whether the password is correct or incorrect.

## Project Structure

- `border.html`: Page that implements the interactive border functionality.
- `stickers.html`: Page where the user interacts with stickers and makes calculations.
- `select.html`: Page with dropdown menus to validate the "password".
- `assets/css/style.css`: Common styles for all pages.

## Technologies Used

- **HTML**: Basic structure of the pages.
- **CSS**: Visual design and styling.
- **JavaScript**: Interactive logic to change elements on the page.
