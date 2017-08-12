import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './events.html';

Template.events.rendered = function(){
  $('select').material_select();
  // $('ul.tabs').tabs();
};
