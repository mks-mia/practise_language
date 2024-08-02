window.onload = function(){
    const name = localStorage.getItem('name');
    if(name){
      document.getElementById('welcome-txt').innerHTML = `Welcome ${name}, Do Your Best ^_^`;
    }
}

function changebutton(){
    const button = document.getElementById('action-button');
    if (button.textContent === 'Start'){
        getsentence();
        button.textContent = 'Next';
    }
    else{
        getsentence();
    }
}

const url = "https://api.quotable.io/random";
let getsentence =()=>{
    fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            document.getElementById('sentence').textContent = data.content;
        })
        .catch((error)=>{
            console.error('Error!!!',error);
        })
}