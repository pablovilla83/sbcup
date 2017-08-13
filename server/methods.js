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
    }
});
