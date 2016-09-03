/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
$('#main').append('Monish Gupta')

var awesomeThoughts = "I am Monish and I am AWESOME."
$('#main').append(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$('#main').append(funThoughts);


var name = 'Monish Gupta', role = 'Senior front-end developer';
var formattedName = HTMLheaderName.replace('%data%', name);
var formattedRole = HTMLheaderRole.replace('%data%', role);


$('#main').prepend(formattedRole);
$('#main').prepend(formattedName);
*/

var bio = {
  name: 'Monish Gupta',
  role: 'Senior front-end engineer',
  contacts: {
    mobile: '(+91) 98 4567 XXXX',
    email: 'monish.gupta1@gmail.com',
    github: 'monish001',
    twitter: '@monish001',
    location: 'Bangalore'
  },
  welcomeMessage: 'Welcome to my resume page',
  skills: ['Web UI', 'NodeJS', 'Saving the world'],
  biopic: 'images/me-100.jpg',
  appendName: function(){
    var formattedName = HTMLheaderName.replace('%data%', this.name);
    $('#header').prepend(formattedName);
  },
  appendRole: function(){
    var formattedRole = HTMLheaderRole.replace('%data%', this.role);
    $('#header').prepend(formattedRole);
  },
  appendContacts: function(){
    var formattedContact;
    for(contact in this.contacts){
      if(!this.contacts.hasOwnProperty(contact)){
        return;
      }
      formattedContact = HTMLcontactGeneric
        .replace('%contact%', contact)
        .replace('%data%', this.contacts[contact]);
      $('#topContacts').append(formattedContact);
    }
  },
  appendOthers: function(){
    $('#header').append(HTMLbioPic.replace('%data%', this.biopic));
    $('#header').append(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage));
  },
  appendSkills: function(){
    $('#header').append(HTMLskillsStart);
    this.skills.forEach(function(skill, idx){
      $('#skills').append(HTMLskills.replace('%data%', skill));
    });
  },
  display: function(){
    this.appendRole();
    this.appendName();

    this.appendContacts();

    this.appendOthers();
    this.appendSkills();
  }
}


bio.display();

/*
education contains:

      schools: array of objects with
           name: string
           location: string
           degree: string
           majors: array of strings
           dates: string (works with a hyphen between them)
           url: string
      onlineCourses: array of objects with
           title: string
           school: string
           dates: string (works with a hyphen between them)
           url: string
      display: function
work contains

      jobs: array of objects with
           employer: string
           title: string
           location: string
           dates: string (Can be 'in progress')
           description: string
      display: function
projects contains:

      projects: array of objects with
            title: string
            dates: string (works with a hyphen between them)
            description: string
            images: array with string urls
      display: function

*/
