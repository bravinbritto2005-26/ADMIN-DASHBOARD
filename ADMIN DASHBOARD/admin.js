// slider
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.onclick = function () {
    sidebar.classList.toggle("active");
}
// notificationPanel
const notifyBtn = document.getElementById("notifyBtn");
const notificationPanel = document.getElementById("notificationPanel");

notifyBtn.onclick = function (e) {
    e.stopPropagation();
    notificationPanel.classList.toggle("active");
};

document.addEventListener("click", function (e) {
    if (!notificationPanel.contains(e.target) && !notifyBtn.contains(e.target)) {
        notificationPanel.classList.remove("active");
    }
});

// chart or graph section
const ctx = document.getElementById("chart");

let monthlyData = [1200, 1900, 3000, 2500, 4000, 4500];
let weeklyData = [300, 500, 700, 600, 900, 1000, 1200];

let labelsMonthly = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
let labelsWeekly = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const chart = new Chart(ctx, {
    type: "line",
    data: {
        labels: labelsMonthly,
        datasets: [{
            label: "Revenue",
            data: monthlyData,
            borderColor: "#22c55e",
            backgroundColor: "rgba(34,197,94,0.2)",
            fill: true,
            tension: 0.4,
            pointRadius: 5
        }]
    },
    options: {
        responsive: true,
        animation: {
            duration: 800
        },
        plugins: {
            legend: {
                labels: { color: "#fff" }
            },
            tooltip: {
                enabled: true
            }
        },
        scales: {
            x: {
                ticks: { color: "#ccc" }
            },
            y: {
                ticks: { color: "#ccc" }
            }
        }
    }
});

// 🔁 Switch to Monthly
function setMonthly() {
    chart.data.labels = labelsMonthly;
    chart.data.datasets[0].data = monthlyData;
    chart.update();
}

// 🔁 Switch to Weekly
function setWeekly() {
    chart.data.labels = labelsWeekly;
    chart.data.datasets[0].data = weeklyData;
    chart.update();
}

// 🔄 Randomize Data
function randomizeData() {
    chart.data.datasets[0].data = chart.data.datasets[0].data.map(() =>
        Math.floor(Math.random() * 5000)
    );
    chart.update();
}
// Analytics chart 
// BAR CHART DATA
let barMonthlyData = [2500, 3200, 2800, 4100, 3800, 4500];
let barWeeklyData = [1200, 1500, 1300, 1800, 1600, 1900, 2100];

let barLabelsMonthly = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
let barLabelsWeekly = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const barCtx = document.getElementById("barChart");

const barChart = new Chart(barCtx, {
    type: "bar",
    data: {
        labels: barLabelsMonthly,
        datasets: [{
            label: "Sales",
            data: barMonthlyData,
            backgroundColor: [
                "#22c55e",
                "#3b82f6",
                "#f59e0b",
                "#ef4444",
                "#8b5cf6",
                "#ec4899"
            ],
            borderRadius: 8,
            borderSkipped: false
        }]
    },
    options: {
        responsive: true,
        animation: {
            duration: 800
        },
        plugins: {
            legend: {
                labels: { color: "#fff" }
            },
            tooltip: {
                enabled: true
            }
        },
        scales: {
            x: {
                ticks: { color: "#ccc" }
            },
            y: {
                ticks: { color: "#ccc" }
            }
        }
    }
});

// Switch to Monthly Bar Chart
function setBarMonthly() {
    barChart.data.labels = barLabelsMonthly;
    barChart.data.datasets[0].data = barMonthlyData;
    barChart.update();
}

// Switch to Weekly Bar Chart
function setBarWeekly() {
    barChart.data.labels = barLabelsWeekly;
    barChart.data.datasets[0].data = barWeeklyData;
    barChart.update();
}

// Randomize Bar Chart Data
function randomizeBarData() {
    barChart.data.datasets[0].data = barChart.data.datasets[0].data.map(() =>
        Math.floor(Math.random() * 5000)
    );
    barChart.update();
}
// Analytics pie chart 
// PIE CHART DATA
let pieData = [3000, 2500, 1800, 1200];
let pieLabels = ["Desktop", "Mobile", "Tablet", "Other"];
let pieColors = ["#3b82f6", "#ef4444", "#f59e0b", "#8b5cf6"];

const pieCtx = document.getElementById("pieChart");

const pieChart = new Chart(pieCtx, {
    type: "pie",
    data: {
        labels: pieLabels,
        datasets: [{
            data: pieData,
            backgroundColor: pieColors,
            borderColor: "#1a1a1a",
            borderWidth: 2,
            hoverOffset: 10
        }]
    },
    options: {
        responsive: true,
        animation: {
            duration: 800
        },
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    color: "#fff",
                    padding: 15,
                    font: { size: 14 }
                }
            },
            tooltip: {
                backgroundColor: "rgba(0,0,0,0.8)",
                padding: 12,
                titleColor: "#fff",
                bodyColor: "#fff",
                borderColor: "#22c55e",
                borderWidth: 1
            }
        }
    }
});

// Randomize Pie Chart Data
function randomizePieData() {
    pieChart.data.datasets[0].data = pieData.map(() =>
        Math.floor(Math.random() * 5000)
    );
    pieChart.update();
}

// CUSTOMERS SECTION 

// CUSTOMER SEARCH FILTER
const searchInput = document.getElementById("searchInput");
const table = document.getElementById("customerTable");
const rows = table.getElementsByTagName("tr");
const countDisplay = document.getElementById("customerCount");

searchInput.addEventListener("keyup", function () {
    const filter = searchInput.value.toLowerCase();
    let visibleCount = 0;

    for (let i = 1; i < rows.length; i++) {
        const text = rows[i].textContent.toLowerCase();

        if (text.includes(filter)) {
            rows[i].style.display = "";
            visibleCount++;
        } else {
            rows[i].style.display = "none";
        }
    }

    countDisplay.textContent = visibleCount + " customers";
});





window.onload = function () {
    if (!localStorage.getItem('loggedInUser')) {
        window.location.href = 'signup.html';
    } else {
        document.getElementById('welcome').innerText =
            "Welcome, " + localStorage.getItem('loggedInUser');
    }
};

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'signup.html';
}



// Replace the existing logout function with:

function logout() {
    if (confirm("Are you sure you want to logout?")) {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'signup.html';
    }
}