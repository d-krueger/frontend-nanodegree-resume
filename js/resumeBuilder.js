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
  "schools" : [{
    "school" : "BBS",
    "majors" : ["Math", "Controlling"],
    "minors" : ["Business", "English"],
    "years" : 3,
    "city" : "Luenburg",
    "online" : "linkBBS"
  },
  {
    "school" : "WWU",
    "majors" : ["Business", "Information Science"],
    "minors" : ["Process", "Design"],
    "years" : 4,
    "city" : "Muenster",
    "online" : "linkWWU"
  }],
  "onlineCourses" : [{
      "title": "Java Script Basics",
      "school": "Udacity",
      "dates": 2015,
      "url" : "udacityLink"
  }]
};

//education["school"] = "WWU";


//var formattedName = HTMLheaderName.replace("%data%", bio.name);
//var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);
//$("#main").append(bio.contact.email + bio.contact.phone + bio.picture + bio.welcome + bio.skills[0]);
//$("#main").append(work.job + education["school"]);
