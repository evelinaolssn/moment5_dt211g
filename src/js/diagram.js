"use strict";

import Chart from 'chart.js/auto';

/**
 * Creates a bar chart showing the number of applicants for the 6 most popular courses.
 * The chart is rendered in a canvas element with the id "barChart".
 * The dataset and course names are currently hardcoded but will later be replaced by data fetched from an external JSON file via FetchAPI.
 */
const barCtx = document.getElementById('barChart');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Kurs 1', 'Kurs 2', 'Kurs 3', 'Kurs 4', 'Kurs 5', 'Kurs 6'],
        datasets: [{
            label: 'Antal sökande',
            data: [100, 95, 85, 80, 60, 50],
            backgroundColor: 'rgba(202, 107, 17, 0.76)',
            borderColor: 'rgba(132, 11, 11, 0.14)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        }
    }
});