import { Router } from 'express';
import { Select, Insert,Delete } from './querry.js'
const  fs =require('fs')

const routes = Router();


routes.post('/loggin',(req, res) => {
  const {user}=req.session
  req.session.user=22
   console.log(req.body)
  res.send(JSON.stringify(req.body));
});


routes.get('/list', async (req, res) => {
    console.log(req.headers)
    let {rows}= await Select({from:'list'})
    res.end(JSON.stringify({list:rows}))
  
  
});

routes.get('/list/:id',async (req, res) => {
   let {rows}= await Select({from:'item',where:req.params.id})
   res.end(JSON.stringify({item:rows}))
 
  
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
