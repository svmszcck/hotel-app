# Hotel App

**Installation & Running:**

- yarn or npm i
- yarn start or npm start

<br />

**Used Technologies:**

- React & React Native & Expo
- Context API
- Typescript for static type checking
- React Navigation
- Jest & React Testing Library

<br />

# Architecture

I have separated services & constants & config variables as separate files.

# Details

I tried to follow DRY, SOLID principles.

Common(shared) types are in the "global-types.ts" file. Component specific types are directly in the component files.

In order to run all of the tests please do "yarn test". You need to install jest on your local machine.

If you want to run a single test, you can do this: "jest filename.test.js".

<br>

# Pros & Cons

**Pros:**

- I tried to use clean code as much as possible.

- I have used context api instead of state management libraries as this is a small project.

- I have separated the business logic from the UI part.

- I have implemented custom hooks. You can check the "src/hooks" folder :)

- I tried to use as much resuable components as possible. You can check the reusable components in "src/components" folder.

- I have used ES6+ syntax(For example I have preferred async & await instead of promises).

**Cons:**

- Not E2E testing as there wasn't enough time to work on that.

- Not %100 code coverage regarding Unit Testing. However you can check how I am testing the components by checking the implemented tests.

- No feature branchs, regular commits. Normally I should have used feature branchs for the separate features and pushed those changes regularly.

**Anyway, if I had more time I could solve these issues but it's also important to be aware of these right? =)**
