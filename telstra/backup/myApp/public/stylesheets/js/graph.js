

var timelineChart = c3.generate({
    padding: {
        bottom: 60
    },
    bindto: '#timelineChart',
    size: {
        height: 768
    },
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
            ['LIVECHAT 1.0 - Success', 6000,53117,15000,85464,11641,27142,5000,5000,48570,53984,40376,60053,5000,5000,37622,32488,41790,69382,88847,61405,15976,11366,25711,72473,0,71497,25066,76537,94690,5000,14891,0,88776,15300,74774,79094,5905,16254,34219],
            ['LIVECHAT 1.0 - Warning', 20911, 10000,5000,5000,5000,5000,58778,5000,5000,5000,5000,5000,68838,5000,37622,5000,41790,5000,0,61405,0,0,0,0,5000,0,0,0,0,5000,0,52756,0,0,0,5000,0,0,0 ],
            ['LIVECHAT 1.0 - Failed', 6000,10000,31789,5000,5000,5000,5000,22655,48570,5000,5000,5000,5000,89571,5000,5000,5000,5000,5000,5000,5000,5000,5000,0,22366,0,0,0,0,60353,0,0,0,0,0,0,0,0,0 ]
        ],
        type: 'bar',
        groups: [['LIVECHAT 1.0 - Success', 'LIVECHAT 1.0 - Warning', 'LIVECHAT 1.0 - Failed']]
    },
    legend: {
        position: 'right'
    },
    grid: {
        x: {
            show: true
        },
        y: {
            show: true
        }
    },
    color: {
           pattern: ['#84BA5B','#E1974C','#D35E60']
    },
    axis: {
        x: {
            label: {
                text:'Date',
                position: 'outer-center'
            },
            type: 'timeseries',
            tick: {
                rotate: -55,
                multiline: false,
                format: '%Y-%m-%d',
                culling: false
                // for normal axis, default on
                // for category axis, default off
            }
        },
        y: {
            label: {
                text:'Record Count',
                position: 'outer-middle'
            }
        }
    },
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
