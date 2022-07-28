import React from "react";
import Chart from 'chart.js/auto';
import { Bar } from "react-chartjs-2";

function NutritionData() {
    const data = {
        labels: ['Calories', 'Sugar', 'Saturated Fat', 'Carbohydrates', 'Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D', 'Protein'],
        datasets: [{
            indexAxis: 'y',
            label: 'Nutrition Value',
            data: [65, 35, 80, 81, 56, 55, 40, 70, 95],
            fill: false,
            backgroundColor: [
                'rgba(194, 4, 54, 0.7)',
                'rgba(194, 4, 54, 0.7)',
                'rgba(194, 4, 54, 0.7)',
                'rgba(194, 4, 54, 0.7)',
                'rgba(39, 140, 93, 0.7)',
                'rgba(39, 140, 93, 0.7)',
                'rgba(39, 140, 93, 0.7)',
                'rgba(39, 140, 93, 0.7)',
                'rgba(39, 140, 93, 0.7)',
            ],
            borderColor: [
                'rgb(194, 4, 54)',
                'rgb(194, 4, 54)',
                'rgb(194, 4, 54)',
                'rgb(194, 4, 54)',
                'rgb(39, 140, 93)',
                'rgb(39, 140, 93)',
                'rgb(39, 140, 93)',
                'rgb(39, 140, 93)',
                'rgb(39, 140, 93)',
            ],
            borderWidth: 1,
            // borderHeight: 2
        }]
    };
    return (
        <div className="nutrition-data">
            <Bar data={data} />
        </div>
    )
}
export default NutritionData;