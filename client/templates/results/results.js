import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './results.html';

Template.results.onCreated(function(){
	this.autorun(() => {
  		this.subscribe('players');
	});
});

Template.results.helpers ({
  groupAplayers: function(){
  		return Players.find({group: 'A'}, {sort: {"Pts": -1, "GD": -1}});
  },
  'groupBplayers': function(){
  		return Players.find({group: 'B'}, {sort: {"Pts": -1, "GD": -1}});
  }
});
