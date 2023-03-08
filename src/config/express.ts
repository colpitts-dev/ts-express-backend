import express, { Application } from 'express'
import { Server } from 'http'

interface IAppInit {
  port: number
}

class ExpressApp {
  public app: Application
  public port: number

  constructor(appInit: IAppInit) {
    this.app = express()
    this.port = appInit.port
  }

  listen(): Server {
    return this.app.listen(this.port, () => {
      console.log(`🚀 [express]: Web server listening on ${this.port}`)
    })
  }
}

export default ExpressApp
