import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';

import './players.html';

Template.players.onCreated(function(){
	this.autorun(() => {
		this.subscribe('players');
	});
});

Template.players.helpers ({
  players: function(){
  		return Players.find();
  }
});
