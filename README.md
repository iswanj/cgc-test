### Setup Project

1.  Run `yarn` inside project folder
2.  Run `yarn start` to run RN development server
3.  Run `cd ios && pod install`
4.  Run `yarn ios` to run RN app on IOS Emulator
5.  For run unit test `yarn test`

What not includes,

- The user should be able to edit the title of the photo. Since I've used swr for handle data fetching and manage server state, it is bit hard to update local state. because library has a feature call background fetching and it will replace updated state with the new server value.
- for test I've added only snapshot test for 3 screen. will add a PR later on this weekend
