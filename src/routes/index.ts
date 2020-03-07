import express from 'express'

const router = express.Router()

router.get('/', (req: express.Request, res: express.Response) => {
  res
    .status(404)
    .type('text/plain')
    .send('404 Not Found')
})

export default router
