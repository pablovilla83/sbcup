Meteor.methods({
    discardList : function () {
      return Discards.aggregate([
    		{
    			$group: {
    				_id: "$player", count: {$sum:1}
    			}
    		},
        { $sort : { count : 1} }
    	]);
    },
    discardsByValue: function() {
      return Discards.aggregate([
    		{
    			$group: {
    				_id: "$player", valueSum: {$sum: "$value"}
    			}
    		},
        { $sort : { valueSum : 1} }
    	]);
    },
    guessesByPlayer: function(){
      var games = Games.find({}).fetch();
      var players = Players.find({}).fetch();
      var result = {};
      players.forEach(function(player){
        result[player.name] = {name: player.name, guesses: 0};
      });
      games.forEach(function(game){
        var host = result[game.host];
        host.guesses += game.no_guesses_host;
        result[game.host] = host;

        var guest = result[game.guest];
        guest.guesses += game.no_guesses_guest;
        result[game.guest] = guest;
      });
      return result;
    },
    topGivenCards: function(){
      return GivenCards.aggregate([
    		{
    			$group: {
    				_id: "$card", count: {$sum:1}
    			}
    		},
        { $sort : { count : -1} },
        { $limit: 5 }
    	]);
    }
});
