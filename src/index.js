import Vue from 'vue'
import MyApp from './MyApp.vue'

/* Note that the main app is itself a component from a .vue file
You need to import the component for the main app component (MyApp) here,
then pass it into the render function. The el element specified here
will be replaced by the app. From there, the app component can import and use
sub-components, sub-sub-components, and so on to construct the app.
*/

/* Rendering some JSON is one way to pass server data into the Vue app.
You could also pull it from the HTML.
*/
var myVehicles = {boat: 'Canoe', car: 'Lamborghini', plane: 'Cessna'}

var sweetApp = new Vue({
  el: '#my-awesome-app',
  data: function () {
    return {
      car: myVehicles.car
    }
  },
  created: function () {
    // You could do some stuff here too if you need additional setup
  },
  render: function (h) {
    const myCar = this.car
    return h(MyApp, {props: {car: myCar}})
  }
})

/* Let's make it reactive! The button will modify the Vue data
in the main app and the changes will trickle down throughout the sub components.
*/
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('do-reactive').addEventListener('click', function () {
    sweetApp.car = 'Ford'
  })
})
