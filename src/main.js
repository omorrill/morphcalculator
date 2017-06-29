var apiURL = './src/data.json';
	
let vm = new Vue({
	el: '#app',
	data: {
		dam: [],
		sire: [],
		morphs: []
	  },
	  methods: {
		getMorphs: function() {
		  let that = this;
		  let request = new XMLHttpRequest();
		  request.open('GET', apiURL, true);

		  request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
			  // Success!
			  that.morphs = JSON.parse(request.responseText);
			} else {
			  // We reached our target server, but it returned an error
			}
		  };

		  request.send();
		},
		clutch() {
			let dam = this.dam;
			let sire = this.sire;
			
			if (damArr == "res") {
				console.log('res');
			} else {
				console.log(sireArr);
			}
			
			console.log(dam + ' with ' + sire);
		}
	  },
	  computed: {
		marry() {
			let dam = this.dam;
			let sire = this.sire;
			let clutch = dam + ' ' + sire;
			return clutch;
		}
	  },
	  mounted () {
		this.getMorphs()
	  }
});
	
	