import { GET, POST } from '@/utils/request'


const listuser = data => POST('/api/entry-record/list', data)// 获取签到列表
const luckdraw = data => POST('/api/activity/luck-draw', data)// 抽奖


export default {
	listuser,
	luckdraw
}