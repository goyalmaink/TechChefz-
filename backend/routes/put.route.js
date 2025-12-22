import express from 'express';
import {updaetfull,updatepartial} from '../controller /put.controller.js'
const router = express.Router();

router.put("/:id", updaetfull)
router.patch("/updatepartial/:id", updatepartial)

export default router