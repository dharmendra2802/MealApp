# Project Title: SavouryTaste - a recipe finder

## Overview
RecipeFinder is a web application that allows users to search for recipes, discover new dishes, and save their favorite recipes for future reference. 
The application leverages the MealDB API to fetch recipe data and provides an intuitive user interface for an enhanced recipe browsing experience.

-- RepoLink: https://github.com/dharmendra2802/MealApp/tree/main
-- HostedLink: https://dharmendra2802.github.io/MealApp/index.html
-- Video: https://drive.google.com/file/d/1ATCe3GyCIc9TnUCBRGbepJuLKg2KPQFG/view?usp=sharing

## Features
RecipeFinder offers the following features:

1. Recipe Search: Users can search for recipes by entering keywords, ingredients, or dish names in the search bar.
                  The application retrieves relevant recipes from the MealDB API based on the user's input and also it will suggest dish names based on the entered
                  input

2. Recipe Details: When a user selects a recipe from the search results, it will redirect to a page that displays detailed information about the dish,
                   including ingredients, instructions, preparation time, and an image, also it will have a source option that will redirect to the source page of the recipe
                   Also an option of Video Tutorial which will redirect the youtube link of the recipe

3. Favorites: Users can save their favorite recipes by adding them to their favorites list. This allows them to easily access and revisit their preferred recipes at any time.
              It also stores the data about the favorite dishes in the browser's local storage so the data remain there even when the session is closed

4. Random Dish: It also has the option to show a random dish each time you click on it, so even when you are confused what to make it have you covered

   
## Technologies Used
The RecipeFinder project utilizes the following technologies:

- HTML5: For structuring the web pages and organizing the content.
- CSS3: For styling the user interface and ensuring an appealing design.
- JavaScript: To handle user interactions, retrieve data from the MealDB API, and dynamically update the page.
- MealDB API: The application integrates with the MealDB API to fetch recipe data and related information.
- GoogleFont: To use fonts on our page 
