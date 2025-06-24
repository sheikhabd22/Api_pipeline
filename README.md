# Dog Image Gallery


A simple, clean web application that displays images of dogs fetched from the [Dog CEO API](https://dog.ceo/dog-api/). Users can view random dog images, refresh for a new set, or search for images of a specific breed.

## Features

-   **Random Dog Images**: On page load, the gallery is populated with 5 random dog images.
-   **Breed Identification**: The breed of each dog is displayed directly below its image.
-   **Search by Breed**: Use the search bar to find and display up to 5 random images of a specific dog breed (e.g., "husky", "labrador").
-   **Refresh**: A "Refresh" button allows you to fetch a new set of 5 random dog images at any time.
-   **Responsive Design**: A clean and simple layout that works on different screen sizes.
-   **Error Handling**: Displays a "Breed not found" message if the search query doesn't match a valid breed.

## Technologies Used

-   HTML
-   CSS
-   JavaScript (Async/Await for API calls)

## Getting Started

To run this project locally, simply clone the repository and open the `index.html` file in your web browser.

```bash
# Clone the repository
git clone https://github.com/sheikhabd22/api_pipeline.git

# Navigate to the project directory
cd api_pipeline

# Open index.html in your default browser
# On macOS:
open index.html
# On Windows:
start index.html
# On Linux:
xdg-open index.html
```

## File Structure

-   `index.html`: Contains the basic HTML structure of the web page, including the title, search bar, refresh button, and the container for the images.
-   `style.css`: Provides the styling for the application, including layout, colors, fonts, and hover effects.
-   `app.js`: Handles all the application logic:
    -   Fetching data from the Dog CEO API.
    -   Dynamically creating and displaying image elements in the DOM.
    -   Handling user input from the search bar to filter images.
    -   Implementing the refresh functionality.
check it out here-https://api-pipeline.vercel.app/
