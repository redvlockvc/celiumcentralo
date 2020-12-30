

var stories = [];

 var storyController = {

  buildStories: function () {

   for (var i = 0; i < stories.length; i++) {

   	var story = stories[i]

   	var s = '<div class="slide" id="'
			+story.data+'" data-anchor="'
			+story.data+'"><div class="content"><h1>' 
			+story.title+ '</h1></div></div>'

	var m = '<div class="slide" id="'
			+story.data+'" data-anchor="'
			+story.data+'"><div class="content"><h1>'
			+story.title+'</h1>'
			+story.story+'</div></div>'

   	if (stories[i].size === "s") $(".s").append(s)
   	if (stories[i].size === "m") $(".m").append(m)
   	if (stories[i].size === "l") $(".l").append(m)
   	if (stories[i].size === "xl") $(".xl").append(m)

   }

  }

 }

 //storyController.buildStories();

 document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#moveUp').addEventListener('click', function() {
		$.fn.fullpage.moveSectionUp()
	});

	document.querySelector('#moveDown').addEventListener('click', function() {
		$.fn.fullpage.moveSectionDown()
	});

    function initialization(){
        $('#onepage').fullpage({
        	sectionsColor: ['#c7a87f', '#ece8db', '#c1ccca', '#aebcc4', '#d3cbc7'],
            anchors: ['one-love', 'sayings', 'sharps', 'shorts', 'longs'],  
            animateAnchor:true,
            scrollOverflow: true,            
            autoScrolling:true, 
            fitSection: true,
            menu: '#menu',
            navigation: true,
            navigationPosition: 'bottom',
            css3: true,
            slidesNavigation: true,
            slidesNavPosition: 'bottom',
            continuousVertical:true,     
            afterLoad: function(anchorLink, index){
                $('#menu li').css('border-top', "2px solid transparent");          
                $('#'+anchorLink).css('border-top', "2px solid #7FDBFF");   
            }
        });
    }

    initialization();  
 	
	var $container = $('.indi-dots ul, .shortview'),    
    scroll = $container.width();      

    $('.R').hover(function() {
        $container.animate({
            'scrollLeft': scroll
        },{duration: 2000, queue: false});
    }, function(){
        $container.stop();
    });
    
    $('.L').hover(function() {
        $container.animate({
            'scrollLeft': -100
        },{duration: 2000, queue: false});
      }, function(){
        $container.stop();
    }); 	
    
});
