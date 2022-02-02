document.querySelector('.toggle').addEventListener('click', function(){
   document.querySelector('.nav-toggle').style.display = "block";
   document.querySelector('.toggle').style.display = 'none';
   document.querySelector('.remove').style.display = 'block';
});



document.querySelector('.remove').addEventListener('click', function(){
    document.querySelector('.nav-toggle').style.display = "none";
    document.querySelector('.toggle').style.display = 'block';
    document.querySelector('.remove').style.display = 'none';
 });


 document.getElementById('contact').addEventListener('click', () =>{
     alert("0690409837")
 })

 document.getElementById('local').addEventListener('click', () =>{
    alert("07 Hay Bassatin Bouznika au Maroc")
})