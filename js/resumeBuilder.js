<!-- Added script for appending funThoughts -->
var name = "David";
var role = "Founder";
var bio = {
  "name": "David",
  "role": "Founder",
  "contact": {
    "email" : "david@whatever.com",
    "phone" : "017534232323",
  },
  "picture": "http://smipeapp.de/assets/img/thumb_up.png",
  "welcome": "Hello I'm David - thanks for looking at my profile!",
  "skills" : ["Everything", "Innovation"],

};

var work = {
  "job" : "Manager",
  "employer" : "Accenture",
  "years" : 7,
  "city" : "Hamburg",
};

work.job = "Senior Manager";

var education = {
  "school" : "",
  "years" : 0,
  "city" : "",
};

education["school"] = "WWU";


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(bio.contact.email + bio.contact.phone + bio.picture + bio.welcome + bio.skills[0]);
$("#main").append(work.job + education["school"]);
