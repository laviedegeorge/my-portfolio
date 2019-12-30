var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
        labels: ['HTML 5', 'eCommerce', 'SEO', 'mySql', 'PHP', 'CMS', 'JavaScript', 'CSS 3'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'transparent',
            borderColor: 'rgb(86, 89, 193)',
            data: [100, 100, 100, 100, 100, 100, 100, 100]
        }]
    },

    // Configuration options go here
    options: {}
});