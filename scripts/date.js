var createDate = function() {
	var newDate = new Date();
	var formattedNewDate = "";

	formattedNewDate += (newDate.getMonth() + 1) + "_";

	formattedNewDate += newDate.getDate() + "_";

	formattedNewDate +=newDate.getFullYear();

	return formattedNewDate;
};

module.exports = createDate;