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
        Fat: nutrients.fat_g * 3 / 44,
        Iron: nutrients.iron_mg * 3 / 16.3,
        Protein: nutrients.protein_g * 3 / 56,
        Sodium: nutrients.sodium_mg * 3 / 2300,
        Sugars: nutrients.sugars_g * 3 / 125,
        "Vitamin A": nutrients.vitamin_a_iu_IU * 3 / 3000,
        "Vitamin C": nutrients.vitamin_c_mg * 3 / 2000
    }
    // console.log('newNutirents', newNutrients)
    // let colors = [ 'rgba(194, 4, 54, 0.7)','rgba(39, 140, 93, 0.7)',]
    const data = {
        labels: Object.keys(newNutrients),
        datasets: [{
            indexAxis: 'y',
            label: 'Nutrition Value',
            data: Object.values(newNutrients),
            fill: false,
            backgroundColor: [
                'rgba(39, 140, 93)',
                'rgba(39, 140, 93)',
                'rgba(194, 4, 54)',
                'rgba(194, 4, 54)',
                'rgba(194, 4, 54)',
                'rgba(39, 140, 93)',
                'rgba(39, 140, 93)',
                'rgba(194, 4, 54)',
                'rgba(194, 4, 54)',
                'rgba(39, 140, 93)',
                'rgba(39, 140, 93)',
            ],
            borderColor: [
                'rgba(39, 140, 93)',
                'rgba(39, 140, 93)',
                'rgba(194, 4, 54)',
                'rgba(194, 4, 54)',
                'rgba(194, 4, 54)',
                'rgba(39, 140, 93)',
                'rgba(39, 140, 93)',
                'rgba(194, 4, 54)',
                'rgba(194, 4, 54)',
                'rgba(39, 140, 93)',
                'rgba(39, 140, 93)',
            ],
            borderWidth: 1
            // borderHeight: 2
        }]
    };
    let scales = {
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
    }
    return (
        <div className="nutrition-data">
            <Bar data={data} scales={scales} />
        </div>
    )
}
export default NutritionData;