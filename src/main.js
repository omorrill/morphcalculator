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
		  $.getJSON( "src/data.json", function( data ) {
			that.morphs = data;
			console.log(data);
		  });
		},
		clutch() {
			let dam = this.dam;
			let sire = this.sire;
			
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
	
	