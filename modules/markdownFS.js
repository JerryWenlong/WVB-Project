const fs = require('fs');
const path = require('path');
const dir = path.resolve('myFile')
// write
class myFsWriter {
    constructor(fileName){
        this.checkDir()
        this.file = this.getFile(fileName)
    }
    checkDir(){
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);
            console.log(`创建目录${dir}`)
        }
    }
    getFile(fileName){
        let file = `${dir}/${fileName}`;
        return file
    }
    saveAsync(content, success, failed, {encoding = 'utf-8'}={}){
        let file = this.file
        fs.writeFile(file, content, {encoding: encoding}, function(err){
            if(err) {
                console.log('file write failed')
                if(failed) failed()
            }else{
                console.log('file write success')
                if(success) success()
            }
        })
    }
} 
// read

module.exports=myFsWriter