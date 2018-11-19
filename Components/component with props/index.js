Vue.component('leon-codes', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
    el: '#app',
    data: {
      groceryList: [
        { id: 0, text: 'Hummus' },
        { id: 1, text: 'Chips' },
        { id: 2, text: 'Salad' }
      ]
    }
})