// This is an API that works with the Date() module in JS.

/**
 * Day {
 *      label: "Thursday",
 *      month: 5,
 *      date: 11,
 *      year: 2022
 * }
 */

// Input
//     * a number (n) which specifies the number of days before today (default is 0)
//     * a number (m) which specifies the number of days after today (default is 0)

// Output
//     * a list of Day objects including today, n days before, m days after
//     * index i of where currentDay lies --> n

const getLabel = (index) => {
    let weekday = "";

    switch (index) {
      case 0:
        weekday = "Sunday";
        break;
      case 1:
        weekday = "Monday";
        break;
      case 2:
        weekday = "Tuesday";
        break;
      case 3:
        weekday = "Wednesday";
        break;
      case 4:
        weekday = "Thursday";
        break;
      case 5:
        weekday = "Friday";
        break;
      case 6:
        weekday = "Saturday";
        break;
      default:
        break;
    }

    return weekday;
}

const generateDays = (n = 0, m = 0) => {
    let days = [];

    // Add n days before
    for (let i = n; i >= 1; i--) {
        const newDate = new Date();
        newDate.setDate(newDate.getDate() - i);
        const label = getLabel(newDate.getDay());

        days.push({
            label: label,
            month: newDate.getMonth() + 1,
            date: newDate.getDate(), 
            year: newDate.getFullYear()
        });
    }

    // Add current day
    const currDate = new Date();
    const currLabel = getLabel(currDate.getDay())
    days.push({
        label: currLabel,
        month: currDate.getMonth() + 1,
        date: currDate.getDate(), 
        year: currDate.getFullYear()
    });

    // Add m days after
    for (let i = 1; i < m + 1; i++) {
        const newDate = new Date();
        newDate.setDate(newDate.getDate() + i);
        const label = getLabel(newDate.getDay());

        days.push({
            label: label,
            month: newDate.getMonth() + 1,
            date: newDate.getDate(), 
            year: newDate.getFullYear()
        });
    }

    return days;
}

//generateDays(7, 7);

export default generateDays;