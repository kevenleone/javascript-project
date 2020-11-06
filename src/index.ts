import server from './server'

server.listen(3333, (): void => {
  console.log('Server is running at 3333')
})
