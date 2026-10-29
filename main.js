let contactForm = document.querySelector('.content-form');
let email = document.getElementById('email');
let name = document.getElementById('name');
let massage = document.getElementById('massage');
let formMassage = document.getElementById('formMassage');
let exploreButton = document.getElementById('button');
let learnMore = document.getElementById('link');

contactForm.addEventListener("submit", function(event){
    event.preventDefault();
    if(name.value===''){
        formMassage.textContent="please enter your name";
        formMassage.style.color="red";
    }
    else if(email.value===''){
        formMassage.textContent="please enter your email";
        formMassage.style.color="red";
    }
    else if(massage.value===''){
        formMassage.textContent="please enter your massage";
        formMassage.style.color="red";
    }else{
        formMassage.textContent= "All massages has been sent succesfully!";
        contactForm.reset();
        formMassage.style.color="green";
    }
    name.addEventListener("input" ,function(){
        formMassage.textContent="";
    });
    email.addEventListener("input" ,function(){
        formMassage.textContent="";
    });
    massage.addEventListener("input" ,function(){
        formMassage.textContent="";
    });
    
});
exploreButton.onclick = function(){
    document.getElementById('services').scrollIntoView({
        behavior:"smooth"
    });
};
learnMore.onclick =function(event){
    event.preventDefault();
    document.getElementById('projects').scrollIntoView({
        behavior:"smooth"
    });
};