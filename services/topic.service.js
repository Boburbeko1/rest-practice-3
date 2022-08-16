import { client } from "../configs/database.js";

export function Alltopics(){
  return client.query('SELECT*FROM topics;')
}

export function Createtopic(name){
  return client.query('INSERT INTO topics (name) VALUES ($1);',[name])
}
export function Deletetopic(id){
  return client.query('DELETE FROM topics WHERE id=$1;',[id])
}
