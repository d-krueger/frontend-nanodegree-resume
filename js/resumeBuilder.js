<!-- Added script for appending funThoughts -->

var formattedName = HTMLheaderName.replace("%data%", "David");
var formattedRole = HTMLheaderRole.replace("%data%", "Founder");

$("#header").append(formattedName);
$("#header").append(formattedRole);
