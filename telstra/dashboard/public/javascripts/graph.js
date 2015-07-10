var chart = c3.generate({
    data: {
        x: 'datetime',
        columns: [
            ['datetime', new Date('2015-07-09 08:15:00'), new Date('2015-07-09 08:15:15'), new Date('2015-07-09 08:15:30'), new Date('2015-07-09 08:15:45')],
            ['telstra.node01.com', 60, 70, 80, 90],
            ['telstra.node02.com', 70, 30, 70, 50],
            ['telstra.node03.com', 10, 20, 40, 10],
        ]
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d %H:%M:%S'
            }
        }
    },
    regions: [
        {start: new Date('2015-07-09 08:15:00'), end: new Date('2015-07-09 08:15:15'), class: 'good'}, 
        {start: new Date('2015-07-09 08:15:15'), end: new Date('2015-07-09 08:15:30'), class: 'warning'},
        {start: new Date('2015-07-09 08:15:30'), end: new Date('2015-07-09 08:15:45'), class: 'bad'}
        // {start: new Date('2014/01/15'), end: new Date('20 Jan 2014')},
        // {start: 1390575600000, end: 1391007600000} // start => 2014-01-25 00:00:00, end => 2014-01-30 00:00:00
    ]
});
