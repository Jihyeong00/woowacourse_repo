class ChristmasError extends Error {
  constructor(message) {
    super(message);
    this.message = `[ERROR] ${message}`;
  }
}

export default ChristmasError;
