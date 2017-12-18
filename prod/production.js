var myApp = {
  mainMessage : "welcome to the app, it is cool!",

  mainGreeting() {
    console.log('hello! welcome to my app!');
  }
}

myApp.module1 = {
  saySomething(message) {
    console.log(myApp.mainMessage, message, "I'm the second file");
  },

  doSomething() {
    console.log('called module1 doSomething funtion');
  }
}

myApp.module2 = {
  doSomething() {
    console.log('called module1 doSomething funtion');
  }
}

(() => {
  myApp.mainGreeting();

  myApp.module1.saySomething('sup');

  function myFunc() {
    var theHeading = document.querySelector('h1');

    theHeading.textContent = myApp.mainMessage;
  }

  myFunc();

});
