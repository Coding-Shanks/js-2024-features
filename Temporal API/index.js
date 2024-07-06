
// index.js
const { Temporal } = require('@js-temporal/polyfill');

const now = Temporal.Now.plainDateTimeISO();
console.log(now.toString()); // Output: Current date and time in ISO format
