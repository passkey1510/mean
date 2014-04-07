var assetmanager = require('assetmanager');
var config = require('./config');

var jsonAssets = require('./assets.' + process.env.NODE_ENV + '.json');

assetmanager.init({
    js: jsonAssets.js,
    css: jsonAssets.css,
    debug: (process.env.NODE_ENV !== 'production')
});


var assets = {
    getAssets : function(raw) {
        if (true === raw) {
            return {
                js: jsonAssets.js,
                css: jsonAssets.css
            }
        }

        return {
            js: assetmanager.assets.js,
            css: assetmanager.assets.css
        };
    }
}

module.exports = assets;