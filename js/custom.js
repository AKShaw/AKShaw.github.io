$(document).ready(function(){
  $(".button-collapse").sideNav();
  $(".parallax").parallax();
});

function gcseGrades(){
  var $toastContent = $('<span>Biology*: A, <br/>Chemistry: A, <br/>Computing: A, <br/>English Language: C, <br/>English Literature: C, <br/>Further Maths: A, <br/>Geography: A, <br/>Maths*: A, <br/>Physics: A, <br/>Religious Education: B. <br/><br/> * indicates exams taken in 2013, one year early.</span>');
  Materialize.toast($toastContent, 10000);
}

function alvlGrades(){
  var $toastContent = $('<span>A-Levels:<br/>Maths: A*, <br/> Further maths: B, <br/><br/>BTEC Level 3: <br/>Computer Science: Distinction Star, <br/><br/> AS Level: <br/>Biology: D</span>');
  Materialize.toast($toastContent, 12000);
}

function uniYear1Modules(){
  var $toastContent = $("<span><b>Year 1</b><br />"
  + "<b>Semester 1</b><br />Programming 1<br />"
  + "Foundations of Computer Science<br />" 
  + "Computer Systems 1<br />"
  + "Professional Development<br /><br />"
  + "<b>Semester 2</b><br />"
  + "Programming 2<br />"
  + "Algorithmics<br />"
  + "Data Management<br />"
  + "Software Modelling and Design<br /><br />"
  + "</span>");
  Materialize.toast($toastContent, 12000);
}

function uniYear2Modules(){
  var $toastContent = $("<span>"
  + "<b>Year 2</b><br />"
  + "<b>Semester 1</b><br />"
  + "Programming 3<br />"
  + "Theory of Computing<br />"
  + "Intelligent Systems<br />"
  + "Interaction Design<br /><br />"
  + "<b>Semester 2</b><br />"
  + "Programming Language Concepts<br />"
  + "Distributed Systems and Networks<br />"
  + "Software Engineering Group Project<br />"
  + "Principles of Cyber Security<br /><br />"
  + "</span>");
  Materialize.toast($toastContent, 12000);
}

function uniYear3Modules(){
  var $toastContent = $("<span>"
  + "<b>Year 3</b><br />"
  + "<b>Semester 1</b><br />"
  + "Foundations of Machine Learning<br />"
  + "Computer Vision<br />"
  + "Engineering Management and Law<br />"
  + "Individual Project (1 modules worth)<br /><br />"
  + "<b>Semester 2</b/><br />"
  + "Advanced Databases<br />"
  + "Computational Biology<br />"
  + "Individual Project (2 modules worth)"
  +"</span>");
  Materialize.toast($toastContent, 12000);
}