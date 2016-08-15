var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry : [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'    
    ],    
};