import supertest from 'supertest'
import app from '../../index'

const request = supertest(app)

describe('shape image', () => {
  it('Resized Work', async () => {
    await request.get('/images?name=1?width=100&height=100').expect(200)
  })
})
