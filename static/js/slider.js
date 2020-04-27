$("#ex23").slider({
    ticks: [0, 1, 2, 3, 4],
    ticks_positions: [0, 30, 60, 70, 90, 100],
    ticks_snap_bounds: 200,
	formatter: function(value) {
		return 'Current value: ' + value;
	},
	ticks_tooltip: true,
	step: 0.01
});