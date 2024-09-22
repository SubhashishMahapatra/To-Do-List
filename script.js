let input = document.getElementById('textbox')
let button = document.getElementById('btn')
let taskul = document.getElementById('tasks')
let comptaskul = document.getElementById('CompletedTasks')

let taskArray = []
let completedTask = []

button.addEventListener('click', () => {

    const inputContent = input.value
   
    if(inputContent === ''){
     alert("Input Cannot be Empty")
     return
    }

   if(taskArray.includes(inputContent)){
    alert("Already Exist")
    return
   }
  
    taskArray.push(inputContent)
    console.log(taskArray);
   
    
    let listItem = document.createElement('li')
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center'
    
    listItem.innerHTML = `
    <p>${taskArray[taskArray.length - 1]}</p>
    <button class="success btn-success" type=submit>Completed</button>
    <button class="error btn-danger" type=submit>Remove</button>
    <button class="cross" type=submit>Cut</button>
    `
    taskul.appendChild(listItem)
    listItem.classList.add = 'AddedTask'
    input.value = ""   
    

    
    tickButton = listItem.querySelector('.success')
    errorButton = listItem.querySelector('.error')
    cutButton = listItem.querySelector('.cross')
    
    
    //When Complete button is pressed
    tickButton.addEventListener('click', () => {
        console.log(listItem);
        // listInfo = document.querySelector('p')
        // console.log(listInfo);

        
        console.log(taskArray);
        
        completedTask.push(listItem)
        taskArray = taskArray.filter((task) => {
            task !== inputContent
        })
        console.log(completedTask);
        
        comptaskul.append(listItem)
        
        listItem.classList.add = 'completedTask'
        
        listItem.querySelector('.success').remove()
        console.log("Shifted to Completed Tasks");  
    })

    //when delete button is pressed
    errorButton.addEventListener('click', () =>{
        
        listItem.remove()

    })

    //when cross button is pressed
    cutButton.addEventListener('click', () => {

        let content = document.querySelector('p')
        content.className = 'cutContent'
    })
})
