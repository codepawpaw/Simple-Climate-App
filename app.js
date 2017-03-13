/**********************************************************************
 * File: app.js
 * Module: Dhoni
 * 
 * Description:
 * Chatbot Engine dedicated for Quiz
 * 
 **********************************************************************/


/***********************************************************************
 * Clusters
 ***********************************************************************/
var cluster = require('cluster');


/***********************************************************************
 * OS
 ***********************************************************************/
var os = require('os');

if (cluster.isMaster) {
  // Fork workers
  // Server
  if(os.cpus().length > 4) {
    // Big server
    if(os.cpus().length >= 16) {
      for (var i = 0; i < os.cpus().length; i++) {
        cluster.fork();
      }
    }
    // Small server
    else {
     for (var i = 0; i < 8; i++) {
        cluster.fork();
      }
    }
    for (var i = 0; i < 8; i++) {
      cluster.fork();
    }
  }
  // Desktop
  else {
    for (var i = 0; i < 2; i++) {
      cluster.fork();
    }
  }

  Object.keys(cluster.workers).forEach(function(id) {
    console.log("Worker: " + cluster.workers[id].process.pid + " started");
  });

  cluster.on('exit', function(worker, code, signal) {
    console.log('Worker:' + worker.process.pid + ' died');
    cluster.fork();
  });
}
else {
  var expressApp = require(__dirname + '/expressApp.js');
}