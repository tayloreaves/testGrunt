myApp.module1 = {
  saySomething(message) {
    console.log(myApp.mainMessage, message, "I'm the second file");
  },

  doSomething() {
    console.log('called module1 doSomething funtion');
  }
}
