import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.absoluteUrl('http://localhost:3000');

  ServiceConfiguration.configurations.upsert(
    { service: 'facebook' },
    {
      $set: {
        appId: '1307908592577868',
        loginStyle: 'popup',
        secret: 'aece896c21ffafb04048928040dfd07e'
      }
    }
  );

  ServiceConfiguration.configurations.upsert(
    { service: 'google' },
    {
      $set: {
        clientId: '36364121217-q7m45hgi3t7ebgv0du1bf9ktee1aejno.apps.googleusercontent.com',
        loginStyle: 'popup',
        secret: 'rcr57yZLvfDE_N3ZKlTcgjVs'
      }
    }
  );
});
