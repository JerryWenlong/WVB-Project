const fs = require('fs');
const path = require('path');
const dir = path.resolve('myFile')
// write
class myFsWriter {
    constructor({fileName=null}={}){
        this.checkDir()
        if(fileName)
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
    writeFileCheck(callback){
        let result = {
            status: 0,
            msg: ''
        }
        let file = this.file;
        fs.open(file, 'wx', (err, fd) => {
            if(err){
                if(err.code === "EEXIST"){
                    result.status = 1;
                    result.msg = 'File already exist.'
                }else{
                    result.status = 2;
                    result.msg = 'Check File write Error!'
                }
            }
            callback(result)
        })
    }
    readFileCheck(fileName, callback){
        let result = {
            status: 0,
            msg: ''
        }
        let file = this.getFile(fileName);
        fs.open(file, 'r', (err, fd) => {
            if(err){
                if(err.code === "ENOENT"){
                    result.status = 1;
                    result.msg = 'File does\'t exist.'
                }else{
                    result.status = 2;
                    result.msg = 'Check File read Error!'
                }
            }
            callback(result)
        })
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
    readDir(success, failed){
        fs.readdir(dir, function(err, files){
            if(err){
                console.log('readDir failed -> ' + err)
                failed()
            }else{
                success(files)
            }
            
        })
    }
    readAsync(fileName, callback){
        let file = this.getFile(fileName);
        fs.readFile(file, 'utf-8', function(err, data){
            if(err){
                console.log('readFile failed!')
                callback({err: true, data: ''})
            }else{
                callback({err: false, data: data})
            }
        })
    }
    readSummary(fileName, callback){
        let file = this.getFile(fileName);
        const size = 500;
        let buf = Buffer.alloc(size, '')
        const offset = 0;
        const position = 0;
        //---- open  read
        fs.open(file, 'r', (err, fd)=>{
            if(err){
                console.log('readFile failed!')
            }else{
                fs.read(fd, buf, offset, size, position, (err, bytesRead, buffer)=>{
                    let data = {
                        title: '',
                        date: '',
                        tags: '',
                        summary: ''
                    }
                    if(err){
                        console.log('Read summary failed!')
                        callback({err: true, data: ''})
                    }else{
                        let summary = buffer.toString();
                        
                        callback({err: false, data: summary})
                    }
                })
            }
        })
    }
} 
// read

module.exports=myFsWriter