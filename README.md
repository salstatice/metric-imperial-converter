# [Metric-Imperial Converter](https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/metric-imperial-converter)

### About the project

This project is an assignment project created by FCC for Quality Assurance Certification.

Metric-Imperial Converter can convert unit between:
* liters (L) <-> gallons (gal)
* kilograms (kg) <-> pounds (lbs)
* kilometers (km) <-> miles (mi)

### Getting Started

[Express](https://expressjs.com/) is used as the Node.js web application framework in this project. See [hello-world example](https://expressjs.com/en/starter/hello-world.html).

#### Installing Node and NPM
This project depends on Nodejs and Node Package Manager (NPM). To install Node, go to https://nodejs.org and select the appropriate installation package depending on your computer's platform (Windows, MacOS or Linux).

`Note: On Windows machines, you may need to configure your PATH environmental variable in case you forgot to turn on the add to PATH during the installation steps.`

#### Verifying the Node Installation
To ensure that your NodeJS setup is working correctly, open the terminal and type the following to check for the version of Node and NPM
```
$ node -v
$ npm -v
```

#### Installing project dependencies
This project uses NPM to manage software dependencies. NPM Relies on the package.json file. To install dependencies, open the terminal, cd to the project directory and run:
```
$ npm install
```

### Running the server
To run locally, cd to the project directory and type the following command:
```
$ node server.js
```
Then, load http://localhost:3000/ in a browser to see the output.

### Routes

The index page file can be found in the directory at `/views/index.html`. The API endpoint can be accessed through URL or the input box on index page.

#### API endpoints

This project has one API endpoint. 

#### GET /api/convert?input=

Input query is required by this endpoint. Input units are case insensitive. If no numerical input is provided, it is default to a numerical input of 1.

Example Usage:
`/api/convert?input=4gal`
`/api/convert?input=1/2km`
`/api/convert?input=5.4/3lbs`
`/api/convert?input=kg`

Example Return:
```
{"initNum":4,"initUnit":"gal","returnNum":15.14164,"returnUnit":"L","string":"4 gallons converts to 15.14164 liters"}
```

### Conversion logic

The conversion logic for this project are located in the directory at `/controllers/convertHandler.js`

### Testing

Unittests and functional testes are located in the `/tests` folder. 

To run test, set up the following environment variable, or put the following variable in a `.env` file:
```
NODE_ENV=test
```

Then, run the app with the following command:
```
$ node server.js
```

