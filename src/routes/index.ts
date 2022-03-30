import express , { Router } from 'express'
import images_path from './api/images'

const routes = Router()

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send('working')
})
routes.use('/images', images_path)

export default routes
