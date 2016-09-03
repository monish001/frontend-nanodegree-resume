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
var work = {
  jobs: [{
    employer: '',
    title: '',
    location: '',
    dates: '', // (Can be 'in progress')
    description: ''
  }],
  display: function(){}
};
var projects = {
  projects: [{
    title: '',
    dates: '', // (works with a hyphen between them)
    description: '',
    images: [''] // urls
  }],
  display: function(){}
};
var education = {
  schools: [{
    name: 'Thapar University, Patiala',
    location: 'Punjab, India',
    degree: 'BE',
    majors: ['CS'],
    dates: 'Jun 2008 - Jun 2012',
    url: 'http://www.thapar.edu'
  }],
  onlineCourses: [{
    title: 'Intro to Machine Learning',
    school: 'Udacity',
    dates: 'Nov 2015 - Dec 2015',
    url: 'http://udacity.com/TODO'
  }],
  display: function(){}
};

bio.display();
work.display();
projects.display();
education.display();
