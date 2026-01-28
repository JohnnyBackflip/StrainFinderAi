# StrainBaseAi Project Analysis

## Overview

This document provides an analysis of the `StrainBaseAi` project, a full-stack application composed of an Angular frontend and a NestJS backend.

## Project Structure

The project is divided into two main directories:

-   `frontend/`: Contains the Angular client-side application.
-   `backend/`: Contains the NestJS server-side application.

A root `package.json` file is provided to run both applications concurrently.

## Frontend

The frontend is an Angular application using the `ng-matero` template, which is based on Angular Material.

-   **Framework:** Angular
-   **UI Library:** Angular Material (`ng-matero`)
-   **Package Manager:** Yarn is the preferred package manager.

### Key Files

-   `frontend/package.json`: Defines dependencies and scripts for the frontend application.
-   `frontend/angular.json`: Angular project configuration.
-   `frontend/src/`: Contains the source code of the application.

### Available Scripts

-   `yarn start`: Starts the development server.
-   `yarn test`: Runs unit tests.
-   `yarn build`: Builds the application for production.
-   `yarn lint`: Lints the codebase.

## Backend

The backend is a NestJS application.

-   **Framework:** NestJS
-   **Package Manager:** npm

### Key Files

-   `backend/package.json`: Defines dependencies and scripts for the backend application.
-   `backend/src/main.ts`: The application entry point.
-   `backend/src/app.module.ts`: The root module of the application.

### Available Scripts

-   `npm run start`: Starts the application.
-   `npm run start:dev`: Starts the application in watch mode.
-   `npm run test`: Runs unit tests.
-   `npm run build`: Builds the application.
-   `npm run lint`: Lints the codebase.

## How to Run the Project

To run the entire project (both frontend and backend), you can use the script in the root `package.json` file:

```bash
npm start
```

This will start both the Angular frontend and the NestJS backend concurrently.
