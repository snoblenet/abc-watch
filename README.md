# ABC Test Automation Analyst tech challenge
A series of tests designed to confirm whether the ABC Online and ABC Radio websites are behaving as expected.

This will allow the ABC to migrate these sites to a new content management system with confidence.
## Getting started
### Prerequisites
Ensure you have installed Node and NPM:

https://docs.npmjs.com/getting-started/installing-node

### Installation
From the directory where you wish to install `abc-watch`, run:
```
git clone https://github.com/snoblenet/abc-watch.git
cd abc-watch
npm install
```

###Use
To run all tests, type `abc-watch` from the root level of the `abc-watch` directory.
## Future opportunities
### Testing the API for multiple ABC Radio programs
As per the tech challenge, `tests/abc_radio_website/json_api_test.js` checks the actual key/value pairs provided at  http://program.abcradio.net.au/api/v1/programs/ppJj0E8g2R.json.

To abstract this test so that it was applicable to multiple ABC Radio programs, it would be advisable to just check that the expected keys existed and the necessary keys have non-null values, rather than checking each key's actual value. (`hasOwnProperty` would help here.)

You could then wrap up the entire test as a custom assertion that takes just the test URL as its argument: http://nightwatchjs.org/guide#writing-custom-assertions.

Using Nightwatch to test the API would quickly stretch thin, however. So as soon as possible all API testing should be moved to a testing framework that is a better fit for the task, such as Mocha with Chai.

### Testing against multiple environments

To test against multiple environments, you'd extend `nightwatch.json` along these lines:

 ```
  "test_settings" : {
    "default" : {
      "launch_url" : "http://program.abcradio.net.au"
    },
    "test" : {
      "launch_url" : "http://test-program.abcradio.net.au"
    },
    "staging" : {
      "launch_url" : "http://staging-program.abcradio.net.au"
      }
```

The above example assumes that the ABC Radio and ABC Online websites each have their own `nightwatch.json` -- a reasonable expectation given the scale of each website.

## Author
Steven Noble // steven@snoble.net // http://snoble.net
