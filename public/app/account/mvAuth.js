angular.module('app').factory('mvAuth', function($http, mvIdentity, $q, mvUser, mvNotifier){
  
  return {
    authenticateUser: function(username, password){
      
      var dfd = $q.defer();
      
      $http.post('/login', {username: username, password: password})
        .then(function(response){
          
          if(response.data.success){
            var user = new mvUser(); 
            angular.extend(user, response.data.user);

            mvIdentity.currentUser = user;
            dfd.resolve(true);
            console.log('logged in!');
            mvNotifier.notify('You have successfully logged in');
          }
          
          else{
            console.log('failed to log in');
            mvNotifier.notify('Username/password combo incorrect ');
            dfd.resolve(false);
          }

        });

        return dfd.promise;
    
    }, 
    logoutUser: function(){
      var dfd = $q.defer();
      $http.post('/logout', {logout:true})
        .then(function(){
          mvIdentity.currentUser = undefined; 
          dfd.resolve();
        });
        return dfd.promise;
    },
    authorizeCurrentUserForRoute: function(role){
        if(mvIdentity.isAuthorized(role))
        {
          return true; 
        }
        else
        {
          return $q.reject('not authorized');
        }
    }

  }

});