//Instantiate variables and constant
let name= "Carylle Bayle";
let Address="Salvador 2nd";
let age="19";
let classRole="Student";
const course="BSCS";
//Condition statement to detect the course
if (course ==="BSCS"){
//BSCS course logic
if (classRole==="Student"){
    let password= prompt("Enter password:");
if (password.length>=12 && password.includes(course)){
//print name and address multiple times using age as counter
for (let i=0; i < age; i++){
    console.log('Name: ${name}');
    console.log('Address: $ {Address}');
}

}else{
    console.log("Invalid password. Please Try again.");
}

}else{
    console.log("Default: You are not a student.");
}   

}else if (course === "BSM"){
//BSM course logic
if(classRole === "Teacher"){
    console.log("Teacher role logic goes here.");
}else{
    console.log("Default: You are not a teacher");
}

}else if (course === "BAEL"){
//BAEL course logic
if(classRole === "Officer"){
    console.log("Officer role logic goes here.");
}else {
    console.log("Default: You are not an Officer.");
}
}else{
    console.log("Invalid course. Please try again.")
}