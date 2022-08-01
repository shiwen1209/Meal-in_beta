import React from "react";
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";
function NutritionData({ nutrients }) {
    // console.log('nutirents', {nutrients})
    let newNutrients = {
        Calcium: nutrients.calcium_mg * 3 / 1000,
        Calories: nutrients.calories * 3 / 2250,
        Carbohydrates: nutrients.carbohydrates_g * 3 / 1300,
        Fiber: nutrients.dietary_fiber_g * 3 / 25,
        Fat: nutrients.fat_g * 3 / 77,
        Iron: nutrients.iron_mg * 3 / 16.3,
        Protein: nutrients.protein_g * 3 / 56,
        Sodium: nutrients.sodium_mg * 3 / 2300,
        Sugars: nutrients.sugars_g * 3 / 125,
        "Vitamin A": nutrients.vitamin_a_iu_IU * 3 / 3000,
        "Vitamin C": nutrients.vitamin_c_mg * 3 / 2000
    }

    const data = {
        labels: Object.keys(newNutrients),
        datasets: [{
            indexAxis: 'y',
            label: 'Average daily intake (%)',
            data: Object.values(newNutrients),
            options: {
                // responsive: true,
                maintainAspectRatio: true,
                yAxes: [{ ticks: { mirror: true } }],
                scales: {
                    xAxes: [{
                        gridLines: {
                            color: "rgba(0, 0, 0, 0)"
                        },
                        ticks: {
                            autoSkip: false,
                            maxRotation: 90,
                            minRotation: 90,
                            padding: -110
                        }

                    }],
                    yAxes: [{
                        gridLines: {
                            show: false
                        },
                        ticks: { mirror: true }
                    }]
                }
            },
            fill: false,
            backgroundColor: [
                'rgba(39, 140, 93)',
                'rgba(39, 140, 93)',
                'rgba(39, 140, 93)',
                'rgba(39, 140, 93)',
                'rgba(39, 140, 93)',
                'rgba(39, 140, 93)',
                'rgba(39, 140, 93)',
                'rgba(39, 140, 93)',
                'rgba(39, 140, 93)',
                'rgba(39, 140, 93)',
                'rgba(39, 140, 93)',
            ],
        }],
        xAxes: [{
            gridLines: {
                display: false
            }
        }],
        yAxes: [{
            gridLines: {
                display: false
            }
        }]
    };
    return (
        <div className="nutrition-data">
            <h1>Nutrition dashboard</h1>
            <div className="nutrition-chart">
                <Bar data={data} height="1200" width="800" />
            </div>

        </div>
    )
}
export default NutritionData;