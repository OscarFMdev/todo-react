import React from 'react'
import TodoItem from './TodoItem';

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChange={this.props.handleChange}
            delTodo={this.props.delTodo}
          />
        ))}
      </ul>
    )
  }
}
export default TodosList;