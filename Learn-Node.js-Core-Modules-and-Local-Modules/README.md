[Link to lesson](https://www.codecademy.com/paths/create-a-back-end-app-with-javascript/tracks/bapi-learn-express/modules/introduction-to-node-js/lessons/node/exercises/modules)

### Learn Node.js

**Core Modules and Local Modules**

Modularity is a software design technique where one program has distinct parts each providing a single piece of the overall functionality. These separate modules come together to build a cohesive whole. Modularity is essential for creating scalable programs which incorporate libraries and frameworks and separate the program’s concerns into manageable chunks. Essentially, a module is a collection of code located in a file. Instead of having an entire program located in a single file, code is organized into separate files and combined through requiring them where needed using the require() function.

To save developers from having to reinvent the wheel each time, Node has several modules included within the environment to efficiently perform common tasks. These are known as the core modules. The core modules are defined within Node.js’s source and are located in the lib/ folder. Core modules are required by passing a string with the name of the module into the require() function:
```
// Require in the 'events' core module:
let events = require('events');
```
We can use the same require() function to require modules of our own creation. To handle these different tasks, the require() function includes some interesting logic “under the hood.” The require() function will first check to see if its argument is a core module, if not, it will move on to different attempts to locate it. Check out the Node Modules documentation to learn more about how require() works.

Let’s walk through the process of requiring a local module:
```
// dog.js
module.exports = class Dog {

  constructor(name) {
    this.name = name;
  }

  praise() {
    return `Good dog, ${this.name}!`;
  }
};
```
Above, in the dog.js file, we assign the Dog class as the value of module.exports. Each JavaScript file in the Node environment has a special JavaScript object called module.exports. It holds everything in that file, or module, that’s available to be required into a different file.
```
// app.js
let Dog = require('./dog.js');
const tadpole = new Dog('Tadpole');
console.log(tadpole.praise());
```
In our app.js file we assign the variable Dog to the module.exports object of our dog.js file by invoking the require() function. Unlike when we require core modules which are required in with the name of the module as a string, local modules are required by passing in the path to the module. The require() function has some other quirks, like assuming file extensions if none are provided; this means we could have written let Dog = require('./dog'); in place of let Dog = require('./dog.js'); in the code above, and the require() function would have still correctly located and required in dog.js.


### Instructions

Checkpoint 1 Passed
1. We wrote a program where a Dog can fight a Cat, but it doesn’t work yet because we haven’t properly connected our code. We created two modules: cat.js, which contains our Cat class, and dog.js, which contains our Dog class. But we need to assign these modules to their module.exports. Let’s start with cat.js. Inside cat.js assign the Cat class as the value of module.exports.

There are a couple ways to do this. For example, your cat.js file could look like this:
```
module.exports = class Cat {
  constructor(name, clawStrength) {
    this.name = name;
    this.clawStrength = clawStrength;
  }
};
```
Checkpoint 2 Passed
2. We’ll also need to export our Dog class. Navigate to dog.js and assign the Dog class as the value of module.exports.

There are a couple ways to do this. For example, your dog.js file could look like this:
```
module.exports = class Dog {
  constructor(name, toothStrength) {
    this.name = name;
    this.toothStrength = toothStrength;
  }
};
```
Checkpoint 3 Passed
3. Great! Now our Dog and Cat classes are being exported, but we still need to require them into app.js for our function to work properly. At the top of the app.js file, create a variable Dog and assign as its value invoking the require() function with the relative path of the dog.js file. Next, create a Cat variable and assign as its value invoking the require() function with the relative path of the cat.js file.

The top of your app.js file should have these two lines:
```
let Cat = require('./cat.js');
let Dog = require('./dog.js');
```
Checkpoint 4 Passed
4. Let’s see this program in action! Use the node command to run app.js from the terminal.
