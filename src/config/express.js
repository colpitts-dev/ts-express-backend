import express from "express";

class ExpressApp {
  app;
  port;

  constructor(appInit) {
    this.app = express();
    this.port = appInit.port;
  }

  listen() {
    return this.app.listen(this.port, () => {
      console.log(`🚀 [express]: Web server listening on ${this.port}`);
    });
  }
}

export default ExpressApp;
