import ExpressApp from './config/express'

// Start app server
const app = new ExpressApp({
  port: 3333,
})
const server = app.listen()

// Handle app termination
process.on('SIGTERM', () => {
  server.close(() => {
    console.log('⭐ Web server closed.')
    // server has stopped accepting connections
    // exit the process with exit status 0
    process.exit(0)
  })
})
