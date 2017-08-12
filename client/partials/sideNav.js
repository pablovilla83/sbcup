import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './sideNav.html';

Template.sideNav.events({
  'click #signOut' : function(){
    Meteor.logout();
  }
});
