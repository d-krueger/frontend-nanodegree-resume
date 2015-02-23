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




var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(bio.contact.email + bio.contact.phone + bio.picture + bio.welcome + bio.skills[0]);
