import { Router } from 'express'
import images_path from './api/images'

const routes = Router()

routes.get('/', (req: any, res: any): void => {
  res.send('working')
})
routes.use('/images', images_path)

export default routes
