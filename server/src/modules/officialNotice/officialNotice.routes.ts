import { Router } from 'express';
import { OfficialNoticeController } from './officialNotice.controller.js';

const router = Router();
const officialNoticeController = new OfficialNoticeController();

router.get('/', officialNoticeController.loadNotices.bind(officialNoticeController));

export default router;
