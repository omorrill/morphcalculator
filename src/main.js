var apiURL = './src/data.json';

let vm = new Vue({
	el: '#app',
	data: {
		dam: [],
		sire: [],
		morphs: [],
		damgene: [],
		siregene: [],
		clutchResults: ''
  },
  methods: {
		getMorphs: function() {
		  let that = this;
		  $.getJSON( "src/test.json", function( data ) {
				that.morphs = data;
				console.log(data);
		  });
		},
		clutch() {
			let that = this;
			let dam = that.dam;
			let sire = that.sire;

			var damArr = $.map(dam, function(value, index) {
			    return [value];
			});
			var sireArr = $.map(sire, function(value, index) {
			    return [value];
			});

			console.log(damArr[0]["gene"]);
			console.log(sireArr[0]["gene"]);
			let damGene = (damArr[0]["gene"]);
			let sireGene = (sireArr[0]["gene"]);

			if (damGene == 'dominant' && sireGene == 'dominant') {
				var results = 'Everything will be dominant!';
			} else if (damGene == 'recessive' && sireGene == 'dominant') {
				var results = '1/4 will be dominant, 2/4 will be het, and 1/4 will be normal.';
			} else if (damGene == 'recessive' && sireGene == 'recessive') {
				var results = 'They will all have recessive!';
			} else {
				var results = "I couldn't figure out what you mean, try that shit again.";
			}

			console.log(results);
			that.clutchResults = results;
		}
  },
  computed: {
		marry(dam, sire) {
			let that = this;
			let results = that.clutchResults;
			return('You returned marry. -> ' . results);
		}
  },
  mounted () {
		this.getMorphs()
  }
});


/*
If het and het, 100% of clutch will be het.
If het and res,
*/
