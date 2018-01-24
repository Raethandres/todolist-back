import { Router } from 'express';
import { Select, Insert } from './querry.js'
const  fs =require('fs')

const routes = Router();
var Cub=Array()





routes.get('/list', async (req, res) => {
  let {rows}= await Select({from:'list'})
  res.end(JSON.stringify(rows))
  
});

routes.get('/list/:id',async (req, res) => {
   let {rows}= await Select({from:'item',where:req.params.id})
   res.end(JSON.stringify(rows))
  
});

routes.post('/list/:id',async (req, res) => {

  let { rows }= await Insert({from:'item',val:'(name,id_li)',vals:'($1,$2)',values:[req.body.item, parseInt(req.params.id)]})
  res.end(JSON.stringify({name:req.body.item,id:rows[0].id_it}))
    
  });

routes.post('/list', async(req, res) => {
  let {rows}= await Insert({from:'list',val:'(name)',vals:'($1)',values:[req.body.list]})
  console.log(rows)
  res.end(JSON.stringify({name:req.body.list,id:rows[0].id}))
  
  
});

routes.put('/list', (req, res) => {
  let r=Cub.findIndex((element)=>{if(element.x==req.body.x && element.y==req.body.y && element.z==req.body.z){return element}})
  Cub[r]=Object.assign(Cub[r],{v: parseInt(req.body.v)})
  res.end(JSON.stringify({cub:Cub}))
});

routes.delete('/list/:id',async (req, res) => {
  let {rows} = await Delete({from:'list',id:'id',values:[req.params.id]})
  res.end(JSON.stringify(parseInt(req.params.id)))
  
});

routes.delete('/list/:id/:it',async (req, res) => {
  let {rows} = await Delete({from:'item',id:'id_li',values:[req.params.id]})
  res.end(JSON.stringify(parseInt(req.params.it)))
  
});

export default routes;
