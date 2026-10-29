const http = require("http");
const fs = require("fs");
const path = require("path");
const root = __dirname;
const types = {".html":"text/html; charset=utf-8",".js":"application/javascript; charset=utf-8",".css":"text/css; charset=utf-8",".mp3":"audio/mpeg",".mp4":"video/mp4",".svg":"image/svg+xml"};

http.createServer((req,res)=>{
  const url = new URL(req.url,"http://localhost");
  const safe = path.normalize(decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname)).replace(/^([.][.][\\/])+/,"");
  const file = path.join(root,safe);
  if (!file.startsWith(root)) { res.writeHead(403); return res.end("No autorizado"); }
  fs.stat(file,(err,stat)=>{
    if(err || !stat.isFile()){res.writeHead(404);return res.end("Archivo no encontrado");}
    res.writeHead(200,{"Content-Type":types[path.extname(file).toLowerCase()]||"application/octet-stream","Accept-Ranges":"bytes"});
    fs.createReadStream(file).pipe(res);
  });
}).listen(8123,()=>console.log("Fuga lista en http://localhost:8123"));
