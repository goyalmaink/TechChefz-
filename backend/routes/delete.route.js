import express from 'express';
import { deleteall, deletebyid } from '../controller /delete.controller.js';
const router = express.Router();

router.delete("/", deleteall)
router.delete("/:id", deletebyid)

export default router