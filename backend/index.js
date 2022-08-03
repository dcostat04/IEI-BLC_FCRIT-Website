var express = require('express')
var multer = require('multer')
var cors = require('cors')
// var nodemon = require
var fs = require('fs');
var merge = require('easy-pdf-merge');
var app = express();

app.options('*', cors())

app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','"Origin, X-Requested-With, Content-Type, Accept"');
  next();
});


const upload = multer({ dest: './public/data/uploads/' })
app.post('/stats', upload.single('uploaded_file'), function (req, res) {
   // req.file is the name of your file in the form above, here 'uploaded_file'
   // req.body will hold the text fields, if there were any 
   console.log(req.file, req.body)
});



app.post('/upload' ,(req, res) => {
  console.log("request body : ",req.files);
  const storage = multer.diskStorage({
    
    destination: function (req, file, cb) {
      const dirName = "docs/"+Date.now() + '-' + Math.round(Math.random() * 1E9)
    fs.mkdirSync(dirName);
    console.log(dirName);
      cb(null,dirName);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })
  
  const upload = multer({ storage: storage }).any();
  upload(req, res, function (err) {
    console.log("request file : ", req.files);
    if (err instanceof multer.MulterError) {
      console.log("Err ",err)
      return
        } else if (err) {
          console.log("err", err)
      // An unknown error occurred when uploading.
    }
    // console.log("res",res)
    res.send({"ret":"success"})
    // Everything went fine.
  })
});




var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + file.originalname
    );
  },
});

var dir = "public";
var subDirectory = "public/uploads";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);

  fs.mkdirSync(subDirectory);
}

var mergepdffilesupload = multer({storage:storage})

app.get('/test', function(req, res) {
  res.json({'status':'working'});
  res.status(200)
});
app.post('/mergepdf',mergepdffilesupload.array('userDoc',3),(req,res) => {
  console.log("post call working")
  // console.log("files",req);

  const files = []
  outputFilePath = dir+"/response/response_"+Date.now()+".pdf";
  if(req.files && req.files.length==3){

    req.files.forEach(file => {
      console.log(file.path)
      var filePath = file.path;
      console.log(file.path)
      if (!filePath.endsWith(".pdf")){
        fs.rename(filePath,filePath+".pdf", () => {
          console.log("\nFile Renamed!\n");
        });
        filePath = filePath+".pdf";
      }
      files.push(filePath)
    });

      merge(files,outputFilePath, function (err) {
          files.forEach(file => {
        fs.unlink(file, function (err) {
          if (err){ 
            res.status(404).json({error:'Improper files received!'});
            throw err;
          }
          // if no error, file has been deleted successfully
          console.log('File deleted!');
        });
        });
          if (err) {
            res.status(404).json({error:'File handling error!'});
              return console.log(err)
          }
          else{
            console.log('Success');
            res.status(202).json({mssg:'Response recorded successfully'});
          }
      });
     
}
else{
  files.forEach(file => {
    fs.unlink(file, function (err) {
      if (err){ 
        res.status(404).json({error:'Improper files received!'});
        throw err;
      }
      // if no error, file has been deleted successfully
      console.log('File deleted!');
    });
    });
    res.status(404).json({error: 'Invalid request'});
}
});

var server = app.listen(3000, ()=>{
    console.log("port used", server.address().port);
})