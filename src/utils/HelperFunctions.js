export function formatDate(inputDate) {
	// Check if inputDate is a valid Date object
	if (!(inputDate instanceof Date) || isNaN(inputDate)) {
		return "Invalid Date";
	}

	// Define arrays for month names and day names
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	// Extract day, month, and year from the inputDate
	const day = inputDate.getDate();
	const monthIndex = inputDate.getMonth();
	const year = inputDate.getFullYear();

	// Format the date string
	const formattedDate = `${day} ${monthNames[monthIndex]} ${year}`;

	return formattedDate;
}
export function formatDatev2(inputDate) {
	const dateObject = new Date(inputDate);

	const day = dateObject.getDate();
	const month = dateObject.getMonth() + 1; // Month is zero-based, so add 1
	const year = dateObject.getFullYear();

	// Pad day and month with leading zeros if necessary
	const formattedDay = String(day).padStart(2, "0");
	const formattedMonth = String(month).padStart(2, "0");

	return `${formattedDay}-${formattedMonth}-${year}`;
}
