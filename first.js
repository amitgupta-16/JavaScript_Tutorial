// keyword
// {
//     const a=5
//     console.log(a);
// }

// {
//     let a=10
//     console.log(a);
// }

// 7 primitive Data types

//  let fullname = "amit" string
// let age =20 number
// isfollow=true boolen
// let x undefined
// let x=null null
//let x=BigInt("123n") bigint
//let y=symbol("hello!")

// Non-primitive ex-object;

const student = {
    fullName: "Krishna Yadav",
    age: 20,
    cgpa:8.2,
    isPass:true,
};
student["age"]=student["age"]+2;
student["name"]= "Rahul Sharma";
console.log(student["name"])
console.log(student.age)
