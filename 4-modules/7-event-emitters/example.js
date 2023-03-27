const EventEmitter = require('events');

// Streams are Event Emitters
// process.stdin, process.stdout

const myEmitter = new EventEmitter();

myEmitter.emit('TEST_EVENT');
myEmitter.on('TEST_EVENT', () => {
  console.log("Test event was fired")
});

//on will will report every time the event happens, think about it as a subscription lisnetener to an event and
