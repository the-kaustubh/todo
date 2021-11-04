const chai = require('chai')
const app = require('../src/index')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

const { expect, before } = chai

const mockUser = {
  username: 'kaustubhm',
  name: 'Kaustubh Murumkar',
  email: 'kau.m1999@gmail.com',
  password: 'abcd',
  mobile: '+915551234555',
  verified: false,
  displayPicture: 'http://localhost/img',
}

describe('User Profile', () => {
  let expectedProperties = [
    'username',
    'email',
    'preferredNotificationMode',
    'verified',
  ]

  describe('GET /users/profile', () => {
    it('Should show profile expect pwd', done => {
      chai
        .request(app)
        .get('/users/profile')
        .send()
        .end((err, res) => {
          if (err) done(err)
          expect(res).to.have.status(200)
          expect(res.body).to.not.have.property('password')
          for (let i = 0; i < expectedProperties.length; i++ ) {
            expect(res.body).to.have.property(expectedProperties[i])
          }
        })
    })
  })
})

describe('Update User', () => {
  describe('POST /users/update', () => {
    it('Should update user data', done => {
      done(1)
    })
  })
})

describe('Delete User', () => {
  describe('DELETE /users/delete', () => {
    it('', done => {
    })
  })
})
