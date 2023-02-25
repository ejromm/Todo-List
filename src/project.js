class Project {
    constructor(name) {
        this.name = name; 
        this.todos = []; 
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(todoId) {
        this.todos = this.todos.filter((todo) => this.todos.indexOf(todo) !== todoId); 
    }
}

export { Project } ; 