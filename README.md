markdown-to-odt, aka md2odt
===========================

Convert Markdown to Open Document Text

### Goals

- Provide a tool to allow for writing Open Document Text files (ODT) using Markdown.
- Provide a library that works in Node.js, the browser and Require.js for maximum flexibility.
- Produce ODT content that follow the [official ODF 1.2 specs](http://docs.oasis-open.org/office/v1.2/OpenDocument-v1.2.html) and pass the [ODF validator](http://opendocumentfellowship.com/validator).

### Why Markdown ?

Markdown is nice for writing formatted text as its syntax is simple and almost unobtrusive.

### Why plain text ?

Plain text plays nicely with version control and allows edition by multiple people, whereas ODT don't.

### Dependencies

This project use [Marked](https://github.com/chjj/marked), a plain javascript Markdown parser.

### Tests

The tests are written using [Mocha](https://github.com/visionmedia/mocha). To run them type `make test` in the console/Terminal.

### License

The MIT License (MIT)

Copyright (c) 2013 Khalid Jebbari

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

