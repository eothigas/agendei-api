import express from "express";
import cors from "cors";

const express2 = require('express');

const app = express2();

app.use(express2.json());


app.get('/',(request,response)=>{
  return response.json({message:'Server is up'});
})

app.get('/atualizou',(request,response)=>{
  return response.json({message:'atualizou mesmo!'});

})
app.post('/teste',(request,response)=>{
  const {name,date} = request.body;

  return response.json({name,date});

})

app.listen(3333)