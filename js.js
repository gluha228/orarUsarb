const weekDays = ["none", "пнд", "втр", "срд", "чтв", "птн", "сбт", "вск"]; 
const lessonTime = ["none","8:00 - 9:30","9:45 - 11:15","11:30 - 13:00","13:15 - 14:45","15:00 - 16:30","16:45 - 18:15"];
let week = 1;
let group = "IT11Z";

/*
timetable[group][week][dayOfWeek][lesson]=lessonOrder, lessonName, lessonType
lessons[group][lessonName] = flow
flows[flow]= groups, teacher
*/
const timetable = {
    "IT11Z":[[[[1,"WEB programming","Lecture"],[2,"English","Lab work"]],[[1,"English","Practice"],[2,"WEB programming","Test"],[3,"Programming","Practice"]],[[1,"WEB programming","Lecture"],[2,"Programming","Practice"],[3,"English","Lab work"],[4,"WEB programming","Practice"]],[[1,"Programming","Test"],[2,"English","Test"],[3,"English","Lecture"],[4,"Programming","Test"],[5,"English","Test"]],[[1,"Programming","Test"],[2,"English","Lab work"],[3,"WEB programming","Practice"],[4,"WEB programming","Lab work"]]],[[[1,"WEB programming","Test"]],[[1,"English","Test"],[2,"English","Practice"]],[[1,"WEB programming","Test"]],[[1,"WEB programming","Test"],[2,"Programming","Lab work"],[3,"Programming","Lecture"],[4,"WEB programming","Practice"]],[[1,"WEB programming","Lab work"],[2,"English","Lab work"],[3,"English","Practice"],[4,"WEB programming","Lab work"]]],[[[1,"Programming","Lecture"],[2,"English","Lab work"],[3,"WEB programming","Practice"],[4,"WEB programming","Practice"],[5,"English","Test"]],[[1,"English","Lecture"]],[[1,"English","Lecture"],[2,"Programming","Lecture"],[3,"WEB programming","Lecture"]],[[1,"WEB programming","Lecture"]],[[1,"WEB programming","Practice"],[2,"Programming","Test"],[3,"English","Lecture"],[4,"Programming","Lecture"],[5,"Programming","Lab work"]]]],
    "MI11Z":[[[[1,"Programming","Lecture"],[2,"English","Practice"],[3,"Programming","Practice"],[4,"WEB programming","Lab work"]],[[1,"English","Test"]],[[1,"Programming","Lab work"],[2,"English","Lecture"],[3,"English","Practice"]],[[1,"English","Lab work"],[2,"English","Test"],[3,"Programming","Practice"],[4,"English","Practice"],[5,"WEB programming","Practice"]],[[1,"WEB programming","Practice"],[2,"English","Practice"],[3,"Programming","Test"],[4,"Programming","Lab work"]]],[[[1,"English","Practice"],[2,"WEB programming","Test"],[3,"Programming","Practice"],[4,"English","Practice"]],[[1,"WEB programming","Lecture"],[2,"Programming","Test"],[3,"WEB programming","Test"],[4,"WEB programming","Lab work"],[5,"Programming","Practice"]],[[1,"WEB programming","Test"],[2,"English","Test"],[3,"Programming","Lecture"],[4,"Programming","Practice"],[5,"WEB programming","Lecture"]],[[1,"English","Lab work"]],[[1,"Programming","Lab work"],[2,"English","Lecture"],[3,"English","Practice"],[4,"English","Lecture"],[5,"English","Lecture"]]],[[[1,"WEB programming","Practice"],[2,"Programming","Lecture"],[3,"Programming","Practice"]],[[1,"WEB programming","Lab work"],[2,"Programming","Test"],[3,"English","Lab work"],[4,"WEB programming","Test"]],[[1,"Programming","Lecture"],[2,"WEB programming","Lab work"]],[[1,"English","Test"]],[[1,"WEB programming","Practice"],[2,"WEB programming","Lab work"],[3,"Programming","Lecture"]]]],
    "IS11Z":[[[[1,"English","Lab work"],[2,"Programming","Practice"],[3,"Programming","Test"],[4,"WEB programming","Practice"]],[[1,"English","Practice"],[2,"Programming","Test"],[3,"Programming","Lab work"]],[[1,"English","Lecture"],[2,"Programming","Lecture"],[3,"English","Test"]],[[1,"English","Lab work"]],[[1,"English","Lecture"],[2,"English","Practice"]]],[[[1,"Programming","Test"],[2,"WEB programming","Lab work"],[3,"WEB programming","Practice"],[4,"Programming","Lecture"],[5,"Programming","Lecture"]],[[1,"WEB programming","Test"],[2,"English","Lecture"]],[[1,"English","Test"]],[[1,"WEB programming","Lab work"],[2,"WEB programming","Test"]],[[1,"English","Lab work"],[2,"Programming","Lecture"],[3,"English","Test"],[4,"WEB programming","Test"]]],[[[1,"English","Lecture"],[2,"Programming","Lab work"],[3,"English","Practice"],[4,"English","Practice"],[5,"English","Test"]],[[1,"English","Lab work"]],[[1,"Programming","Lecture"],[2,"WEB programming","Lecture"],[3,"WEB programming","Practice"]],[[1,"WEB programming","Test"]],[[1,"English","Lab work"]]]]
}
const lessons = {"IT11Z":{"Programming":"p1","WEB programming":"w1","English":"e1"},"IS11Z":{"Programming":"p1","WEB programming":"w2","English":"e1"},"MI11Z":{"Programming":"p1","WEB programming":"w2","English":"e1"}}
const flows = {"p1":[["IT11Z","IS11Z","MI11Z"],"Iosif Visarionovich Stalin"], "w1":[["IT11Z"],"Vladimir Iliich Lenin"], "e1":[["IT11Z","IS11Z","MI11Z"],"Boris Nikolaevich Eltsin"], "w2":[["IS11Z","MI11Z"],"Stas Boretskii"]}
let flow = "";
let content = document.querySelector(".timetable")
for (dayOfWeek=1; dayOfWeek<6; dayOfWeek++) {
    content.insertAdjacentHTML("beforeend",
    '<div class="day"><div class="day-week">21 ноября, пнд</div><div class="day-timetable"><div id="'+weekDays[dayOfWeek]+'"></div></div></div>')
    for (lesson = 1; lesson <= timetable[group][week-1][dayOfWeek-1].length; lesson++) {
        flow = lessons[group][timetable[group][week-1][dayOfWeek-1][lesson-1][1]];
        document.getElementById(weekDays[dayOfWeek]).insertAdjacentHTML("beforeend",
        '<div class="lesson"><div class="time">'+lessonTime[timetable[group][week-1][dayOfWeek-1][lesson-1][0]]+
        '</div><div><h4>'+timetable[group][week-1][dayOfWeek-1][lesson-1][1]+
        '</h4><div>'+timetable[group][week-1][dayOfWeek-1][lesson-1][2]+
        '</div><div>Поток '+flows[flow][0].join(', ')+
        '</div><div>'+flows[flow][1]+'</div><div><a href="">Link to lesson</a></div></div></div>')
        console.log(document.getElementById(weekDays[dayOfWeek]));
    }
}