import supertest from 'supertest'
import app from '../../index'

const request = supertest(app)

describe('Testing Images endpoint', () => {
  it('Image name right', async () => {
    await request.get('/images?name=1').expect(200)
  })
  it('name of Images not exit', async () => {
    await request.get('/images').expect(400)
  })
})
