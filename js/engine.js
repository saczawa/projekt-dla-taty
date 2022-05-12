let student_list =[];
let student_list_test =["Mateusz", "Saczawa", 50, "Poniedziałek", 11, 1];
let student_index=0;
let calendar = [];

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
function Student(index,name, surname, price, day, time, how_long) {

    this.index = index;
    this.name = name;
    this.price = price;
    this.day = day;
    this.time = time;
    this.how_long = how_long;
    
    return [index, name, price, day, time, how_long];
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
    
    student_list[student_index] = new Student(student_index, name, price, day, time, how_long);
    student_index++;
    
    /*
        Zapis w pliku

    */

    console.log(student_list);
    console.log(student_index);
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