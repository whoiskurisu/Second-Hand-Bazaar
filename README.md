# Second-Hand-Bazaar (An E-Commerce Application)

## Description

2ndHB is an online second-hand store built on Node.js using the Express.js framework alongside plain CSS, and vanilla JS for the frontend, and MongoDB for the database.

## Getting Started

### Installation

* To download and install Node.js :
   - Go to https://nodejs.org/en/download/source-code
   - Download the latest version of Node.js.
   - Follow the installation steps for your OS.
   - To verify installation, run the ```node --version``` command in the terminal.

### Executing program

1. Clone the repository:
```
git clone https://github.com/whoiskurisu/Second-Hand-Bazaar.git
```
2. Open the ```Second-Hand-Bazaar``` file in VS Code.

3. Open up the integrated VS Code terminal: ``` ctrl + ` ```

4. Run ```npm install``` command.

5. Check whether the dependencies are added to the ```package.json``` file.

6. Run the server:
```
node index.js
```
7. Open your browser and go to ```localhost:5000```

Note: Sign up uses ```fetch``` for POST request with ```body: JSON.stringify(data)```
      where as Log in uses the built in form ```action``` and ```method``` attributes.