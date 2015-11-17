# Protractor codelab

Protractor codelab

See the [slides](https://docs.google.com/presentation/d/1yBp6C6cLPU0QRa5e2-0UMvii-RV4nRasSsR6boCwEr4/edit?usp=sharing)

## Installation instructions

```shell
# Clone this repo
$ git clone https://github.com/andresdominguez/protractor-codelab.git
$ cd protractor-codelab

# Install dependencies
$ npm install
```

## How to run test tests

The tests run against an Angular application. To start the Angular application
run the following command:

```shell
$ npm run server
```

Once the server is running you need to run the protractor tests. Open a new
terminal window and run the following command:

```shell
$ npm run test
```

## If you get an error

You may get an error while installing protractor. Here is the workaround:

```shell
# Install protractor
$ npm install protractor -g
$ webdriver-manager update

# Run the tests, run on protractor-codelab
$ protractor
```
