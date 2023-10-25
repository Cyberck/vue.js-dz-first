

const app = {
  data() {
    return {
      count: 'DZ',
			buttonIn: 'Green',
			buttonInSec: 'Red',
			buttonInThird: 'Orange',
			color: 'start',
			holder: '',
			show: true,
			activeColor: 'red',
    }
  },

	methods: {
		addCount() {
		}
	},
}



Vue.createApp(app).mount('#app')


