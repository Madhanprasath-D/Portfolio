const toggle_btn=document.querySelector('.handburger');
const list_item=document.querySelector('.list');

const say_hi=document.querySelector('.hi');
const mess_screen=document.querySelector('.msgcontiner');
const close=document.querySelector('.close_btn');

toggle_btn.addEventListener('click',()=>{
    list_item.classList.toggle('slide');
});

say_hi.addEventListener('click',()=>{
   mess_screen.classList.add('visible');
   list_item.classList.remove('slide');
});

close.addEventListener('click',()=>{
    mess_screen.classList.remove('visible');
});

const sent_btn=document.querySelector('.sent');
function sentmail(){
    var detials={
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        message:document.getElementById('mes').value,
        }
        const serviceid="service_tyfsg9r";
        const templateid="template_g2wncrm";
    
    emailjs.send(serviceid,templateid,detials)
    .then((res)=>{
        document.getElementById("name").value="";
        document.getElementById('email').value="";
        document.getElementById('mes').value="";
        mess_screen.classList.remove('visible');
        alert("Your message sent sucessfully!");    
    })
    .catch(err=>console.log("Message not Sended plese try again"));
    
}

const show_more=document.querySelector('#showmore_btn');
show_more.addEventListener('click',()=>{
    alert("this page can't uploded right now");
})
