import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useLoaderData } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Statistics = () => {
  const products = useLoaderData();

  // Check if products is empty or undefined
  if (!products || products.length === 0) {
    return (
      <div className="min-h-screen px-4 md:px-10 py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Statistics</h1>
          <p className="text-gray-600 mb-8">
            No product data available to display statistics.
          </p>
        </div>
      </div>
    );
  }

  // Prepare data for chart
  const categories = [...new Set(products.map(product => product.category))];
  const prices = categories.map(category => {
    const categoryProducts = products.filter(p => p.category === category);
    return categoryProducts.reduce((sum, product) => sum + product.price, 0);
  });
  const ratings = categories.map(category => {
    const categoryProducts = products.filter(p => p.category === category);
    const avgRating = categoryProducts.reduce((sum, product) => sum + product.rating, 0) / categoryProducts.length;
    return parseFloat(avgRating.toFixed(1));
  });

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: 'Total Price ($)',
        data: prices,
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Average Rating',
        data: ratings.map(r => r * 100), // Scale up for better visualization
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        yAxisID: 'y1',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Product Statistics by Category',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Total Price ($)'
        }
      },
      y1: {
        beginAtZero: true,
        position: 'right',
        title: {
          display: true,
          text: 'Average Rating (x100)'
        },
        grid: {
          drawOnChartArea: false,
        },
      }
    }
  };

  return (
    <div className="min-h-screen px-4 md:px-10 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Statistics</h1>
        <p className="text-gray-600 mb-8">
          Explore the latest gadgets that will take your experience to the next level. 
          From smart devices to the coolest accessories, we have it all!
        </p>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="h-96">
            <Bar data={chartData} options={options} />
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800">Top Categories</h3>
              <ul className="mt-2 space-y-1">
                {categories.slice(0, 5).map(category => (
                  <li key={category} className="text-sm text-gray-700">{category}</li>
                ))}
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800">Highest Priced</h3>
              <ul className="mt-2 space-y-1">
                {[...products]
                  .sort((a, b) => b.price - a.price)
                  .slice(0, 3)
                  .map(product => (
                    <li key={product.product_id} className="text-sm text-gray-700">
                      {product.product_title} (${product.price})
                    </li>
                  ))}
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-purple-800">Top Rated</h3>
              <ul className="mt-2 space-y-1">
                {[...products]
                  .sort((a, b) => b.rating - a.rating)
                  .slice(0, 3)
                  .map(product => (
                    <li key={product.product_id} className="text-sm text-gray-700">
                      {product.product_title} ({product.rating}★)
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;