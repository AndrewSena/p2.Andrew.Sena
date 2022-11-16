let _canvas = {w: 1280, h:720}
let capture;
let calendar;
let news;
let socialFeed;
let weather;
let texts;

let weatherTable



function preload(){
    weatherTable = new p5.Table();
    weatherTable = loadTable("Weather.csv", "csv", "header");

    calendarTable = new p5.Table();
    calendarTable = loadTable("Calendar.csv", "csv", "header");

    exerciseTable = new p5.Table();
    exerciseTable = loadTable("Exercise.csv", "csv", "header");

    mirrorTimeTable = new p5.Table();
    mirrorTimeTable = loadTable("MirrorTime.csv", "csv");

    newsTable = new p5.Table();
    newsTable = loadTable("News.csv", "csv", "header");

    sleepTable = new p5.Table();
    sleepTable = loadTable("Sleep.csv", "csv");

    socialFeedTable = new p5.Table();
    socialFeedTable = loadTable("SocialFeed.csv", "csv", "header");

    textsTable = new p5.Table();
    textsTable = loadTable("Texts.csv", "csv", "header");

    weightTable = new p5.Table();
    weightTable = loadTable("weight.csv", "csv");
}

function setup(){
    
    createCanvas(1280, 720);
    capture = createCapture(VIDEO).hide();
    capture.size(1280, 720)
    
    
    calendar = new Box(80,20, 210,140, 100, 300, 225, 'Calendar', 0)
    news = new Box(80,20, 220, 120, 600, 0, 225, 'News', 0)
    socialFeed = new Box(80,20, 400, 120, 900, 0, 225, 'Social Feed', 0)
    weather = new Box(80,20, 400, 200, 100, 0, 225, 'Weather', 0)
    texts = new Box(80,20, 300, 120, 1000, 550, 225, 'Texts', 0)
    exercise = new Box(80,20, 180, 100,100, 550, 225, 'Exercise', 0)
    mirrorTime = new Box(80, 20, 270, 50, 300, 550, 225, 'Mirror Time', 0)
    sleep = new Box(80, 20, 160, 120, 590, 550, 225, 'Sleep Stats', 0)
    weight = new Box(80, 20, 220, 50, 770, 550, 225, 'Weight', 0)

    
    
}

function draw(){
    background(255);
    let c = capture.get(0, 0, 1280, 720);
    image(c,0,0);
    
    calendar.display();
    news.display();
    socialFeed.display();
    weather.display();
    texts.display();
    exercise.display();
    mirrorTime.display();
    sleep.display();
    weight.display();

    weather.getInformation(weatherTable)
    calendar.getInformation(calendarTable)
    news.getInformation(newsTable)
    socialFeed.getInformation(socialFeedTable)
    texts.getInformation(textsTable)
    exercise.getInformation(exerciseTable)
    mirrorTime.getInformation(mirrorTimeTable)
    sleep.getInformation(sleepTable)
    weight.getInformation(weightTable)

    //This makes the clock function. Help given by Cameron Emfinger
    var sec = second();
    var min = minute();
    var hrs = hour();
    // Check for AM or PM 
    var mer = hrs < 12 ? "AM":"PM";
    // Format the time
    sec = formatting(sec);
    min = formatting(min);
    hrs = formatting(hrs % 12);
    fill(0);
    textAlign(CENTER, TOP);
    // Display the time
    text(hrs + ":" + min + ":" + sec + " " + mer, width/2, height*0.05);
}

function mousePressed(){
    
    calendar._pressed();
    news._pressed();
    socialFeed._pressed();
    weather._pressed();
    texts._pressed();
    exercise._pressed();
    mirrorTime._pressed();
    sleep._pressed();
    weight._pressed();

}

function mouseReleased(){
    
    calendar. released();
    news.released();
    socialFeed.released();
    weather.released();
    texts.released();
    exercise.released();
    mirrorTime.released();
    sleep.released();
    weight.released();
}

//formatting function help given by Cameron Emfinger
function formatting(num){
    if(int(num) < 10) {
      return "0" + num;
    }
    return num;
}
