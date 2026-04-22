const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");
const demoContent = document.getElementById("demoContent");
let sampleEvents = [    
    {
        title: "Web Dev Workshop",
        date: "2026-06-04",
        category: "Workshop",
        description: "Learn JavaScript with hands-on practice."
    },
    {
        title: "Tech Conference",
        date: "2026-07-10",
        category: "Conference",
        description: "Annual technology networking event."
    }
];


function createEventCard(eventData) {

    const card = document.createElement("div");
    card.classList.add("event-card");

    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div>${eventData.date}</div>
        <span>${eventData.category}</span>
        <p>${eventData.description}</p>
    `;

    // Delete button functionality
    const deleteBtn = card.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function () {
        card.remove();
        checkEmptyState();
    });

    return card;
}



function addEvent(eventData) {

    // If empty state is present then remove it
    const emptyState = document.querySelector(".empty-state");
    if (emptyState) emptyState.remove();

    eventContainer.appendChild(createEventCard(eventData));
}




function checkEmptyState() {
    if (eventContainer.children.length === 0) {
        eventContainer.innerHTML =
            `<div class="empty-state">
                No events yet. Add your first event!
            </div>`;
    }
}

eventForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };

    addEvent(eventData);

    eventForm.reset();
});



clearAllBtn.addEventListener("click", function () {
    eventContainer.innerHTML = "";
    checkEmptyState();
});




addSampleBtn.addEventListener("click", function () {
    sampleEvents.forEach(function (event) {
        addEvent(event);
    });
});



document.addEventListener("keydown", function () {
    demoContent.textContent = "You pressed a key! ";
    demoContent.style.backgroundColor = "lightblue";
});