import express from 'express'
import cors from 'cors'
import topicRoutes from './routes/topics.routes.js'
import articlesRoutes from './routes/articles.routes.js'
const app=express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/topics',topicRoutes)
app.use('/articles',articlesRoutes)

app.listen(8080,()=>{
  console.log('server is running..)');
})