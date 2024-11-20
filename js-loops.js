/*

let Name ="Deneesan";
for(let  i=0; i<=Name.length; i++){
    console.log(Name.charAt(i));
}
       */

function UserName(mail){
    return mail.slice(0,mail.indexOf("@"));
}

let Email="Sountharaja Deneesan@gmail.com";
console.log(UserName(Email));


function User(name){
    return name.charAt(0).toUpperCase() + name.slice(1,name.length).toLowerCase();
}

let Name=" eneesan";
console.log(User(Name));


 let Usernum= function(num1,num2) {
    if(num2===undefined){
        return num1;
    }
    console.log(num1);
    console.log(num2);
    return num1+num2;
}
console.log(Usernum(3,48));