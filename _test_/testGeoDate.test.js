

// Import the js file to test
import {generateData} from "../src/client/js/app.js"


// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe("Testing the submit functionality", () => {
   
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test('the data is sting', () => {
        let data = "Cairo"; 
        return generateData().then(data => {
          expect(data).toBe("Egypt");
        });
      });
});