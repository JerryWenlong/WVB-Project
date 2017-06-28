require("jquery");
require('./style.css');
let ContentToc = require('selfDir/contentToc.js').default

let Toc = new ContentToc({container:$('body')})
