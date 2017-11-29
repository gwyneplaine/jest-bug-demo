# Description
This is a simple test to illustrate the bug identified in versions of jest >= 21.0.0.

Simply run `yarn install` and then `jest`.
You will notice that our test fails with a custom resolver specified in our package.json.

Removing this reference in our package.json and then running `jest`, you will notice that the tests now pass.

Additionally, downgrading to jest@20.0.4 (the previous version of jest), and running `jest` with a custom resolver, you will notice that the tests still pass.  
