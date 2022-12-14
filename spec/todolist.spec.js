const {
  create,
  resetTodolist,
  getAll,
  setComplete
  
} = require('../src/todolist.js')

describe('TodoList', () => {
  beforeEach(() => {
    resetTodolist()
  })

  it('creates a todo item', () => {
    const item = create('do homework')

    expect(item).toEqual({
      id: 1,
      description: 'do homework',
      status: 'incomplete'
    })
  })

  it('should create multiple todos', () => {
    create('do homework')
    const item2 = create('sleep well')

    expect(item2).toEqual({
      id: 2,
      description: 'sleep well',
      status: 'incomplete'
    })
  })

  it('should get all todos', () => {
    create('do homework')
    create('sleep well')

    const todos = getAll()

    expect(todos).toEqual([
      {
        id: 1,
        description: 'do homework',
        status: 'incomplete'
      },
      {
        id: 2,
        description: 'sleep well',
        status: 'incomplete'
      }
    ])
  })
})
