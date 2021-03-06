if (Meteor.isClient) {
	Accounts.onLogin(function() {
		$('#signInModal').modal('close');
	});

	Accounts.onLogout(function() {
		$('.button-collapse').sideNav('hide');
		FlowRouter.go('landing');
	});
}

// FlowRouter.triggers.enter([function(context, redirect){
// 	if(!Meteor.userId()) {
// 			FlowRouter.go('landing');
// 	}
// }]);

var isLoggedInTrigger = function(context, redirect){
		if(Meteor.loggingIn()) {
				console.log('User is logging in');
		}else if(Meteor.userId()){
			console.log('User is authenticated');
		}else{
			FlowRouter.go('landing');
		}
	};

FlowRouter.route('/', {
	name: 'landing',
	action() {
		BlazeLayout.render('mainLayout', {main: 'landing'});
	}
});

FlowRouter.route('/players', {
	name: 'players',
	action() {
		BlazeLayout.render('mainLayout', {main: 'players'});
	}
});

FlowRouter.route('/results', {
	name: 'results',
	action() {
		BlazeLayout.render('mainLayout', {main: 'results'});
	}
});

FlowRouter.route('/discards', {
	name: 'discards',
	action() {
		BlazeLayout.render('mainLayout', {main: 'discards'});
	}
});

FlowRouter.route('/guesses', {
	name: 'guesses',
	action() {
		BlazeLayout.render('mainLayout', {main: 'guesses'});
	}
});


FlowRouter.route('/upcoming-matches', {
	name: 'upcoming-matches',
	action() {
		BlazeLayout.render('mainLayout', {main: 'upcoming-matches'});
	}
});

var signedRoutes = FlowRouter.group({
	prefix: '/signed',
	// triggersEnter:[isLoggedInTrigger]
	triggersEnter: [AccountsTemplates.ensureSignedIn],
});


signedRoutes.route('/home', {
	name: 'home',
	action() {
		BlazeLayout.render('mainLayout', {main: 'home'});
	}
});

signedRoutes.route('/events', {
	name: 'events',
	action() {
		BlazeLayout.render('mainLayout', {main: 'events'});
	}
});

//Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn', {
	layoutType: 'blaze',
	layoutTemplate: 'mainLayout',
  contentRegion: 'main',
  redirect: 'home'
});
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');
