const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout

const myEmitter = new EventEmitter();

setImmediate(() => {
  myEmitter.emit('TEST_EVENT')
});


myEmitter.on('TEST_EVENT', () => {
  console.log("Test event was fired")
});
myEmitter.on('TEST_EVENT', () => {
  console.log("Test event was fired")
});
myEmitter.on('TEST_EVENT', () => {
  console.log("Test event was fired")
});

//Emit's job is to trigger named event(s) which in turn cause functions called listeners to be called.


//on will will report every time the event happens, think about it as a subscription lisnetener to an event and
