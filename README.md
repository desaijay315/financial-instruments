---
title: Financial Instruments Data
description: Custom DataTable representing financial instrument data sorting
author: Jay Desai
created: 2024 Feb 19
modified: 2024 Feb 21
---

# Financial Instruments Data

## About the Project

This project features a custom-built data table designed to showcase financial instruments data, developed with React.

## Live Application URL

This project is deployed on AWS Cloud using Github Actions.
You can check the demo [here](https://d2d3cbc33jslad.cloudfront.net/)

## Application Screenshots

-   **Sort By Asset Class**
    [![Sort by Asset Class](https://github.com/desaijay315/financial-instruments/blob/main/screenshots/sort_by_assetclass.png?raw=true)](#features)

-   **Sort By Price**
    [![Sort by Price](https://github.com/desaijay315/financial-instruments/blob/main/screenshots/sort_by_price.png?raw=true)](#features)

-   **Sort By Ticker**
    [![Sort by Ticker](https://github.com/desaijay315/financial-instruments/blob/main/screenshots/sort_by_ticker.png?raw=true)](#features)

-   **Code Coverage**
    [![Code Coverage](https://github.com/desaijay315/financial-instruments/blob/main/screenshots/test_coverage_from_github_ci-cd.png?raw=true)](#features)

## Prerequisites

### Install Node JS

Refer to https://nodejs.org/en/ to install nodejs (v >= 18)

### Install Yarn

Refer to https://yarnpkg.com/ to install yarn (v = 1.22.21)

## Cloning and Running the Application in local

### Run the commands mentioned below

1. Clone the repository

```sh
git clone https://github.com/desaijay315/financial-instruments.git
```

2. Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```sh
yarn install
```

3. In order to run the application Type the following command

```sh
yarn dev
```

### Simulate Production Environment locally

1. Create the build

```sh
yarn run build
```

2. To start the local server, use

```sh
yarn serve
```

Visit http://localhost:3000 in your browser to view the project.

## Technologies Used

-   React 17
-   Webpack
-   Babel
-   TypeScript
-   Jest
-   ESLint
-   Prettier
-   Husky
