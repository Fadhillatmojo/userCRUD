import express from "express"
import { index, store, update, destroy } from "../controller/userController.js"

const route = express.Router();

route.get("/index", index)
route.post("/store", store)
route.put("/update/:id", update)
route.delete("/destroy/:id", destroy)

export default route;