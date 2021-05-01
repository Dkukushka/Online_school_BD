new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    lineColors: ['orange'],
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        {
            year: '2017',
            value: 30
        },
        {
            year: '2018',
            value: 45
        },
        {
            year: '2019',
            value: 70
        },
        {
            year: '2020',
            value: 50
        },
        {
            year: '2021',
            value: 85
        }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
});

Morris.Donut({
    element: 'donut-example',
    data: [
      {label: "Математика", value: 52},
      {label: "IКыргыз тил", value: 80},
      {label: "Физика", value: 70}
    ],
    colors: ['orange','#0072f2','#f42a26'],
    labelColor: '#fff'
  });
  
// Morris.Bar({
//     element: 'bar-example',
//     data: [
//       { y: '2006', a: 100, b: 90 },
//       { y: '2007', a: 75,  b: 65 },
//       { y: '2008', a: 50,  b: 40 },
//       { y: '2009', a: 75,  b: 65 },
//       { y: '2010', a: 50,  b: 40 },
//       { y: '2011', a: 75,  b: 65 },
//       { y: '2012', a: 100, b: 90 }
//     ],
//     xkey: 'y',
//     ykeys: ['a', 'b'],
//     labels: ['Series A', 'Series B']
//   });

// Morris.Line({
//     element: 'line-example',
//     data: [
//       { y: '2006', a: 100, b: 90 },
//       { y: '2007', a: 75,  b: 65 },
//       { y: '2008', a: 50,  b: 40 },
//       { y: '2009', a: 75,  b: 65 },
//       { y: '2010', a: 50,  b: 40 },
//       { y: '2011', a: 75,  b: 65 },
//       { y: '2012', a: 100, b: 90 }
//     ],
//     xkey: 'y',
//     ykeys: ['a', 'b'],
//     labels: ['Series A', 'Series B']
//   });