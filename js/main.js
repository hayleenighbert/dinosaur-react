

var AdventureApp = React.createClass({
	sweetAlert: function(){
		swal({
		  title: "Welcome to ",
		  text: "text here",
		  type: "warning",
		  showCancelButton: true,
		  confirmButtonColor: "#DD6B55",
		  confirmButtonText: "Yes, delete it!",
		  closeOnConfirm: false,
		  html: false,
		  imageUrl: "http://www.gifmania.co.uk/Animals-Animated-Gifs/Animated-Dinosaurs/Velociraptors/Velociraptor-Walking-50667.gif"
		}, function(){
		  swal("Deleted!",
		  "Your imaginary file has been deleted.",
		  "success");
		});
	},
	render: function(){
		return (
			<div>
				<h1 onClick={this.sweetAlert}>Dinosaur Adventure</h1>
				<img className="background" src="http://i.imgur.com/8SkzSvM.jpg" />
			

				<Velociraptor />
				<Allosaurus />
				<Velociraptor2 />
				<Pterodactyl />
			</div>
		)

	}
});

var Velociraptor = React.createClass({
	getInitialState: function() {
		return {
			hunger: 100
		};
	},
	mouseOver: function() {
		console.log("hovering");
		$('#velo-hover').show();
	},
	mouseOut: function() {
		console.log("not hovering");

		$('#velo-hover').hide();
	},
	componentDidMount: function(){
		this.state.hunger = setInterval(this.healthDiminish, 100);
		$('#velociraptor').animate({left: "+=800px"}, 2000, this.animation);
	},
	animation: function(){
		var width = Math.floor(Math.random()*$(window).width()-100);
		var height = Math.floor(Math.random()*$(window).height()-100);
		$('#velociraptor').animate({left: width, top: height}, 2000, this.animation2);	
	},
	animation2: function(){
		var width = Math.floor(Math.random()*$(window).width()-100);
		var height = Math.floor(Math.random()*$(window).height()-100);
		$('#velociraptor').animate({left: width, top: height}, 2000, this.animation);	
	},
	healthDiminish: function() {
		$('#velohealthbar').css({width: "-=1px"});
		console.log($('#velohealthbar').width());
		if($('#velohealthbar').width() < 1){
			this.eaten();
			clearInterval(this.state.hunger);	
		}
	},
	eaten: function() {
		swal({
		  title: "You got eaten by a velociraptor",
		  type: "warning",
		  showCancelButton: true,
		  confirmButtonColor: "#DD6B55",
		  confirmButtonText: "Okay",
		  closeOnConfirm: false,
		  html: false,
		  imageUrl: "http://www.gifmania.co.uk/Animals-Animated-Gifs/Animated-Dinosaurs/Velociraptors/Velociraptor-Walking-50667.gif"
		}, function(){
		  swal("Velociraptor",
		  "A genus of dromaeosaurid theropod dinosaur that lived approximately 75 to 71 million years ago during the later part of the Cretaceous Period.[2] Two species are currently recognized, although others have been assigned in the past. The type species is V. mongoliensis; fossils of this species have been discovered in Mongolia. A second species, V. osmolskae, was named in 2008 for skull material from Inner Mongolia, China.",
		  "success");
		});
	},
	feed: function() {
		if($('#velohealthbar').width()<70){
			$('#velohealthbar').css({width: "+=50px"})
		}else{
			$('#velohealthbar').css({width: "120px"})
		}	
	},
	render: function(){
		var label="reptile";
		if(this.state.hover){
			label="dinosaur";
		}
		return (
			//React.createElement("button", {onMouseOver: this.mouseOver, onMouseOut: this.mouseOut}, label);
			<div id="velociraptor" onClick={this.feed} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
				<div id="velohealthbar" className="healthbar"></div>
				<img className="dinosaur center-block" src="http://www.gifmania.co.uk/Animals-Animated-Gifs/Animated-Dinosaurs/Velociraptors/Velociraptor-Walking-50667.gif" />
				<div id="velo-hover" className="feed-hover" hidden>Feed Me!</div>
			</div>
		)

	}
});


var Velociraptor2 = React.createClass({
	getInitialState: function() {
		return {
			hunger: 100
		};
	},
	mouseOver: function() {
		console.log("hovering");
		$('#velo2-hover').show();
	},
	mouseOut: function() {
		console.log("not hovering");

		$('#velo2-hover').hide();
	},
	componentDidMount: function(){
		this.state.hunger = setInterval(this.healthDiminish, 100);
		$('#velociraptor2').animate({top: "+=200px"}, 2000, this.animation);
	},
	animation: function(){
		var width = Math.floor(Math.random()*$(window).width()-100);
		var height = Math.floor(Math.random()*$(window).height()-100);
		$('#velociraptor2').animate({left: width, top: height}, 2000, this.animation2);	
	},
	animation2: function(){
		var width = Math.floor(Math.random()*$(window).width()-100);
		var height = Math.floor(Math.random()*$(window).height()-100);
		$('#velociraptor2').animate({left: width, top: height}, 2000, this.animation);	
	},
	healthDiminish: function() {
		$('#velo2healthbar').css({width: "-=1px"});
		console.log($('#allohealthbar').width());
		if($('#velo2healthbar').width() < 1){
			this.eaten();
			clearInterval(this.state.hunger);	
		}
	},
	eaten: function() {
		swal({
		  title: "You got eaten by an velociraptor",
		  type: "warning",
		  showCancelButton: true,
		  confirmButtonColor: "#DD6B55",
		  confirmButtonText: "Okay",
		  closeOnConfirm: false,
		  html: false,
		  imageUrl: "http://www.gifmania.co.uk/Animals-Animated-Gifs/Animated-Dinosaurs/Velociraptors/Velociraptor-Walking-50667.gif"
		}, function(){
		  swal("Velociraptor",
		  "A genus of dromaeosaurid theropod dinosaur that lived approximately 75 to 71 million years ago during the later part of the Cretaceous Period.[2] Two species are currently recognized, although others have been assigned in the past. The type species is V. mongoliensis; fossils of this species have been discovered in Mongolia. A second species, V. osmolskae, was named in 2008 for skull material from Inner Mongolia, China.",
		  "success");
		});
	},
	feed: function() {
		if($('#velo2healthbar').width()<70){
			$('#velo2healthbar').css({width: "+=50px"})
		}else{
			$('#velo2healthbar').css({width: "120px"})
		}	
	},
	render: function(){
		var label="reptile";
		if(this.state.hover){
			label="dinosaur";
		}
		return (
			//React.createElement("button", {onMouseOver: this.mouseOver, onMouseOut: this.mouseOut}, label);

			<div id="velociraptor2" onClick={this.feed} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
					<div id="velo2healthbar" className="healthbar"></div>
					<img className="dinosaur center-block" src="http://orig09.deviantart.net/648a/f/2012/179/d/9/oviraptor_exercise_by_pearlzu-d55903n.gif" />
					<div id="velo2-hover" className="feed-hover" hidden>Feed Me too!</div>
			</div>

		)

	}
});

var Allosaurus = React.createClass({
	getInitialState: function() {
		return {
			hunger: 100
		};
	},
	mouseOver: function() {
		console.log("hovering");
		$('#allo-hover').show();
	},
	mouseOut: function() {
		console.log("not hovering");

		$('#allo-hover').hide();
	},
	componentDidMount: function(){
		this.state.hunger = setInterval(this.healthDiminish, 100);
		$('#allosaurus').animate({left: "-=800px"}, 2000, this.animation);
	},
	animation: function(){
		var width = Math.floor(Math.random()*$(window).width()-100);
		var height = Math.floor(Math.random()*$(window).height()-100);
		$('#allosaurus').animate({left: width, top: height}, 2000, this.animation2);	
	},
	animation2: function(){
		var width = Math.floor(Math.random()*$(window).width()-100);
		var height = Math.floor(Math.random()*$(window).height()-100);
		$('#allosaurus').animate({left: width, top: height}, 2000, this.animation);	
	},
	healthDiminish: function() {
		$('#allohealthbar').css({width: "-=1px"});
		console.log($('#allohealthbar').width());
		if($('#allohealthbar').width() < 1){
			this.eaten();
			clearInterval(this.state.hunger);	
		}
	},
	eaten: function() {
		swal({
		  title: "You got eaten by an allosaurus",
		  type: "warning",
		  showCancelButton: true,
		  confirmButtonColor: "#DD6B55",
		  confirmButtonText: "Okay",
		  closeOnConfirm: false,
		  html: false,
		  imageUrl: "http://www.gifmania.co.uk/Animals-Animated-Gifs/Animated-Dinosaurs/Velociraptors/Velociraptor-Walking-50667.gif"
		}, function(){
		  swal("Allosaurus",
		  "A genus of large theropod dinosaur that lived 155 to 150 million years ago during the late Jurassic period (Kimmeridgian to early Tithonian[1]). The name 'Allosaurus' means 'different lizard'. It is derived from the Greek ἄλλος/allos ('different, other') and σαῦρος/sauros ('lizard / generic reptile'). The first fossil remains that can definitely be ascribed to this genus were described in 1877 by paleontologist Othniel Charles Marsh, and it became known as Antrodemus. As one of the first well-known theropod dinosaurs, it has long attracted attention outside of paleontological circles. Indeed, it has been a top feature in several films and documentaries about prehistoric life.",
		  "success");
		});
	},
	feed: function() {
		if($('#allohealthbar').width()<70){
			$('#allohealthbar').css({width: "+=50px"})
		}else{
			$('#allohealthbar').css({width: "120px"})
		}	
	},
	render: function(){
		var label="reptile";
		if(this.state.hover){
			label="dinosaur";
		}
		return (
			//React.createElement("button", {onMouseOver: this.mouseOver, onMouseOut: this.mouseOut}, label);

			<div id="allosaurus" onClick={this.feed} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
					<div id="allohealthbar" className="healthbar"></div>
					<img className="dinosaur center-block" src="http://45.media.tumblr.com/14b7bcb49950d63382ef81a102f1c5d7/tumblr_moz1d89j7x1s0e8ajo1_250.gif" />
					<div id="allo-hover" className="feed-hover" hidden>Feed Me too!</div>
			</div>

		)

	}
});


var Pterodactyl = React.createClass({
	getInitialState: function() {
		return {
			hunger: 100
		};
	},
	mouseOver: function() {
		console.log("hovering");
		$('#ptero-hover').show();
	},
	mouseOut: function() {
		console.log("not hovering");

		$('#ptero-hover').hide();
	},
	componentDidMount: function(){
		this.state.hunger = setInterval(this.healthDiminish, 100);
		$('#pterodactyl').animate({left: "-=800px"}, 2000, this.animation);
	},
	animation: function(){
		$('#pterodactyl').animate({left: "+=800px"}, 2000, this.animation2);	
	},
	animation2: function(){
		$('#pterodactyl').animate({left: "-=800px"}, 2000, this.animation);	
	},
	healthDiminish: function() {
		$('#pterodactylhealthbar').css({width: "-=1px"});
		console.log($('#pterodactylhealthbar').width());
		if($('#pterodactylhealthbar').width() < 1){
			this.eaten();
			clearInterval(this.state.hunger);	
		}
	},
	eaten: function() {
		swal({
		  title: "You got eaten by an Pterodactyl",
		  type: "warning",
		  showCancelButton: true,
		  confirmButtonColor: "#DD6B55",
		  confirmButtonText: "Okay",
		  closeOnConfirm: false,
		  html: false,
		  imageUrl: "http://www.mayfieldews.com/images2/pterodactyl_fly_lg_clr.gif"
		}, function(){
		  swal("Pterodactyl",
		  "Pterodactylus (/ˌtɛrəˈdæktɨləs/ terr-ə-dak-til-əs, from the Greek πτεροδάκτυλος, pterodaktulos, meaning 'winged finger') is a genus of pterosaurs, whose members are popularly known as pterodactyls ( /ˌtɛrəˈdæktɨlz/). It is currently thought to contain only a single species, Pterodactylus antiquus, the first pterosaur species to be named and identified as a flying reptile.",
		  "success");
		});
	},
	feed: function() {
		if($('#pterodactylhealthbar').width()<70){
			$('#pterodactylhealthbar').css({width: "+=50px"})
		}else{
			$('#pterodactylhealthbar').css({width: "120px"})
		}	
	},
	render: function(){
		var label="reptile";
		if(this.state.hover){
			label="dinosaur";
		}
		return (
			//React.createElement("button", {onMouseOver: this.mouseOver, onMouseOut: this.mouseOut}, label);

			<div id="pterodactyl" onClick={this.feed} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
					<div id="pterodactylhealthbar" className="healthbar"></div>
					<img className="dinosaur center-block" src="http://www.mayfieldews.com/images2/pterodactyl_fly_lg_clr.gif" />
					<div id="ptero-hover" className="feed-hover" hidden>Feed Me too!</div>
			</div>

		)

	}
});
ReactDOM.render(<AdventureApp/>, document.getElementById('reactApp'));