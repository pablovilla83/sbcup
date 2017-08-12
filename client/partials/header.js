import { Template } from 'meteor/templating';

import './header.html';

Template.header.onRendered(function () {
  $('.button-collapse').sideNav();
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
