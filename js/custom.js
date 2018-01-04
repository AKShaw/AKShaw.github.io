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
  Materialize.toast($toastContent, 10000);
}

function uniSemOneModules(){
  var $toastContent = $('<span><b>Programming 1</b><br />Within this module I am futhering my knowledge in Java.<br/><br/><b>Foundations of Computer Science</b><br/>This module teaches us the maths behind computer science, including areas such as set theory, linear algebra, logic and combinatorics.<br/><br/><b>Computer Systems 1</b><br/>This module is about how computers work. We have covered the CPU, busses, memory and IO so far.<br/><br/><b>Professional development</b><br />Within this module we are learning profressional skills such as technical report writing and giving presentations.</span>');
  Materialize.toast($toastContent, 10000);
}