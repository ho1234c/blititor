var fs = require('fs');
var winston = require('winston');
var Account = require('../account');
var Guestbook = require('../guestbook');

var accountMiddleware = Account.middleware;
var guestbookMiddleware = Guestbook.middleware;

var Menu = [
    {page: 'index', type: 'get', url: '/', middleware: [function (req, res, next) {
        console.log('md 1');
        next();
    }, function (req, res, next) {
        console.log('md 2');
        next();
    }], name: '홈'},
    {
        name: '팀 블로그',
        page: 'blog', type: 'get', url: '/blog',
        middleware: [],
        route: true,
    },
    {
        name: '방명록',
        page: 'guestbook', type: 'get', url: '/guest',
        middleware: [],
        route: false,
    },
    {
        name: '소개',
        page: 'about', type: 'get', url: '/about',
        middleware: [],
        route: true,
    },
    {
        name: '새글쓰기',
        page: 'write', type: 'get', url: '/blog/write',
        middleware: [accountMiddleware.checkSignedIn],
        route: true,
        logged: 1,
        level: 2, grant: 'AMC'
    },
    {
        name: '로그인',
        page: 'sign_in', type: 'get', url: '/account/sign-in',
        middleware: [],
        route: true,
        logged: -1
    },
    {
        name: '가입하기',
        page: 'sign_up', type: 'get', url: '/account/sign-up',
        middleware: [accountMiddleware.checkLoggedSession],
        route: true,
        logged: -1
    },
    {
        name: '로그아웃',
        page: 'sign_out', type: 'get', url: '/account/sign-out',
        middleware: [],
        route: true,
        logged: 1
    },
];

function menuExpose(req, res, next) {

    // var pages = BLITITOR.route.pages;
    // console.log('pages:', pages);

    //todo: retrieve from database site menu record which should match with `pages` items
    // read from database
    res.locals.menu = Menu;

    next();
}

function menuData() {
    return Menu;
}

module.exports = {
    expose: menuExpose,
    data: menuData
};