
/* =======================
   CONFIGURATION
======================= */
const isAdmin = true; // 🔐 change to false to disable marking

const colorTypes = {
  holiday: { color: "#e74c3c", label: "Holiday" },
  meeting: { color: "#2980b9", label: "Meeting" },
  event: { color: "#27ae60", label: "Event" }
};

let markedDays = {}; 
// format: { "YYYY-MM-DD": "holiday" }

/* =======================
   DATE LOGIC
======================= */
let currentDate = new Date();

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  document.getElementById("monthYear").innerText =
    currentDate.toLocaleString("default", { month: "long", year: "numeric" });

  const daysContainer = document.getElementById("days");
  daysContainer.innerHTML = "";

  const dayNames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  dayNames.forEach(d => {
    const el = document.createElement("div");
    el.className = "day-name";
    el.innerText = d;
    daysContainer.appendChild(el);
  });

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    daysContainer.appendChild(document.createElement("div"));
  }

  for (let day = 1; day <= totalDays; day++) {
    const dateKey = `${year}-${month+1}-${day}`;
    const dayEl = document.createElement("div");
    dayEl.className = "day";
    dayEl.innerText = day;

    if (markedDays[dateKey]) {
      const type = colorTypes[markedDays[dateKey]];
      dayEl.style.background = type.color;
      dayEl.classList.add("marked");
    }

    dayEl.onclick = () => handleDayClick(dateKey);
    daysContainer.appendChild(dayEl);
  }

  renderLegend();
}

function changeMonth(direction) {
  currentDate.setMonth(currentDate.getMonth() + direction);
  renderCalendar();
}

/* =======================
   MARKING LOGIC
======================= */
function handleDayClick(dateKey) {
  if (!isAdmin) {
    alert("Only admin can mark days");
    return;
  }

  if (markedDays[dateKey]) {
    delete markedDays[dateKey];
  } else {
    const type = prompt("Enter type: holiday / meeting / event");
    if (colorTypes[type]) {
      markedDays[dateKey] = type;
    }
  }
  renderCalendar();
}

/* =======================
   LEGEND
======================= */
function renderLegend() {
  const legend = document.getElementById("legend");
  legend.innerHTML = "<strong>Legend</strong>";

  Object.values(colorTypes).forEach(t => {
    const item = document.createElement("div");
    item.className = "legend-item";

    const colorBox = document.createElement("div");
    colorBox.className = "legend-color";
    colorBox.style.background = t.color;

    item.appendChild(colorBox);
    item.appendChild(document.createTextNode(t.label));
    legend.appendChild(item);
  });
}

/* =======================
   INIT
======================= */
renderCalendar();