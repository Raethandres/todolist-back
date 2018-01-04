import { Router } from 'express';
const  fs =require('fs')

const routes = Router();
var Cub=Array()


/**
 * GET home page
 */

 const generate=(Ini,End)=>{

  let M=Array()

  let s=Object.assign({},Ini)
  let e=Object.assign({},End)
  let sa=Object.assign({},s)

  while(true){
    M.push({x:sa.x,y:sa.y,z:sa.z,v:sa.v})
    if(sa.z<e.z){
      sa.z+=1

    }else if(sa.y<e.y){
      sa=Object.assign(sa,{z:s.z})
      sa.y+=1
    }else if(sa.x<e.x){
      sa=Object.assign(sa,{z:s.z})
      sa=Object.assign(sa,{y:s.y})
      sa.x+=1
    }else{

      break
    }
  }
    return M

 }

routes.get('/', (req, res) => {
  res.end("binvenido");
  
});

routes.post('/generate', (req, res) => {
  console.log(req.body)
  Cub=generate({x:1,y:1,z:1,v:0},{x:req.body.x,y:req.body.y,z:req.body.z})
  console.log(Cub)
  res.end(JSON.stringify({cub:Cub}))
});

routes.post('/update', (req, res) => {
  let r=Cub.findIndex((element)=>{if(element.x==req.body.x && element.y==req.body.y && element.z==req.body.z){return element}})
  Cub[r]=Object.assign(Cub[r],{v: parseInt(req.body.v)})
  res.end(JSON.stringify({cub:Cub}))
});

routes.post('/querry', (req, res) => {
  let subCub=Cub.slice(Cub.findIndex((element)=>{if(element.x==req.body.xi && element.y==req.body.yi && element.z==req.body.zi){return element}}),Cub.findIndex((element)=>{if(element.x==req.body.xe && element.y==req.body.ye && element.z==req.body.ze){return element}})+1)
  let count=0
 for (var i = 0, len = subCub.length; i < len; i++) {
  count+=subCub[i].v
  console.log(subCub[i])
}
  res.end(JSON.stringify({valor:count}));
});

export default routes;
