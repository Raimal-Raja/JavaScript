// Objects (array, functions )
// Object is collection of values 


const student = {
    fullName : "Raimal",
    age : " 20",
    cgpa : "3.5",
    isPass : true

};
console.log(student);
console.log(typeof(student));

// there  are two way to print object
console.log(student.age);
console.log(student['age']);

// you can change in any variable of objects
student['age'] = student['age'] + 1;
console.log(student)
student['age'] = 21;
console.log(student['age'])

// you can change constant's oject key values
// but  can't change constant varibale value