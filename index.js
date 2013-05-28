/**
 * markdown-to-odt - a markdown to odt converter
 * Copyright (c) 2011-2013, Khalid Jebbari. (MIT Licensed)
 * https://github.com/djebbz/markdown-to-odt
 */

var marked = require('marked'),
    fs = require('fs'),
    md2odt = {},
    rules,
    parser;

rules = {
    // space: ,
    // code: ,
    heading: function(item) {
        return '<text:h text:outline-level="' + item.depth + '">' +
                item.text +
                '</text:h>';
    },
    // table: ,
    // hr: ,
    // blockquote_start: ,
    // blockquote_end: ,
    // list_start: ,
    // loose_item_start: ,
    // list_item_start: ,
    // list_item_end: ,
    // list_end: ,
    paragraph: function (item) {
        return '<text:p>' + item.text + '</text:p>';
    },
    // html: ,
    // text: function (item) {
    //   return '<text:p>' + item.text + '</text:p>';
    // }
};

parse = function (src) {
    'use strict';

    var lexed = marked.lexer(src),
        out = '';

    lexed.forEach(function (item) {
        if (rules[item.type]) {
            out += rules[item.type](item);
        } else {
            throw new Error("Markdown token not supported : " + item.type);
        }
    });

    return out;

};

md2odt.parse = parse;
md2odt.rules = rules;

module.exports = md2odt;