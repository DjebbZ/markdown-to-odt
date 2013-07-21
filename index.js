/**
 * markdown-to-odt - a markdown to odt converter
 * Copyright (c) 2011-2013, Khalid Jebbari. (MIT Licensed)
 * https://github.com/djebbz/markdown-to-odt
 */
var marked = require("marked"),
    fs = require("fs"),
    path = require("path"),
    md2odt = {},
    rules,
    parse,
    docTmpl,
    createDocFromContent;

// associate each content type with a function that returns an ODT string
rules = {
    // space: ,
    // code: ,
    heading: function (item) {
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
    }
    // html: ,
    // text: function (item) {
    //   return '<text:p>' + item.text + '</text:p>';
    // }
};

parse = function (src) {
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

// The 4 empty spaces are because I'm using tabs as 4 spaces in my editor.
docTmpl = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    "<office:document>\n" +
    "    <office:meta></office:meta>\n" +
    "    <office:body>{{body}}</office:body>\n" +
    "    <office:scripts></office:scripts>\n" +
    "    <office:settings></office:settings>\n" +
    "    <office:styles></office:styles>\n" +
"</office:document>";

createDocFromContent = function (fileName, content, callback) {
    var parsed, fileContent, filePath;

    // Parse only non empty content
    if (content !== "") {
        try {
            parsed = parse(content);
        } catch(e) {
            callback(e);
        }
    } else {
        parsed = "";
    }

    // Put content in the right place
    fileContent = docTmpl.replace("{{body}}", parsed);
    fileName = path.basename(fileName) + '.xml';
    filePath = path.join(__dirname, fileName);

    // Write file to disk and proceed
    fs.writeFile(filePath, fileContent, function (err) {
        if (err) return callback(err);
        callback(null, filePath);
    });
};

md2odt.parse = parse;
md2odt.rules = rules;
md2odt.createDocFromContent = createDocFromContent;

module.exports = md2odt;