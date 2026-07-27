import { Router } from "express";
import { NoticeController } from "./notice.controller.js";

const router = Router();
const noticeController = new NoticeController();

router.get(
  "/:noticeId",
  noticeController.viewNoticeDetail.bind(noticeController)
);

export default router;