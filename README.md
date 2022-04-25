<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Little contacts api for a technical test.

## About the project

For the project I have used a boilerplate that I built for myself, because the ones I found exceeded or did not reach my requirements.

#### The Nest.js boilerplate consists of:



* Container with a database ready to be deployed on any computer that has Docker and Docker-compose installed.
* Simple auth module.
* Lint and preset configuration.
* Configuring git hooks with Husky to auto-format code and validate that commits follow the "conventional commits" format.
* Some utility for the domain and architecture layers, in order to create simpler code from scratch.


## Technical choices

#### I chose several tools and detail the reason for each one.

- Nest.js: I could have chosen express and used JavaScript without typing to be able to finish the test completely but I prefer to do things calmly but safely, even so I have left some measures in the inkwell due to lack of time.

- Docker-compose: allows the team to test the project without relying on more complex dependencies like a database engine.

- Swagger: It is the documentation system that the framework already has installed and I find it really useful, I have not had time to add examples for the DTOs because time has run out very short and I have had to do without some feature and more tests.

## Installation

We start by installing the dependencies


```
$ yarn install
```

  The second and last step, we create the .env file for the project configuration


```bash
MYSQL_USER=root
MYSQL_PASSOWRD=root
MYSQL_DB=test_db
MYSQL_PORT=3306

API_PORT=4050

SECRET_SEED=little_secret
TOKEN_EXPIRATION=1d
```


  
  

## Running the app

Now, we need to put on the container with the MySql database offered by the boilerplate and run the application.

```bash
#boot the container
$ docker-compose up -d

#development mode:
$ yarn start

#watch mode:
$ yarn start:dev


```


## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## Stay in touch

- Author - [Github](https://github.com/luisdev97)
- [LinkedIn](https://www.linkedin.com/in/luis-david-amador-montoro)



## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

