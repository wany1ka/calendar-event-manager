const events = [{
    title: "Gala meeting",
    date: new Date("2024-03-11T16:00:00"),
    location: "Boma",
    attendees: new Set(["Peter", "Kuria", "Don"]),
},
{
    title: "NBO Design week",
    date: new Date("2024-03-16T12:00:00"),
    location: "Mbagathi Ridge",
    attendees: new Set(["Levi", "Tamara"])
},
{
    title: "Financial Launch",
    date: new Date("2024-03-22T14:00:00"),
    location: "Global Trade Centre",
    attendees: new Set(["Leon", "Kiigeh", "Karees"])
},
{
    title: "Hawkers Republic Exhibition",
    date: new Date("2024-03-23T10:00:00"),
    location: "Circle Art Gallery",
    attendees: new Set(["George", "Simbi", "Erika"])
},
{
    title: "Brand Interview",
    date: new Date("2024-03-25T10:00:00"),
    location: "High Commission of Canada",
    attendees: new Set(["Paul"])
},
{
    title: "Capstone Presentation",
    date: new Date("2024-03-28T10:00:00"),
    location: "Circular Innovation Hub",
    attendees: new Set(["John", "Mark", "Lewis", "Royan"])
},
{
    title: "Easter Fundraiser",
    date: new Date("2024-03-22T10:00:00"),
    location: "Hemingways, Watamu",
    attendees: new Set(["Newton", "Rose", "Wangui"])
}
];
const eventOrganizers = new WeakMap();
eventOrganizers.set(events[0], 'Peter');
eventOrganizers.set(events[1], 'Kuria');
for (const event  of events) {
const organizer = eventOrganizers.get(event);
}
function addAttendee(eventTitle, attendeeName) {
const event = events.find(event => event.title === eventTitle);
if (event) {
    event.attendees.add(attendeeName);
    console.log(`${attendeeName} added to ${eventTitle}`);
} else {
    console.log("Event not found");
}
}
function eventsArrayToJSON() {
return JSON.stringify(events.map(event => {
    return {
        ...event,
        formattedDate: event.date.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit", year: "numeric" })
    };
}));
}

// Function to add a custom "formattedDate" property to each event object:
function addFormattedDate(events) {
return events.map(event => {
  const eventDate = new Date(event.date)
  const formattedDate = `${eventDate.getMonth() + 1}/${eventDate.getDate()}/${eventDate.getFullYear()}`;

  // Add formattedDate property to event object:
  return { ...event, formattedDate };
});
}
function eventsToJSON(events) {
const eventsWithFormattedDate = addFormattedDate(events);
return JSON.stringify(eventsWithFormattedDate);
}
console.log(eventsToJSON(events));
function deleteEvent(eventTitle) {
const index = events.findIndex(event => event.title === eventTitle);
if (index !== -1) {
    events.splice(index, 1);
    console.log(`${eventTitle} deleted successfully`);
} else {
    console.log("Event not found");
}
}
function findEventWithMostAttendees() {
return events.reduce((maxEvent, event) => {
    return event.attendees.size > maxEvent.attendees.size ? event : maxEvent;
});
}
console.log("Events happening in the next 7 days:");
const now = new Date();
const nextWeek = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
const upcomingEvents = events.filter(event => event.date <= nextWeek);
upcomingEvents.forEach(event => {
console.log(`Title: ${event.title}, Date: ${event.date}`);
});

// To add a new attendee
addAttendee("Dental Appointment", "Dr. Nick");

// To delete an event:
deleteEvent("Capstone Presentation");

// To event with most attendees:
const eventWithMostAttendees = findEventWithMostAttendees();
console.log("Event with most attendees:", eventWithMostAttendees.title);

// Function to display events in a table format
function displayEvents(events) {
// Table header
console.log("| Title | Date | Location |");
console.log("|-------|------|----------|");
events.forEach(({title, date, location}) => {
  // Display events in table format
  console.log(`| ${title} | ${date} | ${location} |`);
});
}
displayEvents(events);