let studentList =[];


let studentIndex=0;
let calendar = [];


// [Name, Surname, price, day, hour, how long]
function loadAtStart() {
    studentList.push(["Mateusz", "Saczawa", 50, "Poniedziałek", 11, 1]);
    studentList.push(["Tomek", "Marczuk", 60, "Środa", 18, 2]);
    studentList.push(["Wojtek", "Małysz", 60, "Wtorek", 18, 2]);
    studentList.push(["Kajtek", "Gierczak", 60, "Czwartek", 18, 1]);
    studentList.push(["Kuba", "Górski", 60, "Wtorek", 15, 1]);
    studentList.push(["Oliwia", "Grabowska", 60, "Środa", 11, 1]);
    studentList.push(["Jagoda", "Schabowy", 60, "Środa", 10, 3]);
    studentList.push(["Borys", "Kot", 60, "Poniedziałek", 18, 2]);
    //console.log(studentList);

    Student(1);
    
}


/*
    Student:
    -index      - identification number of student
    -name       - first name of student
    -surmane    - surname of student
    -price      - cost of 1 hour lesson
    -day        - day of lesson
    -time       - time of lesson
    -how_long   - how long lesson takes

    Return array with all information about Student

    -start_date
    -end_date

    zrobic dla przypadow kilka razy w tygodniu
*/
function getCurrentDay(){

    var today = new Date();

    switch(today.getDay()) {

        case 1: return "Poniedziałek";
        case 2: return "Wtorek";
        case 3: return "Środa";
        case 4: return "Czwartek";
        case 5: return "Piątek";
        case 6: return "Sobota";
        case 7: return "Niedziela";
        
    }
    return console.log("Problem with function getDay()")
}

function getCurrentHour() {
    var today = new Date();

    return today.getHours();
}
function Student(idStudent) {
    
   
    var currentDay = getCurrentDay();
    var currentHour = getCurrentHour();
    
    //nie dzuaka
    for(student in studentList) {
        console.log("E?:", studentList[student][4].value());
    }

    return studentList[idStudent];
}

/*
    Create a weekly calendar with 1-hour slots
*/
function Calendar(){
    console.log("xd",calendar);
    let days = ["mon", "Tue", "Wen","Thu", "Fri", "Sat", "Sun"]
        for(var i=0; i<7; i++){
            console.log("day: ",days[i]);
            for(var j=0; j<24; j++){
                let new_array = new Array(days[i],j);
                calendar.push(new_array);
            }     
            
        }
    console.log(calendar);
}
function newStudent(name, surname, price, day, time, how_long) {
    
    studentList[studentIndex] = new Student(studentIndex, name, price, day, time, how_long);
    studentIndex++;
    
    /*
        Zapis w pliku

    */

    console.log(studentList);
    console.log(studentIndex);
}
function upcoming_lesson() {
    
    let name = "Michał Nowak";
    let today = new Date()
    let lesson_time = new Date(2011, 0, 1, 0, 0, 0, 0);
    console.log(lesson_time);
}

function deleteStudent() {

}
function editStudent() {

}


function start() {

}