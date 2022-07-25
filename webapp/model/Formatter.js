sap.ui.define(function () {
	"use strict";

	let Formatter = {

		weightState: function (fMeasure) {

			if (fMeasure > 40) {
				return "Error";
			}

			else if (fMeasure > 20) {
				return "Warning";
			}


			else { return "Success"; }
		}
	};

	return Formatter;
})