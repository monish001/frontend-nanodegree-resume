(function () {
  'use strict';
  var bio = {
    name: 'Monish Gupta',
    role: 'SDE III',
    contacts: {
      mobile: '(+91) 98 4567 XXXX',
      email: 'monish****@gmail.com',
      github: 'monish001',
      twitter: '@monish001',
      location: 'Bangalore'
    },
    welcomeMessage: 'Welcome to my introduction page',
    skills: ['Developing responsive websites', 'Commuting on a ever learning trajectory', 'Saving the universe'],
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
      for(var contact in this.contacts){
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
      $('#header')
        .append(HTMLbioPic.replace('%data%', this.biopic))
        .append(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage));
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
  };
  window.bio = bio; // required by helper.js locations.push(bio.contacts.location);
  var work = {
    jobs: [{
      employer: 'Time Inc. India',

      /* Added employerUrl that is not in the given schema as it is needed in the anchor tag. */
      employerUrl: 'http://www.timeincindia.com/',
      title: 'Sr. Software Engineer',
      dates: 'Mar 2016 - in progress',
      location: 'Bangalore, India',
      description: 'Working on projects ranging from research on best SEO practices to driving web apps from scratch using ReactJS, Vanilla JS, NodeJS, Webpack, AWS for hosting.'
    }, {
      employer: 'Microsoft, India',
      employerUrl: 'https://www.microsoft.com/en-in/about/',
      title: 'Software Engineer',
      dates: 'Jun 2012 - Jul 2015', // (Can be 'in progress')
      location: 'Bangalore, India',
      description: 'Implemented and drove web UI features across various projects. Features ranging from file upload, enabling authentication etc. to incorporating design patterns for better code maintainability.'
    }],
    getJobDesc: function(job){
      return $(HTMLworkStart)
        .append(HTMLworkEmployer.replace('%data%', job.employer + ' - ' + job.title).replace('#', job.employerUrl))
        //.append(HTMLworkTitle.replace('%data%', job.title))
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
  window.work = work;

  var projects = {
    projects: [{
      title: 'Tulna',
      /* Added url that is not in the given schema as this is needed in the anchor tag. */
      url: 'http://apps.microsoft.com/windows/en-in/app/tulna/d3320f9d-3f6b-42a4-8f71-af4a540d075e',
      dates: 'Jul 2014', // (works with a hyphen between them)
      description: 'This is a windows 8 app that enables users to compare book prices across different e-commerce websites. This was built as part of an internal hackathon at Microsoft.',
      images: [
        'https://store-images.s-microsoft.com/image/apps.25886.9007199266614075.00370475-a568-430d-bb6d-df6023a2454b.5225d5e0-7ea4-422f-b33b-9a90f72ad39a?w=471&h=265&q=60',
        'https://store-images.s-microsoft.com/image/apps.55965.9007199266614075.37b1de7e-4bef-45e3-b89e-ebe023197394.f8952ba3-f180-4b42-9a56-834639cc5023?w=471&h=265&q=60'
      ] // urls
    }],
    getProjectDesc: function(project){
      var jobHtml = $(HTMLprojectStart)
        .append(HTMLprojectTitle.replace('%data%', project.title).replace('#', project.url))
        .append(HTMLprojectDates.replace('%data%', project.dates))
        .append(HTMLprojectDescription.replace('%data%', project.description));

        project.images && project.images.length && project.images.forEach(function(imageUrl, idx){
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
      url: 'https://www.udacity.com/course/intro-to-machine-learning--ud120'
    }],
    getSchHtml: function(sch){
      return $(HTMLschoolStart)
        .append(HTMLschoolName.replace('%data%', sch.name + ' - ' + sch.degree).replace('#', sch.url))
        //.append(HTMLschoolDegree.replace('%data%', sch.degree))
        .append(HTMLschoolDates.replace('%data%', sch.dates))
        .append(HTMLschoolLocation.replace('%data%', sch.location))
        .append(HTMLschoolMajor.replace('%data%', sch.majors.join(', ')));
    },
    getCourHtml: function(course){
      return $(HTMLschoolStart)
        .append(HTMLonlineTitle.replace('%data%', course.title + ' - ' + course.school).replace('#', course.url))
        //.append(HTMLonlineSchool.replace('%data%', course.school))
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
  window.education = education;

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
}());

