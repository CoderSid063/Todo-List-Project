const todoList = [{
   name :'wash dsihes',
   dueDate : '2022-12-22'}];

renderTodoList();

function renderTodoList(){
   let todoListHTML = '';

   //using .forEach()
   todoList.forEach( (todoObject,index) => {

      //const todoObject = todoList[i];
      const{name , dueDate} = todoObject;

      //automatic html element genearater
      const html = `
         <div>${name}</div>
         <div> ${dueDate}</div>
         <button class="delete-todo-button">Delete</button>
      `;
      todoListHTML += html;
   })

   /*for(let i =0; i< todoList.length; i++){
      const todoObject = todoList[i];

      // const name = todoObject.name;
      // const dueDate = todoObject.dueDate;

      const{name , dueDate} = todoObject;
      //automatic html element genearater
      const html = `
         <div>${name}</div>
         <div> ${dueDate}</div>
         <button onclick = "todoList.splice(${i},1);renderTodoList();" class="delete-todo-button">Delete</button>
      `;
      todoListHTML += html;
   }*/

   document.querySelector('.js-todo-list').innerHTML = todoListHTML;

   //function for delete button using EventListner insted of 'onclick'
   document.querySelectorAll('.delete-todo-button').forEach( (deleteButton,index) => {
      deleteButton.addEventListener('click', () => {
         todoList.splice(index, 1);renderTodoList()
      })
   })
};

//Function of 'Add' Button;
let buttonElement = document.querySelector('.add-todo-button');
buttonElement.addEventListener('click', () => {
   addTodo();
})

function addTodo(){
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value ;

   const dateInputElement = document.querySelector('.js-due-date-input');
   const dueDate = dateInputElement.value;

   todoList.push({
      // name : name,
      // dueDate :dueDate
      name,
      dueDate
   });

   inputElement.value ='';
   renderTodoList();
}