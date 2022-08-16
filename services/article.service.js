import { client } from "../configs/database.js";

export function Allarticles(){
  return client.query('SELECT*FROM articles;')
}
export function Topicarticles(topic_id){
  return client.query('SELECT*FROM articles  WHERE topic_id=$1;',[topic_id])
}
export function Createarticles(topic_id,title,content,date){
  return client.query('INSERT INTO articles(topic_id,title,content,date) VALUES($1,$2,$3,$4);',[topic_id,title,content,date])
}
export function Deletearticles(id){
  return client.query('DELETE FROM articles WHERE id=$1;',[id])
}