const sharp = require('sharp')
const fs = require('fs')
import path from 'path'

export const resizeImage = (
  name: string,
  image: string,
  width: number | undefined,
  height: number | undefined
): object | any => {
  const readStream = fs.createReadStream(image)
  let transform = sharp()

  if (width || height) {
    transform = transform.resize(width, height)
  }
  sharp(image)
    .resize(width, height)
    .toFile(
      path.resolve('./') +
        `/images/resizedImage/${name}_${width}_${height}.jpg`,
      function (err: Error) {
        console.log(err)
      }
    )
  return readStream.pipe(transform)
}
