
d3.json("/api/v1.0/happyness_index", function(data) {
	console.log(data)
}) 
d3.select(sarah).on("click", handleSubmit) 

// Code from Reed
async function handleSubmit(event) {
	//retrieve your slider variables and scale them
		// 	25% by 3 sliders
		var s_hh_n = 8.33 - household_nuclear.value * 0.833;
		var s_bt_r = 8.33 - birthrate.value * 0.833;
		var s_sd = 8.33 - suicide_per_100k.value * 0.833;
		// 25% by 2 sliders
		var f_hs = 12.5 - household_size.value * 1.25;
		var f_nb_a = 12.5 - number_of_arrivals.value * 1.25;
		// 25% by 3 sliders
		var c_pd = 8.33 - popdensity_per_mile.value * 0.833;
		var c_pct = 8.33 - percent_in_counrty_travel_growth.value * 0.833;
		var c_pfp = 8.33 - percent_of_femalepop.value * 0.833;
		//  25% by 2 sliders
		var p_p_se = 12.5 - percent_self_employed.value * 1.25;
		var p_cl_r = 12.5 - coastline_ratio.value * 1.25
		
	};
		// Calc + For loop + Map 
		
	// 	// console.log(var_name); // (10X)
	// 	event.preventDefault();
	// 	let json = {
	// 		method: "POST",
	// 		mode: "cors",
	// 		cache: "no-cache",
	// 		credentials: "same-origin",
	// 		headers: {
	// 			"Content-Type": "application/json"
	// 		},
	// 		redirect: "follow",
	// 		referrer: "no-referrer",
	// 		body: JSON.stringify(
	// 			{
	// 				data: {
	// 					"S1": s_hh_n,
	// 					"S2": s_bt_r,
	// 					"S3": s_sd,
	// 					"F1": f_hs,
	// 					"F2": f_nb_a,
	// 					"C1": c_pd,
	// 					"C2": c_pct,
	// 					"C3": c_pfp,
	// 					"P1": p_p_se,
	// 					"P2": p_cl_r,
	// 				}
	// 			})
	// 	}
	// 	console.log(json);
	// 	const result = await fetch('/output', json);
	// 	const result_json = await result.json();
	// 	model_results = JSON.parse(result_json)
	// 	model_group = model_results.Result.Output
	// 	console.log(model_group)
	// 	showOutput(model_group)