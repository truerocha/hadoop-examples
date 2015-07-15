var timelineChart = c3.generate({
    bindto: '#timelineChart',
    data: {
        x: 'datetime',
        columns: [
            ['datetime',
            new Date('2014-06-01 08:15:00'),new Date('2014-08-01 08:15:00'), new Date('2014-10-08 08:15:15'), new Date('2014-10-15 08:15:30'),
            new Date('2014-10-27 08:15:00'),new Date('2014-11-01 08:15:00'), new Date('2014-11-08 08:15:15'), new Date('2014-11-18 08:15:30'),
            new Date('2014-11-25 08:15:00'),new Date('2014-12-01 08:15:00'), new Date('2014-12-08 08:15:15'), new Date('2014-12-15 08:15:30'),
            new Date('2014-12-24 08:15:00'),new Date('2015-01-01 08:15:00'), new Date('2015-01-08 08:15:15'), new Date('2015-01-15 08:15:30'),
            new Date('2015-01-28 08:15:00'),new Date('2015-02-01 08:15:00'), new Date('2015-02-08 08:15:15'), new Date('2015-02-15 08:15:30'),
            new Date('2015-02-22 08:15:00'),new Date('2015-03-01 08:20:00'), new Date('2015-03-08 08:15:15'), new Date('2015-03-15 08:15:30'),
            new Date('2015-03-24 08:15:00'),new Date('2015-04-01 08:15:00'), new Date('2015-04-08 08:15:15'), new Date('2015-04-15 08:15:30'),
            new Date('2015-04-26 08:15:00'),new Date('2015-05-01 08:15:00'), new Date('2015-05-08 08:15:15'), new Date('2015-05-15 08:15:30'), 
            new Date('2015-05-26 08:15:00'),new Date('2015-06-01 08:15:00'), new Date('2015-06-08 08:15:15'), new Date('2015-06-15 08:15:30'), 
            new Date('2015-06-21 08:15:45'),new Date('2015-06-28 08:15:45'),new Date('2015-07-04 08:15:45'),new Date('2015-07-11 08:15:45'),
            new Date('2015-07-18 08:15:45'),new Date('2015-07-25 08:15:45'),new Date('2015-08-02 08:15:45'),new Date('2015-08-03 08:15:45'),
            new Date('2015-08-10 08:15:45'),new Date('2015-08-17 08:15:45'),new Date('2015-08-25 08:15:45'),new Date('2015-08-02 08:15:45'),
            new Date('2015-09-12 08:15:45'),new Date('2015-09-28 08:15:45'),new Date('2015-10-21 08:15:45'),new Date('2015-10-28 08:15:45')],
            ['LIVECHAT 1.0 - Success', 0,73117,0,85464,11641,27142,0,0,48570,53984,40376,60053,0,0,37622,32488,41790,69382,88847,61405,15976,11366,25711,72473,0,71497,25066,76537,94690,0,14891,0,88776,15300,74774,79094,5905,16254,34219 ],
            ['LIVECHAT 1.0 - Warning', 26911,0,0,0,0,0,58778,0,0,0,0,0,68838,0,37622,0,41790,0,0,61405,0,0,0,0,0,0,0,0,0,0,0,52756,0,0,0,0,0,0,0 ],
            ['LIVECHAT 1.0 - Failed', 0,0,31789,0,0,0,0,22655,48570,0,0,0,0,89571,0,0,0,0,0,0,0,0,0,0,22366,0,0,0,0,60353,0,0,0,0,0,0,0,0,0 ]
        ],
        type: 'bar'
    },
    color: {
        pattern: ['#1b5e20','#f57f17','#bf360c']
    },
    axis: {
        x: {
            label: 'Date',
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d'
                // for normal axis, default on
                // for category axis, default off
            }
        },
        y: {
            label: 'Record Count'
        }
    },
    regions: [
        {start: '2015-03-24 08:15:00', end: '2015-03-25 08:15:00', class: 'warning'},
        {start: '2015-05-26 08:15:00', end: '2015-05-27 08:15:00', class: 'warning'},
    ],
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    },
    subchart: {
        show: true
    },
    zoom: {
        enabled: true
    }
});


var gaugeChart = c3.generate({
    bindto: '#gaugeChart',
    data: {
        columns: [
            ['data', 91.4]
        ],
        type: 'gauge',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    gauge: {
//        label: {
//            format: function(value, ratio) {
//                return value;
//            },
//            show: false // to turn off the min/max labels.
//        },
//    min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
//    max: 100, // 100 is default
//    units: ' %',
//    width: 39 // for adjusting arc thickness
    },
    color: {
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
        threshold: {
//            unit: 'value', // percentage is default
//            max: 200, // 100 is default
            values: [30, 60, 90, 100]
        }
    },
    size: {
        height: 180
    }
});

setTimeout(function () {
    gaugeChart.load({
        columns: [['data', 10]]
    });
}, 1000);

setTimeout(function () {
    gaugeChart.load({
        columns: [['data', 50]]
    });
}, 2000);

setTimeout(function () {
    gaugeChart.load({
        columns: [['data', 70]]
    });
}, 3000);

setTimeout(function () {
    gaugeChart.load({
        columns: [['data', 0]]
    });
}, 4000);

setTimeout(function () {
    gaugeChart.load({
        columns: [['data', 100]]
    });
}, 5000);