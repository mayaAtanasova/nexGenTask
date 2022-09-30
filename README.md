# Simple React app to submit a form

An implementation of an SPA containing a form (registering a user for a coworking space);

## Available Scripts (standard React scripts)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode on [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
Six tests have been implemented to test the functionality of the app.  One for the App component and five for t

### `npm run build`

Builds the app for production to the `build` folder.

## External libraries

No external libraries have been used for this project.

## Functionality

The app renders a single form to simulate registering a user for a co-working space.
Different types of inputs are included - text, date, number, color picker, email, password, URL, image, radio, checkbox, submit and reset inputs, as well as a text area and a select.

All fields are validated upon submission, using a customHook which returns an error object.  The respective errors for each input change the styling of the input and display an error message below. Different validaors are used for different types of input.  E.g. e-mail is validated for availability as well as correctness of form.  Phone number is validated for the fact if only digits have been input.
A reset button is available for resetting the form.  The form is automatically reset if submission was successful.
The form can only be submitted if all errors have been cleared.
If the submission was successful (on the server side) the user gets a confirmation message, if it was not - they get a message for the lack of success.

## Structure

There is a main App component.  A single RegistrationForm component in teh Components folder for the registration form, containing also the tests thereof.
Validator functions, the service to post the form, the Form and Error object interfaces, the used validation hook are all structured in separate folders.
