import express from 'express';
import {getall, getbyid} from '../controller /get.controller.js'
const router = express.Router();

router.get("/", getall)
router.get("/:id", getbyid)

export default router

