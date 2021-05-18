//Задача 1
/*
// Создание объекта через блок инициализации.
var instance = { propertyA: 2223, propertyB: 4445 };
     
// Вывод значений свойств.
document.write("<p>instance.propertyA = " + instance.propertyA);
document.write("<p>instance.propertyB = " + instance.propertyB);
document.write("<hr/>");
// Присвоение новых значений свойствам.
instance.propertyA = 666;       // 1 способ.
instance["propertyB"] = 777;    // 2 способ.

// Вывод значений свойств.
document.write("<p>instance.propertyA = " + instance.propertyA);
document.write("<p>instance.propertyB = " + instance.propertyB);
document.write("<hr/>");
document.write("<p>instance = " + instance);
*/

/*
//Задача 2
// Создаем обьект с именем point.
var point = new Object();
// Обращение к свойству x обьекта point.
// Если свойство отсутствует то оно создается автоматически и ему присваивается значение.
point.x = 10;
// Создаем свойство y и присваиваем ему значение.
point.y = 15;
// Добавляем к объекту метод.
point.f = function () {
    document.write("<p>x = " + point.x + "<p>y = " + point.y);
};
point.f();
*/

/* 
//Задача 3
var person = {
    firstName: "Jim",
    lastName: "Rainbow",
    age: 30,
    occupation: "Web developer",
    skill: "80%"
};
document.write("<p>" + person.firstName + " " + person.lastName);

person.age = 25;
person.skill = "100%";
document.write("<p>Age: " + person.age + " years old.");
document.write("<p>Skill: " + person.skill);
*/


/*
// Задача 4
var human = {
    firstName: "Alex",
    secondName: "Jazun",
    age: 27,
    // Вложенный обьект.
    occupation: {
        company: "ZIEIT",
        position: "Teacher"
    },
    occupation1: {
        company: "Microsoft",
        position: "Web Developer"
    }

};
document.write("<p>First name: " + human.firstName);
document.write("<p>Second name: " + human.secondName);
document.write("<p>Age: " + human.age + " years old");
// Обращение к вложенному объекту.
document.write("<p>Company: " + human.occupation.company);
document.write("<p>Position: " + human.occupation.position);
*/

/*
//Задача 5
var human = new Object();

human.firstName = "Alex";
human.secondName = "Jazun";
human.age = 27;

human.occupation = new Object();

human.occupation.company = "Microsoft";
human.occupation.position = "Web Developer";
human.male = "Female"; 

document.write("<p>Company: " + human.occupation.company);
document.write("<p>Position: " + human.occupation.position);
document.write("<p>Male: " + human.male);
*/

/*
//Задача 6
var human = {
    firstname: "Alex",
    secondName: "Jazun",
    age: 27,
    occupation: "link...",
    show: function(){
        document.write("<p>First name: " + this.firstname);
        document.write("<p>Second name: " + this.secondName);
        document.write("<p>Age: " + this.age + " years old <br/>");
        document.write(tgis.occupation + "<hr/>");
    },

    changeWork: function (occupation){
        this.occupation = occupation;
    }
}
human.show();
human.changeWork("your link...");
human.show();
*/

/*
//Задача 7
var builder = new Object();
Sbuilder.createRoof = function () {
    document.write("<img src='Images_LR7/Roof.gif'/><br/>");
};
builder.createFirstFloor = function () {
    document.write("<img src='Images_LR7/FirstFloor.gif'/><br/>");
};
builder.createSecondFloor = function () {
    document.write("<img src='Images_LR7/SecondFloor.gif'/><br/>");
};
builder.createBasement = function () {
    document.write("<img src='Images_LR7/Basement.gif'/><br/>");
};
// Строительство дома.
builder.createRoof();
builder.createSecondFloor();
builder.createFirstFloor();
builder.createBasement();
*/

/*
// задача 8
var house = {
    roof: "<img src= Images_LR7/Roof.gif'/><br/>",
    secondFloor: "<img src= Images_LR7/SecondFloor.gif'/><br/>",
    firstFloor: "<img src='Images_LR7/FirstFloor.gif'/><br/>",
    basement: "<img src= Images_LR7/Basement.gif'/><br/>",
    address: "<p style='color:green'>UK. London. Muswell Hill. N10<hr/>"
  };

  // Перебор значений свойств в обьекте - house
  for (var element in house) {
    // создание той переменной, которая будет перебирать свойства в объекте house
    document.write(house[element]); //выводим на екран переменную которая перебирала свойство
  }
  //цикл for/in не проходит по всем элементам массива(свойствам объекта), а перебирает перечисленные
  var arr = [];
  var _ind = 0;
  arr[0] = true;
  arr[4] = 1;
  arr[122] = "people";
  for (_ind in arr) {
    arr[3] = false; // созданный элемент массива в цикле for/in не всегда отобразиться самим циклом
    console.log(_ind);
  }
console.log(arr);
*/

//задача 9
/*
var house = {
    roof: "<link...>",
    secondFloor: "<link...>",
    basement: "<link...>",
    address: "<link...>"
}

document.write(house.roof);

if("thirdFloor" in house){
    document.write(house["thirdFloor"]);
}
else{
    document.write(house["secondFloor"]);
}
document.write(house.secondFloor);
document.write(house.firstFloor);
document.write(house.basement);
document.write(house.address);
*/

//задача 10
/*
var house = {
    roof: "<img src='Images/Roof.gif'/><br/>",
    secondFloor: "<img src='Images/SecondFloor.gif'/><br/>",
    firstFloor: "<img src='Images/FirstFloor.gif'/><br/>",
    basement: "<img src='Images/Basement.gif'/><br/>",
    address: "<p style='color:green'>UK. London. Muswell Hill. N10<hr/>"
}
// Строительство дома.

if ("secondFloor" in house) {
    // Удаление свойства secondFloor из объекта house.
    delete house.secondFloor;
}
if("roof" in house){
    //delete roof
    delete house.roof;
}
for (element in house) {
    document.write(house[element]);
}
*/
