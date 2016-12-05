jQuery(function($){

  $('input[placeholder], textarea[placeholder]').placeholder();


  // select style
  $('select').styler();


  // input mask
  $('.js-mask-phone').inputmask("+7 (999) 99 99 999");  //static mask
  $('.js-mask-price').inputmask("9999руб.");  //static mask
  $('.js-mask-date').inputmask("c 9999 года");  //static mask
  $('.js-mask-birthday').inputmask("99/99/9999 год");  //static mask

  $('#dropdownMenu1').click(function (e) {
    $(this).parent().toggleClass('open');
    e.preventDefault();
  })

  // price slider
  $( "#sliderPrice" ).slider({
    range: true,
    //orientation: "vertical",
    min: 100,
    step: 10,
    max: 1000,
    values: [300, 600],
    slide: function( event, ui ) {
      //$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      $('#price').html(ui.values[0]);
      $('#price2').html(ui.values[1]);
    }
  });

  //$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
  //" - $" + $( "#slider-range" ).slider( "values", 1 ) );
  $('#price').html($('#sliderPrice').slider("values",0));
  $('#price2').html($('#sliderPrice').slider("values",1));

  $('.js-toogle-btn').click(function () {
    $('.js-show-block').slideToggle();
    return false
  });

  $('.close-settings').click(function () {
    $('.js-show-block').slideToggle();
  })


  // owl carousel
  $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 15,
      nav: true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  });

  // file input style
  $('.chose_file').each(function(indx, elem){
      var parent = $(elem).parent();
      $(elem).click(function(){
          $(parent).find('.chose_file_input').click();
          return(false);
      });

      $(parent).find('.chose_file_input').change(function(){
          $(parent).find('.chose_file_text').html($(this).val()).show();
          $(elem).hide();
      });

      $(parent).find('.chose_file_text').on('click', function(){
        $(this).hide();
        $(elem).show();
        $(parent).find('.chose_file_input').val('');
      })
  });
  
  $('.pop').popover({
    html : true, 
    content: function() {
      return $('#popover_content_wrapper').html();
    }
  });

  // scroll

  var csObj = new Object();
    csObj.scrollButtons = {
        enable:false,
        scrollType:"pixels",
        scrollAmount:200
    };

    $(".scroll-bar").mCustomScrollbar(csObj);

});//end ready


//Plugin placeholder
(function(b,f,i){function l(){b(this).find(c).each(j)}function m(a){for(var a=a.attributes,b={},c=/^jQuery\d+/,e=0;e<a.length;e++)if(a[e].specified&&!c.test(a[e].name))b[a[e].name]=a[e].value;return b}function j(){var a=b(this),d;a.is(":password")||(a.data("password")?(d=a.next().show().focus(),b("label[for="+a.attr("id")+"]").attr("for",d.attr("id")),a.remove()):a.realVal()==a.attr("placeholder")&&(a.val(""),a.removeClass("placeholder")))}function k(){var a=b(this),d,c;placeholder=a.attr("placeholder");
b.trim(a.val()).length>0||(a.is(":password")?(c=a.attr("id")+"-clone",d=b("<input/>").attr(b.extend(m(this),{type:"text",value:placeholder,"data-password":1,id:c})).addClass("placeholder"),a.before(d).hide(),b("label[for="+a.attr("id")+"]").attr("for",c)):(a.val(placeholder),a.addClass("placeholder")))}var g="placeholder"in f.createElement("input"),h="placeholder"in f.createElement("textarea"),c=":input[placeholder]";b.placeholder={input:g,textarea:h};!i&&g&&h?b.fn.placeholder=function(){}:(!i&&g&&
!h&&(c="textarea[placeholder]"),b.fn.realVal=b.fn.val,b.fn.val=function(){var a=b(this),d;if(arguments.length>0)return a.realVal.apply(this,arguments);d=a.realVal();a=a.attr("placeholder");return d==a?"":d},b.fn.placeholder=function(){this.filter(c).each(k);return this},b(function(a){var b=a(f);b.on("submit","form",l);b.on("focus",c,j);b.on("blur",c,k);a(c).placeholder()}))})(jQuery,document,window.debug);