$(document).ready(function(){
$('body').append('<div id="fb-root"></div>');
$('.pop').popover();

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/all.js#xfbml=1&appId=157845811005760";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$('footer').append('<div class="btn-group btn-group-justified visible-lg"><a class="btn btn btn-primary"><div class="fb-like" data-href="http://yeiksite.com" data-width="170" data-layout="button_count" data-show-faces="false" data-send="false"></div></a><a class="btn btn-primary"><div class="fb-like" data-href="https://www.facebook.com/yeiksite" data-width="170" data-layout="button_count" data-show-faces="false" data-send="false"></div></a><a href="#" class="btn btn-primary share"><span class="glyphicon glyphicon-send"></span> COMPARTIR EN <b>FACEBOOK</b></a><a href="http://www.youtube.com/yeiksite" target="_blank" class="btn btn-danger"><span class="glyphicon glyphicon-plus-sign"></span> <i><b>YEIK SITE</b></i> EN YOUTUBE</a><a href="https://twitter.com/yeiksite" target="_blank" class="btn btn-info"><span class="glyphicon glyphicon-plus-sign"></span> <i><b>YEIK SITE</b></i> EN TWITTER</a><a href="https://www.facebook.com/yeiksite" target="_blank" class="btn btn-primary"><span class="glyphicon glyphicon-plus-sign"></span> <i><b>YEIK SITE</b></i> EN FACEBOOK</a><a class="btn btn-success" data-toggle="modal" href="#contact"><span class="glyphicon glyphicon-envelope"></span> CONTÁCTO</a></div>');
$('footer').append('<div class="btn-group-vertical hidden-lg"><a class="btn btn-primary"><div class="fb-like" data-href="http://yeiksite.com" data-width="170" data-layout="button_count" data-show-faces="false" data-send="false"></div></a><a class="btn btn-primary"><div class="fb-like" data-href="https://www.facebook.com/yeiksite" data-width="170" data-layout="button_count" data-show-faces="false" data-send="false"></div></a><a href="http://www.youtube.com/yeiksite" target="_blank" class="btn btn-danger"><span class="glyphicon glyphicon-plus-sign"></span> <i><b>YEIK SITE</b></i> EN YOUTUBE</a><a href="https://twitter.com/yeiksite" target="_blank" class="btn btn-info"><span class="glyphicon glyphicon-plus-sign"></span> <i><b>YEIK SITE</b></i> EN TWITTER</a><a href="https://www.facebook.com/yeiksite" target="_blank" class="btn btn-primary"><span class="glyphicon glyphicon-plus-sign"></span> <i><b>YEIK SITE</b></i> EN FACEBOOK</a><a class="btn btn-success" data-toggle="modal" href="#contact"><span class="glyphicon glyphicon-envelope"></span> CONTÁCTO</a></div> <p><i><b>YEIK SITE</b></i> &copy; 2013 TODOS LOS DERECHOS RESERVADOS </p>');
$('body').append('<div class="modal fade" id="contact"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> <h4 class="modal-title">FORMULARIO DE CONTÁCTO</h4> </div> <div class="modal-body"> <iframe allowTransparency="true" style="min-height:300px; height:inherit; overflow:auto;" width="100%" id="contactform123" name="contactform123" marginwidth="0" marginheight="0" frameborder="0" src="http://www.123contactform.com/my-contact-form-stivsk-396764.html"><p>Your browser does not support iframes. The contact form cannot be displayed. Please use another contact method (phone, fax etc)</p></iframe> </div> <div class="modal-footer"> </div> </div><!-- /.modal-content --> </div><!-- /.modal-dialog --> </div><!-- /.modal -->');
$('.carousel').carousel({interval: 4000});
$('.share').click(function(){window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(location.href), 'facebook-share-dialog', 'width=626,height=436'); return false;});


});



