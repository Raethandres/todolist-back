import { Router } from 'express';
import { Select, Insert,Delete } from './querry.js'
const  fs =require('fs')

const routes = Router();


routes.get('/', async (req, res) => {
    console.log(req.headers)
    res.end("BIENVENIDO")
  
  
});

routes.post('/user', async(req, res) => {
  
  let {rows}= await Insert({from:'use',val:'(token)',vals:'($1)',values:[req.body.token]})
  console.log(rows)
  res.end(JSON.stringify({name:req.body.token,id:rows[0].id}))
  
  
});

routes.get('/list', async (req, res) => {
    console.log(req.headers)
    let {rows}= await Select({from:'list',where:req.headers.authorization})
    res.end(JSON.stringify({list:rows}))
  
  
});

routes.get('/list/:id',async (req, res) => {
   let {rows}= await Select({from:'item',it:req.params.id})
   res.end(JSON.stringify({item:rows}))
 
  
});

routes.post('/list/:id',async (req, res) => {
  
  let { rows }= await Insert({from:'item',val:'(name,id_li)',vals:'($1,$2)',values:[req.body.item, parseInt(req.params.id)]})
  res.end(JSON.stringify({name:req.body.item,id:rows[0].id_it}))
  });

routes.post('/list', async(req, res) => {
  
  let {rows}= await Insert({from:'list',val:'(name,id_us)',vals:'($1,$2)',values:[req.body.list,req.headers.authorization]})
  console.log(rows)
  res.end(JSON.stringify({name:req.body.list,id:rows[0].id,user:req.body.user}))
  
  
});

routes.put('/list', (req, res) => {
  if (req.session.user) {
  res.end(JSON.stringify(1))
  }else{
    res.end(JSON.stringify({error:"not loggin"}))
  }

});

routes.delete('/list/:id',async (req, res) => {
  if (req.session.user) {
  let {rows} = await Delete({from:'list',id:'id',values:parseInt(req.params.id)})
  res.end(JSON.stringify(parseInt(req.params.id)))
  }else{
    res.end(JSON.stringify({error:"not loggin"}))
  }
  
});

routes.delete('/list/:id/:it',async (req, res) => {
  if (req.session.user) {
  let {rows} = await Delete({from:'item',id:'id_it',values:parseInt(req.params.it)})
  res.end(JSON.stringify(parseInt(req.params.it)))
  }else{
    res.end(JSON.stringify({error:"not loggin"}))
  }
  
});

export default routes;
