var md2odt = require('../index'),
    assert = require('assert');

describe('Markdown to odt', function () {

    describe('parser', function () {

        describe('for titles', function () {

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

        });

        describe('for paragraphs', function() {

            it('should convert a paragraph string', function() {

                var src = 'Lorem ipsum Veniam in magna reprehenderit non eu.',
                    expected = '<text:p>Lorem ipsum Veniam in magna reprehenderit non eu.</text:p>';

                assert.equal(md2odt.parse(src), expected);
            });

        });



    });

});