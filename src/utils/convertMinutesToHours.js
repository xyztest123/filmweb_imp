
export const convertMinutesToHours = (timeInMinutes) => {
    const hours = parseInt(timeInMinutes / 60);
    if (hours === 0) {
        return timeInMinutes + " minut"
    }
    const minutes = timeInMinutes % 60;
    return hours + " godzin " + minutes + " minut"
}