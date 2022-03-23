import { Router, Request, Response } from 'express'
import path from 'path'
import { checkForImageExist } from '../../utilizes/utitlize'
import { resizeImage } from '../../utilizes/resize'

const images_path = Router()

let allImages: string[] = ['1', '2']

images_path.get('/', (req: Request, res: Response) => {
  let imageName: string = req.query.name as string

  const imagePath = path.resolve('./') + `/images/${req.query.name}.jpg`
  const resizedImagePath =
    path.resolve('./') +
    `/images/resizedImage/${req.query.name}_${req.query.width}_${req.query.height}.jpg`

  const widthQuery = req.query.width as string
  const heightQuery = req.query.height as string

  if (req.query.name === undefined) {
    return res.status(400).send('image not exist')
  }
  if (allImages.includes(imageName) === false) {
    return res.status(404).send('not found')
  }
  if (!checkForImageExist(resizedImagePath)) {
    let width, height
    if (widthQuery) {
      width = parseInt(widthQuery)
    }
    if (heightQuery) {
      height = parseInt(heightQuery)
    }
    resizeImage(imageName, imagePath, width, height).pipe(res)
  } else {
    res.sendFile(resizedImagePath)
  }
})

export default images_path
