@@include('./lib/jquery.fancybox.min.js')
@@include('./lib/number_plugin.js')

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
    
// question-answer
    
    $(".designer__answer").hide();
    $('.designer__question').click(function(){
        $(this).next().slideToggle(500);
    });
    
    $(".catalog-filters__answer").hide();
    $('.catalog-filters__question').click(function(){
        $(this).next().slideToggle(500);
        $(this).toggleClass('catalog-filters__question_active');
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
    
// price-range
    
    $( "#slider-price" ).slider({
        range: true,
        min: 3000,
        max: 20000,
        step : 1,
        values: [ 3000, 15000 ],
        slide: function( event, ui ) {
			$("#amount1_input").val( ui.values[ 0 ]);
			$("#amount2_input").val( ui.values[ 1 ]);
			$("#amount1").html( ui.values[ 0 ]);
			$("#amount2").html( ui.values[ 1 ]);
    	}
    });
	$("#amount1").html($("#slider-price").slider( "values", 0 ));
    $("#amount1_input" ).val($("#slider-price").slider( "values", 0 ));
	$("#amount2").html($("#slider-price").slider( "values", 1 ));
	$("#amount2_input" ).val($("#slider-price").slider( "values", 1 ));
	
        
// modal
    
    $().fancybox();
    
// layer   
		
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
	
// checkbox
	
$('.checkbox-label input').change(function(){
        $(this).closest('.checkbox-label').toggleClass('active');
	});
	
// select 
        
    $('.select__field').click(function(){
		$('.select').not($(this).closest('.select')).removeClass('active').find("ul").fadeOut(200);
		$(this).closest('.select').toggleClass('active').find("ul").fadeToggle(200);
	})
	
	$('.select li').click(function(){
		$(this).closest('.select').find('input').val($(this).data('value'));
		$(this).closest('.select').find('.select__field').html($(this).html());
		$(this).closest('.select').toggleClass('active').addClass('select_changed');
        $(this).closest(".select ul").fadeOut(200); 
	})
	
// input-type-number
	
	$('.numb').number_plugin({
		width: '65px',
		height: '32px',
    });
	
	$('.numb_card').number_plugin({
		width: '95px',
		height: '45px',
	});
    
// datepicker
    
    $( "#datepicker" ).datepicker();
    
// mask
    $('input[type="tel"]').mask("8-999-999-99-99");
	
// hidden text
    $(".paragraph__second-part").slideUp(0);
    $(".more-info").click(function(event){
        $('.paragraph__second-part').slideDown(500);
		$('.more-info').toggleClass('more-info_active');
    });
}); 