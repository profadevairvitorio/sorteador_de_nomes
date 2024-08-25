# Sorteador de Nomes
A simple web-based name picker application that allows users to input a list of names and randomly select one or multiple names. This project is built using HTML, CSS, and JavaScript, with end-to-end tests implemented using Cypress.
![image](https://github.com/user-attachments/assets/eea446b9-1843-48b1-ad25-dcbf7b57b545)

[https://profadevairvitorio.github.io/sorteador_de_nomes/](https://profadevairvitorio.github.io/sorteador_de_nomes/)
# Features
- Input Names: Users can input a list of names separated by commas.
- Choose Quantity: Users can specify the number of names to be drawn.
- Random Selection: The app randomly selects the specified number of names.
- Error Handling: Alerts users when the input is invalid, such as no names provided or selecting more names than available.
# Project Structure
- HTML: Basic structure for the user interface.
- CSS: Styling for the page layout and elements.
- JavaScript: Logic for the name drawing functionality.
- Cypress: End-to-end tests to ensure application functionality and error handling.

# Installation
Clone the repository:

``` bash
git clone https://github.com/profadevairvitorio/sorteador_de_nomes.git
cd sorteador_de_nomes
```
# Open the project:

Simply open index.html in your browser to use the application.
Running Cypress Tests
Install dependencies:

``` bash
npm install
```
Open Cypress:

``` bash
npx cypress open
```
# Run Tests:

In the Cypress Test Runner, click on the spec files to run the tests.
Usage
Input Names: Type the names separated by commas in the text area.
Set Quantity: Enter the number of names you want to draw in the quantity input field.
Draw Names: Click the "Draw" button to randomly select the specified number of names.

# Cypress - Workflow
This project is configured to run Cypress tests using GitHub Actions. With this setup, every push to the main branch or any pull request targeting main will trigger a workflow that runs our Cypress end-to-end tests.
![image](https://github.com/user-attachments/assets/aacbdb6d-2f04-49ec-8734-4d8fde00e62c)

[cypress.yml](https://github.com/profadevairvitorio/sorteador_de_nomes/blob/main/.github/workflows/cypress.yml)


# License
This project is licensed under the MIT License. See the [License](LICENSE) file for details.
