var apiURL = './data.json';
			
let vm = new Vue({
	el: '#app',
	name: 'morph-list',
	data: {
		morphs: ''
	}
});
$.getJSON('src/data.json', function (morphs) {
	app.morphs = morphs;
});