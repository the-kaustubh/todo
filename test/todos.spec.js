const chai = require('chai')
const app = require('../src/index')

const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const { expect } = chai

const mockTodo = {
}

describe('Get All My Todos', () => {
  describe('GET /todos/all', () => {
    it('Should fetch all of users todos', done => {
    })
  })
})

describe('Get todo by deadline', () => {
  describe('', () => {
    it('Should get today\'s todos', done => {
    })
  })
  describe('', () => {
    it('Should get week\'s todos', done => {
    })
  })
  describe('', () => {
    it('Should get month\'s todos', done => {
    })
  })
})

describe('Add new todo', () => {
  describe('', () => {
    it('Should add new todo', done => {
    })
  })
})

describe('Mark as Done and Undone', () => {
  describe('Should mark todo as done', () => {
    it('', done => {
    })
  })
  describe('Should mark todo as undone', () => {
    it('', done => {
    })
  })
})

describe('Update Todo', () => {
  describe('Should be able to make changes to existing todo', () => {
    it('', done => {
    })
  })
  describe('Add link to Todo', () => {
    it('', done => {
    })
  })
})

describe('Delete Todo', () => {
  describe('Should delete todo', () => {
    it('', done => {
    })
  })
  describe('Previous todo should not exist', () => {
    it('', done => {
    })
  })
})

