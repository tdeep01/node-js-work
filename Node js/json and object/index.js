var obj={
    name:'tarandeep',
    age:22,
    rollnumber:1816110219,
    Phonenumber:7011048697,
    college:'kec'
};
console.log(obj);
var json=JSON.stringify(obj);
//{"name":"tarandeep","age":22,"rollnumber":1816110219,"Phonenumber":7011048697,"college":"kec"}
console.log(json);
orignalobj=JSON.parse(json);
console.log(orignalobj);