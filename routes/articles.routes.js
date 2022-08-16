import { Router } from "express";
import { Allarticles, Createarticles, Deletearticles, Topicarticles } from "../services/article.service.js";

const router = Router()

router.get('/', async(req,res)=>{
  try {

    const result = await Allarticles()

    res.json({
      message: 'all articles retrived',
      articles: result.rows
    })
  } catch (err) {
    res.status(500).json({
      message: 'Internal server Error',
      error: err
    })
  }
})


router.get('/:topic_id', async (req, res) => {
  try {

    const result = await Topicarticles(req.params.topic_id)

    res.json({
      message: ' articles found',
      articles: result.rows
    })
  }
  catch (err) {

    console.log(err);

    res.status(500).json({
      message: 'Internal server Error',
      error: err
    })
  }
})

router.post('/',async (req,res)=>{
  try{
    const{topic_id,title,content,date}=req.body
    await Createarticles(topic_id,title,content,date)
    res.json({
      message:'create articles'
    })
  }
  catch(err){
    console.log(err);
    res.status(500).json({
      message:'Internal server Error',
      error:err
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    await Deletearticles(id)
    res.json({
      message: 'delete articles'
    })
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Internal server Error',
      error: err
    })
  }
})

export default router