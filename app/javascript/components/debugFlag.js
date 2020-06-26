// Global flag to tell reducers to use debug states, this is for testing locally
// Keep the ternary as eventually you'll want to test without debug flag even
// locally, so can just flip the last value to false as well!
export default process.env.NODE_ENV == "production" ? false : true;
