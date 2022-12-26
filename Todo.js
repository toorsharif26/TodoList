const todoForm=document.querySelector(".form-todo");
const todoInput=document.querySelector(".form-todo input[type='text']");
const todoList=document.querySelector(".todo-list")
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newTodoText=todoInput.value;
    const newLi=document.createElement("li");
    const newLiInnerHtml=`<span class="text">${newTodoText}</span>
    <div class="todo-buttons">
        <button class="todo-btn done btn">Done</button>
        <button class="todo-btn remove btn">Remove</button>
    </div>`;
    newLi.innerHTML=newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value="";
})
todoList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("remove")){
        console.log("you want to remove something?");
        const targetedLi=e.target.parentNode.parentNode;
        targetedLi.remove();
    }
    if(e.target.classList.contains("done")){
        const LiSpan=e.target.parentNode.previousElementSibling;
        LiSpan.style.textDecoration="Line-through";
        console.log("Great!!!");
    }
});



// const body=document.body;
// body.addEventListener("keypress",(e)=>{
//     console.log(e.key);
// });





// const body=document.body;
// const mainButton=document.querySelector(".btn-headline")
// mainButton.addEventListener("mouseover",()=>{
//     console.log("mouse hover even occured");
// });
// mainButton.addEventListener("mouseleave",()=>{
//     console.log("mouseLeave");
// });