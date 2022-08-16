import { Router } from "express";
import { Alltopics, Createtopic, Deletetopic } from "../services/topic.service.js";

const router = Router()


router.get('/', async (req, res) => {
  try {

    const result = await Alltopics()

    res.json({
      message: 'all topics retrived',
      topics: result.rows
    })
  } catch (err) {
    res.status(500).json({
      message: 'Internal server Error',
      error: err
    })
  }
})

router.post('/', async (req, res) => {
  try {

    const { name } = req.body

    await Createtopic(name)

    res.json({
      message: ' create Topic'
    })
  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: 'Internal server Error',
      error: err
    })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    await Deletetopic(id)
    res.json({
      message: 'delete topic'
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