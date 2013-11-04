Calendar.setup({
	cont          : "calendar-container",
	weekNumbers   : true,
	selectionType : Calendar.SEL_SINGLE,
	selection     : Calendar.dateToInt(new Date()),
	onSelect      : function() {
		var count = this.selection.countDays();
		if (count == 1) {
			var date = this.selection.get()[0];
			date = Calendar.intToDate(date);
			date = Calendar.printDate(date, "%A, %B %d, %Y");
			$("calendar-info").innerHTML = date;
		} else {
			$("calendar-info").innerHTML = Calendar.formatString(
				"${count:no date|one date|two dates|# dates} selected",
				{ count: count }
			);
		}
	}
});