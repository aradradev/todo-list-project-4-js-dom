const addTask = document.getElementById('add-task')
const taskContainer = document.querySelector('.task-container')
const taskInput = document.getElementById('task-input')

addTask.addEventListener('click', function(){
    let task = document.createElement('div')
    task.classList.add('task')

    let li = document.createElement('li')
    li.innerText = `${taskInput.value}`

    task.appendChild(li)

    let checkBtn = document.createElement('button')
    checkBtn.innerHTML = `<i class="ri-check-line"></i>`
    checkBtn.classList.add('check-btn')
    task.appendChild(checkBtn)
    
    let deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = `<i class="ri-delete-bin-line"></i>`
    deleteBtn.classList.add('delete-btn')
    task.appendChild(deleteBtn)

    if (taskInput.value === ""){
        alert("Please Enter a Task")
    } else{
        taskContainer.appendChild(task)
        
    }

    taskInput.value = ""

    

    checkBtn.addEventListener('click', function(){
        checkBtn.parentElement.style.textDecoration = "line-through"
    })
    
    deleteBtn.addEventListener('click', function(){
        deleteBtn.parentElement.remove()
    })

})