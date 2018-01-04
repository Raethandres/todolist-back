import { Router } from 'express';
const  fs =require('fs')

const routes = Router();

/**
 * GET home page
 */

 const generate=(Ini,End)=>{

  let M=Array()

  let s=Object.assign({},Ini)
  let e=Object.assign({},End)
  let sa=Object.assign({},s)

  while(true){
    M.push({x:sa.x,y:sa.y,z:sa.z})
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
  res.render('index', { title });
  
});

routes.get('/generate', (req, res) => {
  cont Cub=generate({1,1,1},{req.x,req.y,req.z})
  res.render('index', { title });
});

routes.post('/update', (req, res) => {
  r=Cub.findIndex((element)=>{if(element.x==req.x && element.y==req.y && element.z==req.z){return element}})
  Cub[r]=Object.assign({},{v:req.v})
  res.render('index', { title });
});

routes.get('/querry', (req, res) => {
    r=M.findIndex((element)=>{if(element.x==se.x && element.y==se.y && element.z==se.z){return element}})
  res.render('index', { title });
});

export default routes;
