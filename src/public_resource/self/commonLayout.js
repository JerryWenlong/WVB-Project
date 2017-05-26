require("jquery");
let Vue = require('vue');
let modal = require('componentsDir/modal.vue')
// init left-side-bar
var init = function(){
  $(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
       isClosed = false;

      trigger.click(function () {
        hamburger_cross();      
      });

      function hamburger_cross() {

        if (isClosed == true) {          
          overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {   
          overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
    }
    
    $('[data-toggle="offcanvas"]').click(function () {
          $('#wrapper').toggleClass('toggled');
    });  
  });

  // global Vue
  let showModal = {
    showModal: false
  }
  // register modal component
  var gbmodal = new Vue({
    el: '#modal',
    data: showModal,
    components:{
      'modal': modal
    }
  })
  var global_modal_switch = new Vue({
    el: '#global_modal_switch',
    data: showModal
  })
}


module.exports = init()