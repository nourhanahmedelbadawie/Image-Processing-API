import supertest from 'supertest'
import app from '../../index'
import { resizeImage } from '../../utilizes/resize'
import path from 'path'

const request = supertest(app)

describe('shape image', () => {

  it('Resized function work', async () => {
    resizeImage(
      'fjord',
      path.resolve('./') + `/images/fjord.jpg`,
      100,
      100
    )
  })
})
