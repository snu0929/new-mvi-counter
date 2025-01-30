# Counter App (React/RxJS with MVI Architecture)

This project implements a counter application using React, RxJS, and the Model-View-Intent (MVI) architectural pattern.  It adheres to the specified requirements and demonstrates a clear separation of concerns.

## Deployed Link

[https://counter-mvi-mjd58cf7e-snu0929s-projects.vercel.app/](https://counter-mvi-mjd58cf7e-snu0929s-projects.vercel.app/)

## Project Structure

src/
├── model/
│   └── CounterModel.js       // Contains the application state and business logic.
├── view/
│   └── CounterView.js        // React component responsible for rendering the UI.
├── intent/
│   └── CounterIntent.js      // Handles user interactions and dispatches intents.
└── components/
└── Counter.jsx           // Main container component connecting View, Model, and Intent.


## Architecture

The application follows the MVI (Model-View-Intent) architecture:

*   **Model:** `CounterModel.js` manages the application's state (the counter value and auto-increment status). It exposes streams of state updates.  Business logic for incrementing, decrementing, resetting, and auto-incrementing resides here.

*   **View:** `CounterView.js` is a pure React component that renders the UI based on the state emitted by the Model.  It does not handle any business logic.

*   **Intent:** `CounterIntent.js` captures user interactions (button clicks, etc.) and transforms them into intents. These intents are then passed to the Model to trigger state changes.  RxJS is used to manage the asynchronous operations and intent streams.

*   **Component:** `Counter.jsx` acts as the container, connecting the View, Model, and Intent. It subscribes to the Model's state updates and passes them to the View. It also passes the Intents to the Model to trigger actions.

## Features

*   **Increment:** The "+" button increases the counter by 1.
*   **Decrement:** The "-" button decreases the counter by 1.
*   **Reset:** The "Reset" button sets the counter to 0.
*   **Auto-Increment:** When enabled, the counter automatically increases by 1 every 1.1 seconds.
*   **Auto-Increment Toggle:**  A checkbox enables/disables auto-increment.
*   **Boundaries:** The counter value is constrained between 0 and 98 (inclusive).

## Implementation Details

*   **RxJS:** RxJS is used for handling asynchronous operations, particularly the auto-increment feature and managing the stream of user intents.
*   **React:** React is used for building the user interface and managing component updates.
*   **MVI Pattern:** The application is structured according to the MVI pattern, promoting a clear separation of concerns and making the code more testable and maintainable.

## screenshot
![image](https://github.com/user-attachments/assets/0526230f-88e2-44e2-b27d-f49a2d6fc598)


## How to Run

1.  Clone the repository: `git clone https://github.com/snu0929/new-mvi-counter.git`
2.  Navigate to the project directory: `cd counter-mvi-app`
3.  Install dependencies: `npm install` or `yarn install`
4.  Start the development server: `npm start` or `yarn start`

## Further Improvements

*   **Testing:** Add unit tests for the Model, Intent, and View components.
*   **UI Enhancements:** Improve the styling and user experience of the interface.
*   **Error Handling:** Implement proper error handling for edge cases.
*   **More Complex Features:** Extend the app with more features, demonstrating the scalability of the MVI architecture.
