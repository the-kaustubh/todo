const chai = require('chai')
const app = require('../src/index')
const chaiHttp = require('chai-http')

chai.use(chaiHttp)

const { expect } = chai

const mockUser = {
  username: 'kaustubhm',
  name: 'Kaustubh Murumkar',
  email: 'kau.m1999@gmail.com',
  password: 'abcd',
  mobile: '+915551234555',
  verified: false,
  displayPicture: 'http://localhost/img',
}

let accessToken = ''

describe('Login user', () => {
  describe("POST /auth/login", () => {
    it('Should not login for non-existent username', done => {
      chai
        .request(app)
        .post('/auth/login')
        .send({
          username: 'no-uer-like-me-ever',
          password: 'doesnt matter'
        })
        .end((err, res) => {
          if (err) done(err)
          expect(res).to.have.status(401)
          expect(res.body).to.be.an('object')
          expect(res.body).to.have.property('message')
          done()
        })
    })
  })
})
describe('Register user', () => {
  describe("POST /auth/register", () => {
    it('Should register with clean and valid data', done => {
      chai
      .request(app)
        .post('/auth/register')
        .send(mockUser)
        .end((err, res) => {
          if (err) done(err)
          expect(res).to.have.status(201)
          expect(res.body).to.be.an('object')
          expect(res.body).to.have.property('accessToken')
          accessToken = res.body.accessToken
          done()
        })
    })
  })
  describe('POST /auth/login', () => {
    it('Should not login with wrong credentials', done => {
      chai
        .request(app)
        .post('/auth/login')
        .send({
          username: mockUser.username,
          password: 'wrong password'
        })
        .end((err, res) => {
          if (err) done(err)
          expect(res).to.have.status(401)
          expect(res.body).to.be.an('object')
          expect(res.body).to.have.property('message')
          done()
        })
    })
    it('Should login with right credentials', done => {
      chai
        .request(app)
        .post('/auth/login')
        .send({
          username: mockUser.username,
          password: mockUser.password
        })
        .end((err, res) => {
          if (err) done(err)
          expect(res).to.have.status(200)
          expect(res.body).to.be.an('object')
          expect(res.body).to.have.property('accessToken')
          expect(res.body.accessToken).to.equal(accessToken)
          done()
        })
    })

  })
})
