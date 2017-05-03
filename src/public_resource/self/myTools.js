let myTools = {
    codeHtmlRander: function(codeHtml, {s='\n'}={}){
        let result = [];
        codeHtml.split(s).forEach(function(v){
            let r = `<li><code>${v}</code></li>`
            result.push(r)
        });
        return `<ul>${result.join('')}</ul>`;
    },
    randerHtmlCodeStr: function(str){
        return this.codeHtmlRander(str)
    }
}

module.exports = myTools