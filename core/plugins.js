/*
 *
 * Loading SourceJS plugins
 *
 * */

var fs = require('fs');
var path = require('path');
var pathToModules = path.join(global.app.get('user'),'node_modules');
var userModulesFiles = fs.readdirSync( pathToModules );

// Loading all sourcejs-*/core/index.js files from npm plugins section
userModulesFiles.map(function(file){
    if ((/^sourcejs-/).test(file)) {
        var pluginIndexPath = path.join(pathToModules, file, 'core','index.js');

        if(fs.existsSync(pluginIndexPath)) {
            require(pluginIndexPath);
        }
    }
});