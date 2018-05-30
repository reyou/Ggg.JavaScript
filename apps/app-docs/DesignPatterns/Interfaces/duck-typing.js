var Interface = function (title, props) {

}
Interface.ensureImplements = function () {
    console.log("Interface.ensureImplements");
}
var TodoList = new Interface('Composite', ['add', 'remove']);
var TodoItem = new Interface('TodoItem', ['save']);

// TodoList class
var myTodoList = function (id, method, action) {
    // implements TodoList, TodoItem
    // ...
};

function addTodo(todoInstance) {
    Interface.ensureImplements(todoInstance, TodoList, TodoItem);
    // This function will throw an error if a required method is not implemented,
    // halting execution of the function.
    //...
}