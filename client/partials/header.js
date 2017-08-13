import { Template } from 'meteor/templating';

import './header.html';

Template.header.onRendered(function () {
  // $('.button-collapse').sideNav();
  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true, // Choose whether you can drag to open on touch screens,
    }
  );
  // $('.parallax').parallax();
  $('.modal').modal();
});

Template.header.helpers({
  name: function(){
    return Meteor.user().profile.name;
  },
  showSignUp: function(){
    var result =  Session.get('showSignUpModal');
    console.log(result);
    return result;
  }
});

Template.header.events({
  'click #signIn' : function(){
    $('#signInModal').modal('open');
  }
});
