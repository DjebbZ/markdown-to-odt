var md2odt = require('../index'),
    assert = require('assert'),
    fs = require('fs'),
    path = require('path');

describe('Markdown to odt', function () {

    describe('parser', function () {

        it('should convert a level 1 title string', function () {
            var src = "# Title",
                expected = '<text:h text:outline-level="1">Title</text:h>';

            assert.equal(md2odt.parse(src), expected);
        });

        it('should convert a level 2 title string', function () {
            var src = "## Title",
                expected = '<text:h text:outline-level="2">Title</text:h>';

            assert.equal(md2odt.parse(src), expected);
        });

        it('should convert a level 3 title string', function () {
            var src = "### Title",
                expected = '<text:h text:outline-level="3">Title</text:h>';

            assert.equal(md2odt.parse(src), expected);
        });

        it('should convert a level 4 title string', function () {
            var src = "#### Title",
                expected = '<text:h text:outline-level="4">Title</text:h>';

            assert.equal(md2odt.parse(src), expected);
        });

        it('should convert a level 5 title string', function () {
            var src = "##### Title",
                expected = '<text:h text:outline-level="5">Title</text:h>';

            assert.equal(md2odt.parse(src), expected);
        });

        it('should convert a level 6 title string', function () {
            var src = "###### Title",
                expected = '<text:h text:outline-level="6">Title</text:h>';

            assert.equal(md2odt.parse(src), expected);
        });

        it('should convert a paragraph string', function () {

            var src = 'Lorem ipsum Veniam in magna reprehenderit non eu.',
                expected = '<text:p>Lorem ipsum Veniam in magna reprehenderit non eu.</text:p>';

            assert.equal(md2odt.parse(src), expected);
        });

        it('should properly convert mixed content', function () {

            var src = '# Title\n' +
                        '## Subheading\n' +
                        'Some simple text content.',
                expected = '<text:h text:outline-level="1">Title</text:h>' +
                            '<text:h text:outline-level="2">Subheading</text:h>' +
                            '<text:p>Some simple text content.</text:p>';

            assert.equal(md2odt.parse(src), expected);
        });

    });

    describe('file creator', function () {

        describe('with empty content', function () {

            it('should create a properly formatted empty odt xml file', function (done) {

                var content = '',
                    filename = 'empty',
                    expected = fs.readFileSync(__dirname + '/fixtures/empty.xml', {encoding: 'utf8'});

                md2odt.createDocFromContent(filename, content, function (err, filePath) {
                    if (err) return done(err);

                    assert(fs.existsSync(filePath), "File hasn't been created");

                    content = fs.readFileSync(filePath, {encoding: 'utf8'});
                    assert.equal(content, expected, "File doesn't have empty odt content");

                    // Remove created file, avoid pollution
                    fs.unlink(filePath, function(err) {
                        if (err) return done(err);
                        done();
                    });
                });

            });

        });

        describe('with basic heading and paragraph content', function() {

            it('should create a proper odt xml file', function (done) {

                var expected = fs.readFileSync(__dirname + '/fixtures/heading-paragraph.xml', {encoding: "utf8"}),
                    content = "# My title\n" +
                        "\n" +
                        "Lorem ipsum FTW.";

                md2odt.createDocFromContent('testFileName', content, function (err, filePath) {
                    if (err) return done(err);

                    assert(fs.existsSync(filePath), "File hasn't been created");

                    content = fs.readFileSync(filePath, {encoding: 'utf8'});
                    assert.equal(content, expected/*, "File doesn't have proper odt content"*/);

                    // Remove created file, avoid pollution
                    fs.unlink(filePath, function(err) {
                        if (err) return done(err);
                        done();
                    });
                });

            });

        });

    });

});