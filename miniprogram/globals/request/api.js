const MODE = "devlopment";
// const MODE = 'production';
const VERSION = "V0.0.1";
const PRODUCTION_APPID = 7;
const PRODUCTION_PREFIX = "https://course.jiker.com";
const DEVELOPMENT_PREFIX = "https://course.jiker.vip";
const PREFIX = MODE === "production" ? PRODUCTION_PREFIX : DEVELOPMENT_PREFIX;
export default {
  MODE,
  version: VERSION,
  app_id: PRODUCTION_APPID,
  courseIndex: `${PREFIX}/api/miniprogram/course`,
  category: `${PREFIX}/api/miniprogram/course/category`,
  courseSearch: `${PREFIX}/api/miniprogram/course/search`,
  courseItem: id => `${PREFIX}/api/miniprogram/course/${id}`
};