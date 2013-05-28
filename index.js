/**
 * markdown-to-odt - a markdown to odt converter
 * Copyright (c) 2011-2013, Khalid Jebbari. (MIT Licensed)
 * https://github.com/djebbz/markdown-to-odt
 */

var marked = require('marked'),
    fs = require('fs'),
    m2odt = {},
    rules,
    parser;

rules = {
    space: ,
    code: ,
    heading: ,
    table: ,
    hr: ,
    blockquote_start: ,
    blockquote_end: ,
    list_start: ,
    loose_item_start: ,
    list_item_start: ,
    list_item_end: ,
    list_end: ,
    paragraph: ,
    html: ,
    text:
}

parse = function (src) {
    'use strict';

    var lexed = marked.lexer(src),
        out = '';

    lexed.forEach(function (item) {

    });

};

m2odt.parse = parse;
m2odt.rules = rules;

module.exports = m2odt;