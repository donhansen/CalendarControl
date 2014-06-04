(function($) {

	$.fn.extend({
		calendar: function(options) {
			var defaults = {
			};
			var options = $.extend(defaults, options);	
			
			return this.each(function() {		
				var that = $(this);
							
				var tab = $('<table>').attr({'border':0, 'cellspacing':0, 'cellpadding':0})
				.addClass('calControl')
				that.replaceWith(tab);
				
	
				//tab.bind('onNewDate', function(e, date){alert('it works')});
				
				//create the days row
				var headerRow = $('<tr>').addClass('days-row');
				tab.append(headerRow);
				
				headerRow.append($('<td>').html('SUNDAY'))
					.append($('<td>').html('MONDAY'))
					.append($('<td>').html('TUESDAY'))
					.append($('<td>').html('WEDNESDAY'))
					.append($('<td>').html('THURSDAY'))
					.append($('<td>').html('FRIDAY'))
					.append($('<td>').html('SATURDAY'));
				
				var date = new Date();
				
				if (options.date) 
					date = options.date;
				
				var monthName = getMonthName(date) + ' ' + date.getFullYear();
				
				var titleRow = $('<tr>').addClass('month-row');
				tab.prepend(titleRow);
				
				titleRow.append($('<td>').attr('colspan', '7').html(monthName));
				
				var firstDate = getFirstDayOfMonth(date);
				var lastDate = getLastDayOfMonth(date);
				var firstDayOfMonth = firstDate.getDay();
				
				var numberOfDays = lastDate.getDate();
				
				var firstDaySet = false;
				var lastDaySet = false;
				
				var counter = 0;
				
				while (counter < numberOfDays)
				{
					var week = $('<tr>').addClass('date-row');
					tab.append(week);
					
					for(var i = 0; i < 7; i++)
					{
						var itemDate = date;
					
						if(!firstDaySet)
						{	
							 if(i == firstDayOfMonth)
							 {
							 	itemDate.setDate(counter+1);	
							 	addDateToCalendar(week, counter +1, itemDate.valueOf());
							 	
								 counter++;
								 firstDaySet = true;
							 }
							 else
							 {
								week.append($('<td>').addClass('non-date').html('')); 
							 }
						}
						else{
						
							if(counter == numberOfDays)
									lastDaySet = true;	
						
							if(!lastDaySet)
							{
								itemDate.setDate(counter+1);
								addDateToCalendar(week, counter +1, itemDate.valueOf());
							}
							else
								week.append($('<td>').addClass('non-date').html(''));
							
						counter++;
						}
					}
				}	
			});
		}
	});
})(jQuery);


function getFirstDayOfMonth(date) {
	var startDate = new Date(date);
	var month = date.getMonth();
	startDate.setMonth(month);
	startDate.setDate(1);
	return startDate;
}

function getLastDayOfMonth(date) {
	var month = date.getMonth() + 1;
	var endDate = new Date(date);
	endDate.setMonth(month);
	endDate.setDate(0);
	return endDate;
}

//row: the TR being appended to
//index: number of the day of the week (0= sunday)
//day: the number of the date being added
//dateValueOf: data element to be added to the item
function addDateToCalendar(row, day, dateValueOf){
	
	var dataCol = $('<td>');
	row.append(dataCol);

	var innerElem = $('<div>');
	dataCol.append(innerElem);
	
	innerElem.append('<span class="celldate-number">' + (day) +'</span>');
	innerElem.data('itemdata', dateValueOf);
	innerElem.addClass('celldate-container');
}

function getMonthName(date){

	var month = date.getMonth();
	
	switch (month)
	{
		case 0:
			return "January";
		case 1:
			return "February";
		case 2:
			return "March";
		case 3:
			return "April";
		case 4:
			return "May";
		case 5:
			return "June";
		case 6:
			return "July";
		case 7:
			return "August";
		case 8:
			return "September";
		case 9:
			return "October";
		case 10:
			return "November";
		case 11:
			return "December";
	}
}


function getDayOfWeek(date){
	
	 var day = date.getDay();
	
	 switch (day)
	{
		case 0:
			return "Sunday";
		case 1:
			return "Monday";
		case 2:
			return "Tuesday";
		case 3:
			return "Wednesday";
		case 4:
			return "Thursday";
		case 5:
			return "Friday";
		case 6:
			return "Saturday";
	}	 
}