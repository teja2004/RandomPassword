// parseInt(Math.random().toString().slice(2,10)) - for 8 digit numeric password.
// parseInt(Math.random().toString().slice(2,14)) - for 12 digit numeric password.
// Math.random().toString(36).slice(2,14) - for 12 char alphanumeric password.
console.log("Scipt Started");

let show_8n = document.querySelector("#get-8n");

let show_12n = document.querySelector("#get-12n");

let show_12an = document.querySelector("#get-12an");

let copy_8n = document.querySelector("#path-8n");

let copy_12n = document.querySelector("#path-12n");

let copy_12an = document.querySelector("#path-12an");

function generate_password(type){
    if (type === 'num-8'){
        let password = parseInt(Math.random().toString().slice(2,10));
        show_8n.textContent = password;
    }
    else if(type === 'num-12'){
        let password = parseInt(Math.random().toString().slice(2,14));
        show_12n.textContent = password;    
    }
    else if(type === 'alnum-12'){
        let password = Math.random().toString(36).slice(2,12) + Math.random().toString(36).slice(2,4);
        show_12an.textContent = password;
    }
}

function copy(to){
    if (to === 'num-8' && show_8n.textContent !== '********'){
        navigator.clipboard.writeText(show_8n.textContent);
        copy_8n.style.visibility = 'visible';
        setTimeout(()=>{
            copy_8n.style.visibility = 'hidden';
        },2000)
    }
    else if(to === 'num-12' && show_12n.textContent !== '************'){
        navigator.clipboard.writeText(show_12n.textContent);
        copy_12n.style.visibility = 'visible';
        setTimeout(()=>{
            copy_12n.style.visibility = 'hidden';
        },2000)
    }
    else if(to === 'alnum-12' && show_12an.textContent !== '************'){
        navigator.clipboard.writeText(show_12an.textContent);
        copy_12an.style.visibility = 'visible';
        setTimeout(()=>{
            copy_12an.style.visibility = 'hidden';
        },2000)
    }
}