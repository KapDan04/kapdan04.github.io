var $btn,$modal,$form;function resizeVideo(){if($(".greeting").length){var t=$(".greeting").width(),e=0,o=0;$(".greeting iframe").length&&t<=1200&&(e=t,o=Math.floor(.5625*e),e>640&&(e=640,o=360),$(".greeting iframe").attr("width",e),$(".greeting iframe").attr("height",o))}}function doPost(t,e,o){doRequest("POST",t,e,o)}function doGet(t,e,o){doRequest("GET",t,e,o)}function doRequest(t,e,o,n){$.ajax({type:t,dataType:"JSON",url:e,data:o,beforeSend:function(){$btn.attr("disabled",!0)},error:function(){showError()},success:function(t){t&&t.status?(toastr.info(t.reason),n&&n(t)):t&&!t.status&&(t.errors.length>0?showError(t.errors[0].message):showError(t.reason))},complete:function(){$btn.attr("disabled",!1)}})}function showError(t){t?toastr.error(t):toastr.error("Возника ошибка, попробуйте позже")}$(window).resize((function(){resizeVideo()})),$(document).ready((function(){resizeVideo(),$(".js-emoji-included").Emoji({path:"/vendors/jqueryemoji/img/apple40/",class:"emoji",ext:"png"}),(new WOW).init(),$("#guest, #section-guest").on("click",".btn-modal",(function(t){$btn=$(this),($modal=$("#modal-guest-"+$btn.data("mode"))).modal("show")})),$(".modal .btn-send").on("click",(function(t){t.preventDefault(),$btn=$(this),$form=$btn.closest("form"),$sectionGuest=$("#guest .section-body, #section-guest .section-body"),$modalChange=$("#modal-guest-change"),doPost($form.attr("action"),$form.serialize(),(function(t){"accept"===t.data.mode&&(t.data.html.btn_wrapper&&$sectionGuest.find(".btn-wrapper").replaceWith(t.data.html.btn_wrapper),t.data.html.accept_note&&$sectionGuest.find(".accept-note").replaceWith(t.data.html.accept_note),t.data.html.tablenum&&$sectionGuest.find(".accept-note").after(t.data.html.tablenum),$modalChange.find('select[name="guest[count]"]').val(t.data.item.count),$modalChange.find('textarea[name="guest[comment]"]').val(t.data.item.comment),$modalChange.find('input[name="guest[email]"]').val(t.data.item.email)),"decline"===t.data.mode&&($sectionGuest.find(".btn-wrapper").empty(),t.data.html.accept_note&&$sectionGuest.find(".accept-note").replaceWith(t.data.html.accept_note),$modalChange.find('select[name="guest[count]"]').val(t.data.item.count),$modalChange.find('textarea[name="guest[comment]"]').val(t.data.item.comment),$modalChange.find('input[name="guest[email]"]').val(t.data.item.email)),$modal.modal("hide")}))})),$("#pool .btn-send, #section-pool .btn-send").on("click",(function(t){t.preventDefault(),$btn=$(this),doPost(($form=$btn.closest("form")).attr("action"),$form.serialize(),(function(t){}))})),$(".nav li a").on("click",(function(t){t.preventDefault();var e=$(this).attr("href"),o=$(e).offset().top+40,n=o-40<0?0:o-40;$("body, html").animate({scrollTop:o},300).animate({scrollTop:n},600)})),$(".smooth-scroll").on("click",(function(t){t.preventDefault();var e=$(this).find("a").attr("href"),o=$(e).offset().top-42;$("body, html").animate({scrollTop:o},400)})),$(window).on("scroll",(function(){window.pageYOffset>window.innerHeight/2?$("#menu").addClass("scroll"):$("#menu").removeClass("scroll")})),$("#totop .arrow, #section-totop .arrow").on("click",(function(t){$("body, html").animate({scrollTop:0},500)})),toastr.options={closeButton:!0,debug:!1,newestOnTop:!1,progressBar:!1,positionClass:"toast-top-full-width",preventDuplicates:!1,onclick:null,showDuration:"100",hideDuration:"1000",timeOut:"10000",extendedTimeOut:"500",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"},location.pathname.includes("preview")}));