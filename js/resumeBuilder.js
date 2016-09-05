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
    //this.name = inName(this.name);
    var formattedName = HTMLheaderName.replace('%data%', this.name);
    $('#header').prepend(formattedName);
  },
  appendRole: function(){
    var formattedRole = HTMLheaderRole.replace('%data%', this.role);
    $('#header').prepend(formattedRole);
  },
  appendContacts: function(containerId){
    var formattedContact;
    for(contact in this.contacts){
      if(!this.contacts.hasOwnProperty(contact)){
        return;
      }
      formattedContact = HTMLcontactGeneric
        .replace('%contact%', contact)
        .replace('%data%', this.contacts[contact]);
      $('#' + containerId).append(formattedContact);
    }
  },
  appendOthers: function(){
    $('#header').append(HTMLbioPic.replace('%data%', this.biopic));
    $('#header').append(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage));
  },
  appendSkills: function(){
    if(!this.skills || this.skills.length === 0){
      return;
    }
    $('#header').append(HTMLskillsStart);
    this.skills.forEach(function(skill, idx){
      $('#skills').append(HTMLskills.replace('%data%', skill));
    });
  },
  display: function(){
    this.appendRole();
    this.appendName();

    this.appendContacts('topContacts');
    this.appendContacts('footerContacts');

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
      var jobHtml = self.getJobDesc(job);
      $('#workExperience').append(jobHtml);
    });
  }
};
var projects = {
  projects: [{
    title: 'Tulna',
    dates: 'Jul 2014', // (works with a hyphen between them)
    description: 'It is a book price comparison app for windows 8',
    images: [
      'https://store-images.s-microsoft.com/image/apps.25886.9007199266614075.00370475-a568-430d-bb6d-df6023a2454b.5225d5e0-7ea4-422f-b33b-9a90f72ad39a?w=471&h=265&q=60',
      'https://store-images.s-microsoft.com/image/apps.55965.9007199266614075.37b1de7e-4bef-45e3-b89e-ebe023197394.f8952ba3-f180-4b42-9a56-834639cc5023?w=471&h=265&q=60'
    ] // urls
  }],
  getProjectDesc: function(project){
    var jobHtml = $(HTMLprojectStart)
      .append(HTMLprojectTitle.replace('%data%', project.title))
      .append(HTMLprojectDates.replace('%data%', project.dates))
      .append(HTMLprojectDescription.replace('%data%', project.description));

      project.images.forEach(function(imageUrl, idx){
        var self = this;
        jobHtml.append(HTMLprojectImage.replace('%data%', imageUrl));
      });

      return jobHtml;
  },
  display: function(){
    var self = this;
    this.projects.forEach(function(project, idx){
      var projectHtml = self.getProjectDesc(project);
      $('#projects').append(projectHtml);
    });
  }
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
  // var HTMLschoolStart = '<div class="education-entry"></div>';
  // var HTMLschoolName = '<a href="#">%data%';
  // var HTMLschoolDegree = ' -- %data%</a>';
  // var HTMLschoolDates = '<div class="date-text">%data%</div>';
  // var HTMLschoolLocation = '<div class="location-text">%data%</div>';
  // var HTMLschoolMajor = '<em><br>Major: %data%</em>';
  getSchHtml: function(sch){
    return $(HTMLschoolStart)
      .append(HTMLschoolName.replace('%data%', sch.name))
      .append(HTMLschoolDegree.replace('%data%', sch.degree))
      .append(HTMLschoolDates.replace('%data%', sch.dates))
      .append(HTMLschoolLocation.replace('%data%', sch.location))
      .append(HTMLschoolMajor.replace('%data%', sch.majors.join(', ')));
  },
  // var HTMLonlineClasses = '<h3>Online Classes</h3>';
  // var HTMLonlineTitle = '<a href="#">%data%';
  // var HTMLonlineSchool = ' - %data%</a>';
  // var HTMLonlineDates = '<div class="date-text">%data%</div>';
  // var HTMLonlineURL = '<br><a href="#">%data%</a>';
  getCourHtml: function(course){
    return $(HTMLschoolStart)
      .append(HTMLonlineTitle.replace('%data%', course.title))
      .append(HTMLonlineSchool.replace('%data%', course.school))
      .append(HTMLonlineDates.replace('%data%', course.dates))
      .append(HTMLonlineURL.replace('%data%', course.url));
  },
  display: function(){
    var self = this;
    this.schools.forEach(function(sch, idx){
      var schHtml = self.getSchHtml(sch);
      $('#education').append(schHtml);
    });

    $('#education').append(HTMLonlineClasses);
    this.onlineCourses.forEach(function(cour, idx){
      var courHtml = self.getCourHtml(cour);
      $('#education').append(courHtml);
    });
  }
};

bio.display();
work.display();
projects.display();
education.display();

//$('#main').append(internationalizeButton);
function capitalize(str){
  return str[0].toUpperCase() + str.substr(1);
}
function inName(firstAndLastName){
  var names = firstAndLastName.split(' ');
  return capitalize(names[0]) + ' ' + names[1].toUpperCase();
}

$('#mapDiv').append(googleMap);
