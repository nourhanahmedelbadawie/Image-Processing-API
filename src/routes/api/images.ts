import express, { Router } from 'express'
import path from 'path'
import { checkForImageExist } from '../../utilizes/utitlize'
import { resizeImage } from '../../utilizes/resize'

const images_path = Router()

let allImages: string[] = ['fjord', 'fjord']

images_path.get('/', (req: express.Request, res: express.Response) => {
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
  if (!req.query.name || !req.query.width || !req.query.height) {
    return res
      .status(400)
      .send('Please provide all specifications [ name , width , height]')
  }
  if (
    !/^[a-zA-Z]+$/.test(req.query.name) ||
    !/^\d+$/.test(req.query.width) ||
    !/^\d+$/.test(req.query.height)
  )
    return res
      .status(404)
      .send('Please provide name as string and width , height as numbers')
  if (parseInt(req.query.width) <= 0 || parseInt(req.query.height) <= 0)
    return res.status(404).send(' width , height as must be > 0')
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
