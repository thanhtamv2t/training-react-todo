import React from "react";
import Input from "../../components/Input";
import TodoList from "../../components/TodoList";

class App extends React.PureComponent {
  constructor() {
    super();

    this.state = {
        work: '',
      listTodo: [
          {
              id:1,
              work: '124214214'
          },
          {
              id:2,
              work: '23141245i21904210'
          }
      ],
      listComplete: [],

    };
  }

  

  onCompleteWork = (id) => {
    const { listTodo, listComplete } = this.state;
    
    const findTodo = listTodo.find((it) => it.id === id);

    listComplete.push(findTodo);

    const newListTodo = listTodo.filter((it) => it.id !== id)

    this.setState({ listComplete: [...listComplete], listTodo: newListTodo });
  };

  onNotDone = (id) => {
    const { listTodo, listComplete } = this.state;

    const findComplete = listComplete.find(it=> it.id === id)

    listTodo.push(findComplete)

    // Xoa ra khoi cai list complete

    const newListComplete = listComplete.slice().filter(it=> it.id !== id)

    this.setState({listTodo: [...listTodo], listComplete: newListComplete})
  };


  onRemoveItem = id => {
      const { listTodo, listComplete} = this.state;

      const newListTodo = listTodo.slice().filter(it=> it.id !== id)

      const newListComplete = listComplete.slice().filter(it=> it.id !== id)

      this.setState({listTodo: newListTodo,listComplete: newListComplete })
  }

  onChangeWork = event => {
      const { value } = event.target; //DOM OBJECT

      this.setState({work: value})
  }

  onCleanAll = () => {
    this.setState({listComplete: []})
  }

  onSubmitNewTodo = (event) => {
    event.preventDefault();
    
    const { work, listTodo } = this.state;

    // const listID = listTodo.map(it=> it.id)
    // const maxID = Math.max(...listID) 
        
    const newID = Math.random();

    const newTodoWork =  {
        id: newID,
        work // work: work
    }

    listTodo.push(newTodoWork)

    this.setState({listTodo: [...listTodo], work: ''})
    
  }

  cleanInput =() => {
      this.setState({work: ''})
  }

  render() {

    const { work } = this.state;

    return (
      <div className="container">
        <h1>Todo App</h1>
        <form onSubmit={this.onSubmitNewTodo}>
            <Input value={work} onChange={this.onChangeWork} placeholder="Enter todo work" />
            {work.length > 0 ? (
                <button onClick={this.cleanInput}>X</button>
            ) : null}
        </form>
        {/* List todo */}
        <TodoList
          onClickItem={this.onCompleteWork}
          onRemoveItem={this.onRemoveItem}
          title="Việc cần làm"
          list={this.state.listTodo}
        />
        {/* List complete */}
        <TodoList
          onClickItem={this.onNotDone}
          onRemoveItem={this.onRemoveItem}
          title="Việc đã hoàn thành"
          list={this.state.listComplete}
        />

        <button onClick={this.onCleanAll}>Clean ALL</button>
      </div>
    );
  }
}

export default App;
