# Team_Profile_Generator

## Description 
This is a command line based app that allows a manager to quickly generate and display information about their team. The user enters basic information about each team member and an HTML page is generated showing the different team members roles and contact information.

All employee objects are created with classes fo the code is easily modifiable to track any sort of team or group of people with different roles. 

This project was an opportunity to familiarize myself with classes and requiring various modules in node js. 

Please feel free to check out the [repository here](https://github.com/hkfernandez/Team_Profile_Generator).

## Installation
Once you have forked the repository just open the root folder in your terminal and enter `node index.js`

## Usage 
Once the app has been initialized the user will be led through a series a prompts to enter information about the different employees. The user can add as many employees as they would like. Once done an HTML file is generated showing all the employees and related information. It is saved to the `./Dist` folder and can be in viewed  a browser. 

## Credits
All code is written in Javascript
The command line prompted is facilitated by the [Inquirer node Module](https://www.npmjs.com/package/inquirer#examples)
All testing is run with [Jest](https://jestjs.io/)

## Tests

There are tests in the `./tests` folder that can be run if you have the [Jest](https://jestjs.io/) package installed. If you set the scripts key for `test` in the package.json file to "jest" you can run them by typing `npm test`. 

The tests here were created to establish correct implemention of the classes and constructor functions. 

## License

MIT
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 2020 Hector Fernandez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
