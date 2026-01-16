const fs=require("fs");
const http=require("http");

// const readStream=fs.createReadStream("./output.txt",{
//     highWaterMark:64*1024
// })


// readStream.on("data",(chunk)=>{
//     console.log(chunk);
// })

const writeStream=fs.createWriteStream("./info.txt",{
    flags:"a"
})

writeStream.write("\nThis is some text")
writeStream.write("\nThis is some text")
writeStream.write("\nThis is some text")

writeStream.end()

writeStream.on("finish",()=>{
    console.log("writing finsih")
})