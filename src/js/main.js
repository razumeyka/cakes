@@include('./lib/jquery.fancybox.min.js')

$(document).ready(function(){
    
// slider designer
    
    $('.designer__carousel .next,.designer__carousel .prev').click(function(){
        console.log('click carousel');
        var countslides=jQuery('.designer__content_container').children().children().length-Math.round(parseFloat(jQuery('.designer__content_wrapper').css('width'))/parseFloat(jQuery('.designer__one_doc').css('width')));
        var slide=$(this).closest('.designer__carousel').data('slide');
        console.log(countslides);
        if($(this).hasClass('next')){
            slide++;
            if(slide>countslides)slide=0;
        }
        if($(this).hasClass('prev')){
            slide--;
            if(slide<0)slide=countslides;
        }
         $(this).closest('.designer__carousel').find('.designer__long').css('margin-left','-'+(slide*25)+'%');
		$(this).closest('.designer__carousel').data('slide',slide);
    });
    
// designer question-answer
    
    $(".designer__answer").hide();
    $('.designer__question').click(function(){
        $(this).next().slideToggle(500);
    });
    
// weight-range
    
    $( "#slider-range" ).slider({
        min: 0,
        max: 20,
        step : 0.5,
        value: 2.5,
        create: function( event, ui ) {
            val = $( "#slider-range" ).slider("value");
				$("#weight").html( val + "кг" );
            },
        slide: function( event, ui ) {
            $("#weight").html( ui.value + "кг");
            $(".input_weight").val( ui.value + "кг" );
        }
    });
    
// modal
    
    $().fancybox();
    
// layer   
    
    var slideNow = 1;   
    var navBtnId = 0;
    $('.radio-wrapper_layer').click(function() {   
            navBtnId = $(this).index();
            $('.layer-slider__slidewrapper').css(
            'margin-left','-'+navBtnId+'00%'); 
            $(".cake-layer__control").removeClass("cake-layer__control_active");
            $(".cake-layer__control").eq(navBtnId).addClass("cake-layer__control_active");
    });
    
// input[type="file"]

	$('input[type="file"]').change(function(){
		if($(this).val()==''){
			$(this).next().html('');
			return;
			}
		//console.log(.files);
		var ar=[];
		for (var i = 0; i < $(this)[0].files.length; i++) {
			ar.push($(this)[0].files[i].name);
		}
		$(this).next().html(ar.join(', '));
	});
    
// radio-buttons
    
    $('.radio-wrapper input[checked="checked"]').closest('.radio-wrapper').addClass('active');
    
    $('.radio-wrapper').click(function(){
        $(this).parent().find('.radio-wrapper').removeClass('active');
        $(this).addClass('active');
        $(this).parent().addClass('changed');
    });
    
// datepicker
    
    $( function() {
        $( "#datepicker" ).datepicker();
    });  
    
// mask
    $('input[type="tel"]').mask("8-999-999-99-99");
}); 