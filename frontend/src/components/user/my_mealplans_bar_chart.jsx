import React from "react";
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";
function NutritionData({ nutrients, numRecipes }) {
    console.log('nutirents', {nutrients})

    let newNutrients = {}; //maybe 0's if it deosn't work for numRecipes = 0

    if(numRecipes > 0)
    {
        newNutrients = {
            Calcium: nutrients.calcium_mg * 3 / 1000 / numRecipes,
            Calories: nutrients.calories * 3 / 2250 / numRecipes,
            Carbohydrates: nutrients.carbohydrates_g * 3 / 275 / numRecipes,
            Fiber: nutrients.dietary_fiber_g * 3 / 29 / numRecipes,
            Fat: nutrients.fat_g * 3 / 60 / numRecipes,
            Iron: nutrients.iron_mg * 3 / 16.3 / numRecipes,
            Protein: nutrients.protein_g * 3 / 51 / numRecipes,
            Sodium: nutrients.sodium_mg * 3 / 2300 / numRecipes,
            Sugars: nutrients.sugars_g * 3 / 31 / numRecipes,
            "Vitamin A": nutrients.vitamin_a_iu_IU * 3 / 2700 / numRecipes,
            "Vitamin C": nutrients.vitamin_c_mg * 3 / 82 / numRecipes
        }
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