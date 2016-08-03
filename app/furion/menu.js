var fs = require('fs');
var winston = require('winston');

var misc = require('../../core/lib/misc');

var routeTable = misc.getRouteTable();
// var routeTable = require('../../core/config/route_default');
// or sometime need to make your own routeTable
// and update own route table

var Menu = [
    {
        id: 'index',
        name: '홈',
        url: routeTable.root
    },
    {
        name: '새글쓰기',
        logged: 1,
        level: 2, grant: 'AMC',
        url: routeTable.teamblog_root + routeTable.teamblog.write
    },
    {
        name: '로그인',
        logged: -1,
        url: routeTable.account_root + routeTable.account.signIn
    },
    {
        name: '로그아웃',
        logged: 1,
        url: routeTable.account_root + routeTable.account.signOut
    }
];

var AdminMenu = [
    {
        id: 'index',
        name: '관리자 홈',
        url: routeTable.admin_root
    },
    {
        id: 'new',
        name: '신규 계정 생성',
        url: routeTable.admin_root + routeTable.admin.accountNew
    },
    {
        id: 'manage',
        name: '운영',
        url: routeTable.manage_root
    }
];

var ManagerMenu = [
    {
        id: 'index',
        name: '운영자 홈',
        url: routeTable.manage_root
    },
    {
        id: 'account',
        name: '계정',
        url: routeTable.manage_root + routeTable.manage.account
    },
    {
        id: 'page_log',
        name: '페이지 로그',
        url: routeTable.manage_root + routeTable.manage.pageLog
    },
    {
        id: 'admin',
        name: '관리',
        url: routeTable.admin_root
    }
];

function menuExpose(req, res, next) {

    // var pages = BLITITOR.route.pages;
    // console.log('pages:', pages);

    //todo: retrieve from database site menu record which should match with `pages` items
    // read from database
    res.locals.menu = Menu;
    res.locals.adminMenu = AdminMenu;
    res.locals.managerMenu = ManagerMenu;

    next();
}

module.exports = Menu;
module.exports.expose = menuExpose;