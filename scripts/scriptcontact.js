// JavaScript Document
window.onload=function(){
    const form = document.getElementById('form01');
    form.addEventListener('submit', greetingText);
    
    const text2 = document.getElementById('greeting');
    const clientName = document.getElementById('cname');
    const mydiv = document.getElementById('welcome');
    const myvideo = document.getElementById('homepage-hero-module');

    // const yourage = document.getElementById('age');

    console.log(clientName.value);
    
    function greetingText(e){
        e.preventDefault();

        mydiv.style.display="block";
        myvideo.style.display="none";

        const fname = clientName.value;

        console.log('first name is',fname);
        const date = new Date();

        switch (new Date().getDay()) {
            case 0:
                day = "Sunday";
                break;
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
        }

        console.log("today is:",day);
        const hours = date.getHours(); 

        var mygreetingtime;

            if(hours < 12){
                mygreetingtime = 'Morning';  
            }else if(12 <= hours < 18){
                mygreetingtime = 'Afternoon';
            }else{
                mygreetingtime = 'Evening';
            };
        
        const name = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase();
        // alert("Thank you "+name+" for sign up.");

        text2.innerHTML = `Good ${mygreetingtime} ${name}, Today is ${day}.
                            Thanks for sign-up. Our customer service manager
                            will be conect with you very soon.`;        
           }           
}








