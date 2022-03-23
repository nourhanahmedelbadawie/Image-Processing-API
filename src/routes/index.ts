import { Router, Request, Response } from 'express'
import images_path from './api/images'

const routes = Router()

routes.get('/', (req: Request, res: Response) => {
  res.send('working')
})
routes.use('/images', images_path)

export default routes
