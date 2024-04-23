import Vue from 'vue'

Vue.filter('jtitle', function (val) {
	switch (Number(val)) {
		case 1:
			return '一等奖';
		case 2:
			return '二等奖';
		case 3:
			return '三等奖';
		default:
			break;
	}
})