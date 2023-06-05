import Express  from "express";
import { handlegetDemo, handlepostDemo, handlepatchDemo, handledeleteDemo } from "../controller/Demo.js";
const router=Express.Router();


router.route("/").get(handlegetDemo).post(handlepostDemo)
router.route("/:id").patch(handlepatchDemo).delete(handledeleteDemo)


export default router;