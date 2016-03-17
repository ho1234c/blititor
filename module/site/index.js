var fs = require('fs');
var misc = require('../../lib/misc');
var knex = require('knex');
var winston = require('winston');

function index(req, res) {
    var params = {
        title: "Home"
    };

    //500 Error
    //throw Error('make noise!');

    // load recent articles

    res.render(BLITITOR.config.site.theme + '/page/index', params);
}

function pages(req, res) {
    var params = {
        page: req.path
    };

    console.log(req.path);

    if (false || isPage) {
        res.render(BLITITOR.config.site.theme + '/page' + req.path, params);
    } else {
        res.render(BLITITOR.config.site.theme + '/page/index', params);
    }
}

module.exports = {
    index: index,
    pages: pages
};