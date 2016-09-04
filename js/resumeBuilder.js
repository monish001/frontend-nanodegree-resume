/*
 This is empty on purpose! Your code to build the resume will go here.
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
    employer: 'Time Inc. India',
    title: 'Sr. Software Engineer',
    dates: 'Mar 2016 - in progress',
    location: 'Bangalore, India',
    description: 'Working on reactJS projects.'
  }, {
    employer: 'Microsoft, India',
    title: 'Software Engineer',
    dates: 'Jun 2012 - Jul 2015', // (Can be 'in progress')
    location: 'Bangalore, India',
    description: 'Worked on various projects based on front-end technologies like JavaScript, JQuery etc.'
  }],
// var HTMLworkStart = '<div class="work-entry"></div>';
// var HTMLworkEmployer = '<a href="#">%data%';
// var HTMLworkTitle = ' - %data%</a>';
// var HTMLworkDates = '<div class="date-text">%data%</div>';
// var HTMLworkLocation = '<div class="location-text">%data%</div>';
// var HTMLworkDescription = '<p><br>%data%</p>';
  getJobDesc: function(job){
    return $(HTMLworkStart)
      .append(HTMLworkEmployer.replace('%data%', job.employer))
      .append(HTMLworkTitle.replace('%data%', job.title))
      .append(HTMLworkDates.replace('%data%', job.dates))
      .append(HTMLworkLocation.replace('%data%', job.location))
      .append(HTMLworkDescription.replace('%data%', job.description));
  },
  display: function(){
    var self = this;
    this.jobs.forEach(function(job, idx){
      jobDesc = self.getJobDesc(job);
      $('#workExperience').append(jobDesc);
    });
  }
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
