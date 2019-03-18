const http = require('http');

const server = http.createServer((req,res)=>{
  

  let j = {};
  req.headers['x-forwarded-for']? j.ipadress=req.headers['x-forwarded-for'].split(',')[0] : j.ipadress = '127.0.0.1';
  j.language = req.headers["accept-language"];
  j.software = req.headers["user-agent"];
  res.setHeader("200", {'content-type' : 'application/json'});
  res.end(JSON.stringify(j));

});

const PORT = process.env.PORT || 1337;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
