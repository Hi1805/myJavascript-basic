var markdownText = 'Hello *Coders.Tokyo*!';
var markdown = require("markdown").markdown;
console.log(markdown.toHTML(markdownText));