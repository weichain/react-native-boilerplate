# React Native Boilerplate

## Introduction

This React Native boilerplate project serves as a solid foundation for kickstarting new projects at our company. It's built with a specific set of technologies and principles to enhance development efficiency and maintainability.

## Key Technologies

### 1. Zustand for State Management

We leverage [Zustand](https://github.com/pmndrs/zustand) for managing the application's state. It offers a simple and efficient way to handle state within your components.

### 2. React-Query for API Communication and Caching

[React-Query](https://tanstack.com/query/v3/docs/react/overview) is our go-to tool for interacting with APIs, caching, and handling server state. It simplifies data fetching and caching, making our apps responsive and performant. Also eliminates the need to bloat our client state.

### 3. Expo for Rapid Development

Expo is an invaluable tool for speeding up the development process and for a while now has been a no-brainer when starting a new react-native application. It provides a world-class deployment process and wide range of pre-built features, allowing us to focus on business logic. We will be leveraging [expo-router](https://docs.expo.dev/routing/introduction/) so please get familiar with it before starting to work on a project. It's similar to how nextjs projects are structured.

### 4. Tamagui for UI

[Tamagui](https://tamagui.dev/) is our choice for UI components. It's designed both for React Native and Web, offering a consistent and visually appealing UI for your applications. It supports utility props, theming, "styled" components, offers great UI composability/extensibility and thanks to its compiler - is super fast!

## Getting Started

To get started with this boilerplate, follow these steps:

1.  Clone this repository.
2.  Install the required dependencies using `bun install`.
3.  Start the development server with `bun start`.

## Project Structure

Our project structure is designed for scalability and maintainability. Here's a brief overview:

- `app/` contains your application's source code. Everything that goes here is tied directly to expo-router and how screens both on native and web will be rendered/navigated to
- `components/` for reusable UI components.
- `assets/` for fonts and media files. Keep in mind that for simple icons we should **always** check in the lucide library before bloating the assets folder with unoptimized and unnecessary images.
- `context/` for store related logic. Our Zustand stores should go here.
- `constants/` for constant declarations and enums. Follow the **SCREAMING_SNAKE_CASE** convention
- `services/` for API services. Create a new **.service.ts\* file for each service and follow the sample service (**user.service.ts\*\*)
- `hooks/` for custom hooks.
- `utils/` for utility functions.

## How to Use

Refer to the code samples and documentation within the project to understand how to use the selected technologies effectively. We aim to provide clean and well-documented code for easy onboarding.

## This is a work-in-progress

It will be periodically updated with more samples and improved structure. Also if there is a new major version of a dependency (e.g. Expo/Reanimated) - the repo will be updated accordingly.

## Feedback and Contributions

We encourage team members to provide feedback and suggest improvements to this boilerplate. Feel free to submit issues and pull requests to make our development process even better.

Happy Coding!
