let todoList = [
   {  
      item : 'Buy Milk',
      dueDate : '2023-10-12'
   },
   {  
      item : 'Go to College',
      dueDate : '2023-10-13'
   }
];
displayItems();

function addTodo(){
   let inputElement = document.querySelector('#todo-input');
   let todoItem = inputElement.value ;

   let dateElement = document.querySelector('#todo-date');
   let todoDate =dateElement.value;

   todoList.push({item:todoItem,dueDate:todoDate});

   inputElement.value ='';
   dateElement.value='';

   displayItems();
}

function displayItems(){
   let containerElement = document.querySelector('.todo-container');
   let newHtml ='';

   for(let i =0 ; i<todoList.length; i++){
      // let item = todoList[i].item;
      // let dueDate = todoList[i].dueDate;
      let {item,dueDate}= todoList[i];

      newHtml += `
          <span>${item}</span>
         <span>${dueDate}</span>
         <button onclick ="todoList.splice(${i},1);displayItems()" class="btn-delete">Delete</button>
          `;
   }
   containerElement.innerHTML= newHtml;
}