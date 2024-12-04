import express from "express";
import cors from "cors";

const express = require('express');

const app = express();

app.use(express.json());


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