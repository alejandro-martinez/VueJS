// app.js

/* When creating a vue instance, we have to set the html element we want to target
*  This is the equivalent of ng-app */

new Vue({
  el: '#events',

  /* ViewModel
  * Here we can register any values or collections that hold data
  * for the application */
  data: {
	event: { name: '', description: '', date: '' },
	events: []
  },
  mounted: function() {
  	console.log("paso")
  	/* When the application loads, we want to call the method that initializes
  	* some data */
  	this.fetchEvents();
  	console.log( this.events )
  },
   /* The ready function will run when the application 
   * loads and is useful for calling other methods to initialize the app with data
   */
 
  // Methods we want to use in our application are registered here
  methods: {
  	fetchEvents: function() {
  		console.log("paso")
		var events = [
			{ id: 1, name: 'Event 1', description: 'Ecumque, deleniti nihil libero dignissimos, cum ad.', date: '2015-05-02' },
			{ id: 2, name: 'Event 2', description: 'Repellat dolorum, dolor. Aperiam, dolores id quisquam mollitia eius, iste.', date: '2016-10-02' },
			{ id: 3, name: 'Event 3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ', date: '2017-11-02' }
		];

		// Fills events array and triggers a view update
		console.log(this.events)
		this.$set(this, 'events', events);
	},
  	addEvent: function() {
		if( this.event.name ) {

			// Add the new event
			this.events.push( this.event );

			// Blanks the model definition
			this.event = { name: '', description: '', date: '' };
		}
  	},
  	deleteEvent: function( event ) {
  		if ( confirm( "Are you sure you want to remove the event:" + event.name + "?")) {
  			this.events.$remove( event );
  		}
  	}
  }
});