var app = new Vue({
	el: '#app',
	data : {
		text: 'How you doing?'
	},
	methods: {
		reverseText: function() {
			this.text = this.text.split('').reverse().join('')
		}
	}
});