var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));






var http = require('http');
var Pool =   require('pg').Pool;
var config={
    user:'aashhuttossh',
    database:'aashhuttossh',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};


var try1={
    date:"sept 21",
    name:"ashutosh",
    content:"<b>hello hello hello hello hello hello hello hello  </b>",
};



/*
function CreateTemp(data)
{
    var name11=data.name;
    var date11=data.date;
    var temp11=data.content;

    var htmlTemplate=

`<html>
 <head>
<title> ${name11}'s Page</title>
<meta name="viewport" content="width=device-width, intial-scale=1" />
<link href="/ui/style.css" rel="stylesheet"/>
</head>

<body>
              ${date11}    
    <div>
 <a href="/">${temp11}</a>   
    </div>
  
   
  hello worlda    dsnv    asf
   
   
</body>
</html>`;

    
    return htmlTemplate;
    }
    */


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var pool = new Pool(config);
app.get('/test-db', function (req, res) {
  //make req
  //return response
  var inp=document.getElementById("inp");
  pool.query('SELECT * FROM test',function(err,result){
      if(err){
          res.status(500).send(err.toString());
      }
      else{
          res.send(JSON.stringify(result.rows));
      }
      
  })
});



app.get('/articles/articleOne',function(req,res){
    var articleName=req.params.articleName;
    pool.query("SELECT * FROM article",function(err,result)
    {if(err)
        {res.status(500).send(err.toString());
    }
    else{
        if(result.rows.length===0){
            res.status(404).send('Article not found');
        }
        else{ var articleData=result.rows[0];
        res.send(createTemplate(articleData));
            
        }
        }
    });
    });


app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'login.html'));
});

app.get('/hello', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'hello.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


var counter=0;
app.get('/counter',function (req, res){
    counter=counter+1;
    res.send(counter.toString());
    
});

app.get('/ashutosh', function (req, res) {
  res.send('Its ashutosh here!');
});


app.get('/ashutosh1', function (req, res) {
  res.send('Its ashutosh here twice!');
});


app.get('/ashutosh2', function (req, res) {
  res.send('Its ashutosh here thrice!');
});


app.get('/ui/isrc.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'isrc.js'));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/nptellogo.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'nptellogo.jpg'));
});

app.get('/ui/img.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'img.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
