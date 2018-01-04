import { Router } from 'express';
const  fs =require('fs')

const routes = Router();

/**
 * GET home page
 */

 const generate=(Ini,End)=>{

  let M=Array()

  let s={x:1,y:1,z:1,v:0}
  let e={x:50,y:50,z:50}
  let sa=Object.assign({},s)
  let co=0
  let se={x:3,y:3,z:6}

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
    r=M.findIndex((element)=>{if(element.x==se.x && element.y==se.y && element.z==se.z){return element}})
    return M

 }

routes.get('/', (req, res) => {
  res.render('index', { title });
  
});

routes.get('/generate', (req, res) => {
  req.length.x
  cont Cub=generate({1,1,1},{req.x,req.y,req.z})
});
/**
 * GET /list
 *
 * This is a sample route demonstrating
 * a simple approach to error handling and testing
 * the global error handler. You most certainly want to
 * create different/better error handlers depending on
 * your use case.
 */
routes.get('/list', (req, res, next) => {
  const { title } = req.query;

  if (title == null || title === '') {
    // You probably want to set the response HTTP status to 400 Bad Request
    // or 422 Unprocessable Entity instead of the default 500 of
    // the global error handler (e.g check out https://github.com/kbariotis/throw.js).
    // This is just for demo purposes.
    next(new Error('The "title" parameter is required'));
    return;
  }

  res.render('index', { title });
});

export default routes;
