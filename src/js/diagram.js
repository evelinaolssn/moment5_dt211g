"use strict";

import Chart from 'chart.js/auto';

/**
 * Collects data from JSON-file with admission statistics with fetch and API
 * 
 * @async
 * @function loadData
 * @returns {Promise<void>} Returns no value but updates the page with charts
 */
async function loadData() {
    try {
        const response = await fetch('/statistik_ht24.json');
        const data = await response.json();

        const courses = data.filter(item => item.type === "Kurs");
        const programs = data.filter(item => item.type === "Program");

        courses.sort((a, b) => b.applicantsTotal - a.applicantsTotal);
        programs.sort((a, b) => b.applicantsTotal - a.applicantsTotal);

        const topSixCourses = courses.slice(0, 6);
        const topFivePrograms = programs.slice(0, 5);

        /**
         * Creates a bar chart showing the number of applicants for the 6 most popular courses.
         * The chart is rendered in a canvas element with the id "barChart".
         * The dataset and course names comes from data fetched from an external JSON file via FetchAPI.
         */
        const barCtx = document.getElementById('barChart');
        new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: topSixCourses.map(item => item.name),
                datasets: [{
                    label: 'Antal sökande',
                    data: topSixCourses.map(item => item.applicantsTotal),
                    backgroundColor: 'rgba(202, 107, 17, 0.76)',
                    borderColor: 'rgba(132, 11, 11, 0.14)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    x: {
                        ticks: {
                            maxRotation: 120,  // roterar texten lite
                            minRotation: 30,
                        font: {
                            size: 9
                        }
                        }
                    },
                    y: { beginAtZero: true }
                }
            }
        });


        /**
         * Creates a pie chart showing the number of applicants for the 5 most popular programs.
         * The chart is rendered in a canvas element with the id "pieChart".
         * The dataset and program names comes from data fetched from an external JSON file via FetchAPI.
         */
        const pieCtx = document.getElementById('pieChart');
        new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: topFivePrograms.map(item => item.name),
                datasets: [{
                    label: 'Antal sökande',
                    data: topFivePrograms.map(item => item.applicantsTotal),
                    backgroundColor: [
                        'rgba(172, 57, 82, 1)',
                        'rgba(31, 88, 126, 1)',
                        'rgba(161, 127, 48, 1)',
                        'rgba(29, 127, 127, 1)',
                        'rgba(69, 40, 126, 1)'
                    ],
                    hoverOffset: 6
                }]
            }
        });

    } catch (error) {
        console.log("Error", error);
    }
}

loadData();