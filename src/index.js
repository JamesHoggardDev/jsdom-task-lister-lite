document.addEventListener("DOMContentLoaded", () => {
  // your code here

    let createForm = document.querySelector('#create-task-form')

    createForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (event.target){
          
          let formUl = document.querySelector("#tasks")
          let formLi = document.createElement('li')
            formLi.textContent = createForm['new-task-description'].value

            formLi.addEventListener('click', event =>{
                formLi.remove()
            });

            formUl.append(formLi)

        } 
    });

let colorForm = document.querySelector("#priority-color")
colorForm.addEventListener('submit', event => {
    event.preventDefault();
    if (event.target){
        let list = document.querySelectorAll('li')
          list.forEach(listItem => {
            listItem.style.color = event.target.color.value
          })
       
    }
    event.target.reset();
})

function sortArr(){
  let listArr = []
  let list = document.querySelectorAll('li')
  listArr.push(list)
  listArr.sort()
  
  console.log(list)
}

sortArr()
          




});