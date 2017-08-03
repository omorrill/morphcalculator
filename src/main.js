var apiURL = './src/data.json';

let vm = new Vue({
	el: '#app',
	data: {
		dam: [],
		sire: [],
		morphs: [],
		damgene: [],
		siregene: []
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
		
			let damgene = this.damgene;
			let siregene = this.siregene;

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
