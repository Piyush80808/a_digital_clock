const timeFunction = () => {
	const mainTime = new Date();
	const time = mainTime.toLocaleTimeString(`India`, {
		hour: "numeric",
		second: `numeric`,
		minute: `numeric`,
		hour12: true,
	});
	document.getElementById(`time`).innerText = time;
	const date = mainTime.toLocaleDateString(`Inndia`, {
		day: `numeric`,
		month: `short`,
		year: `numeric`,
	});
	document.getElementById(`date`).innerText = date;
};
timeFunction();
setInterval(timeFunction, 100);
