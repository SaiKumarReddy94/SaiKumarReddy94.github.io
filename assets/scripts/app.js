const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "As400",
				weight: 12.3
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "javascript",
				weight: 14
			}, {
				text: "jquery",
				weight: 5
			}, {
				text: "Boot Strap",
				weight: 7
			}, {
				text: "python",
				weight: 10
			}, {
				text: "DJANGO",
				weight: 9
			}, {
				text: "java",
				weight: 9
			}, {
				text: "SQL RPGLE",
				weight: 15
			}, {
				text: "	CLLE",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web Developer.", "love everything about code.", "also work on IBMi/AS-400 programming.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 50,
			contentType: 'text',
			//display the text in loop.
			loop:true,
			loopCount: Infinity,
			callback: function() {
				$("#writing-text").css({"color": "#7f7f7f"});
				// $("#writing-text").css({"color": "#7f7f7f", "background-color": "#C8412B"});  this is actual coe removing loop.  last line will be highlighetd in red.
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
