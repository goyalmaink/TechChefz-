import express from 'express'
import posting from '../controller /post.controller.js'
const router = express.Router();


router.post("/", posting)

export default router