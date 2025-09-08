const logger = {
  log: (...args) => {
    const time = new Date().toISOString();
    console.info([${time}], ...args);
  }
};

export default logger;
