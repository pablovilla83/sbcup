Meteor.publish('players', function(){
	return Players.find({});
});

Meteor.publish('games', function(){
	return Games.find({});
});

Meteor.publish('allDiscards', function(){
	return Discards.find({});
	// return Discards.find({});
});
