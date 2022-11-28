# OnRouteBc Frontend


## Main Stack

- Node Version 18
- React / Typescript
- Docker
- Jest
- Redux (not yet implemented)
- SASS (not yet implemented)

## Installation

* Open a terminal
* Clone the repository:

```
$ git clone https://github.com/devin-aot/onRouteBc-frontend-poc.git
```

* Ensure that you are using Node 18 (`npm ci` may fail with other versions of Node)
* From the root directory:

```
$ npm ci
$ npm start
```

* Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Run tests locally

```
$ npm test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Deployment Pipeline

* Create a branch from main
* Write code
* Create a Pull Request to main

The deployment pipeline is started once a PR is created. An instance of your branch is automatically pushed to Openshift where the suffix of the DeploymentConfig and ImageStream will be equal to the Pull Request #.

TODO: Bug - sometimes need to kick imagestream to successfully deploy

Each time you make a commit to the PR, the Openshift instance will be rebuilt and deployed from GitHub actions.

The workflow includes unit tests, secret search, builds, and deploys.

* Merge PR to main (TODO)

Deploys to prod?

* Close PR

Cleans up all Openshift resources that were associated with your PR.

