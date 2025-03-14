//Global Object
//global object is an object that can be accessed from anywhere in the application or code without needing to import it.
console.log(global); 

//for a browser, the global object is the "window" object where we write window.alert() or window.console.log().
//for node.js, the global object is the "global" object where we write global.console.log() or global.setTimeout(). or simply the object name without global.
//global.setTimeout() is same as setTimeout() in node.js.

//setTimeout() is a function that is used to run a function after a certain amount of time. It is a global function in node.js.
//clearInterval() is a function that is used to stop the setInterval() function from running.
setTimeout(() => {
  console.log("Hello, World");
  clearInterval(int);
}, 3000);

//setInterval() is a function that is used to run a function repeatedly after a certain amount of time. It is a global function in node.js.
const int = setInterval(() => {
  console.log("This is Rajasekhar Reddy Kolagotla!!");
}, 1000);

//__dirname and __filename are two global variables in node.js that are used to get the directory name and file name of the current module.
console.log(__dirname);
console.log(__filename);