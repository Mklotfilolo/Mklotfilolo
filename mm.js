let me = function(){
  console.log("Hello , can i get your full name :");
  let resulte =prompt(" the name plese ");
  console.log('the name ${resulte} ${result}')
  document.write(" <h1> You are welcome :<font size ='20px' color ='rgb(200,5,6)'> "+ resulte +"</font> </h1>");
}

var user= function(){
  const inputnme= document.getElementById('texU');
  const inputnmeva= inputnme.value;

  const inputdateb= document.getElementById('birthU');
  const inputdatebva= inputdateb.value;

  const inputage= document.getElementById('ageU');
  const inputageva= inputage.value;
  
  const inputmajor= document.getElementById('majorU');
  const inputmajorva= inputmajor.value;

let infoUSER ={
  name:inputnmeva,
  deteB:inputdatebva,
  age:inputageva,
  majore:inputmajorva,
}
 console.log(infoUSER.name);
}