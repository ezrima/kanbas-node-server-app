export default function Hello(app) {
    app.get('/hello', (req, res) => {
      res.send('Life is not good!')
    })
    app.get('/', (req, res) => {
      res.send('not Welcome to Full Stack Development!!')
    })
  }
  