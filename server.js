var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



/*

var try1={
    date:"sept 21",
    name:"ashutosh",
    content:"<b>hello hello hello hello hello hello hello hello  </b>",
};




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



app.get('/ui/img.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'img.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
