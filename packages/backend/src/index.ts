import server from './server'

const PORT = process.env.HTTP_PORT || 3333

server.listen(PORT, (): void => {
  console.log(`Server is running at ${PORT}`)
})
