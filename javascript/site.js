$(function() {

	$('#cal0').calendar({
		date: new Date('1/1/2014')
	});


	$('table').bind('customEvt', function(e){ alert('LOOK HERE')});
	//$('table').trigger('onNewDate', [new Date()]);

	$('#cal1').calendar({
		date: new Date('2/20/2013')
	});
	
	$('#cal2').calendar({
		date: new Date('3/1/2013')
	});
	
	$('#cal3').calendar({
		date: new Date('4/1/2013')
	});
	
	$('#cal4').calendar({
		date: new Date('5/3/2013')
	});
	
});