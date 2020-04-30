
d3.json("/api/v1.0/happyness_index", function(data) {
	console.log(data)
}) 
d3.select(sarah).on("click", handleSubmit) 

// Code from Reed
async function handleSubmit(event) {
	//retrieve your slider variables and scale them
		// 	25% by 3 sliders
		var s_gdp = 25 - soc_gdp_percapita.value * 2.5;
		var s_lit = 25 - soc_literacy_%pop.value * 2.5;
		var s_sd = 25 - soc_suicide_per_100K.value * 2.5;
		var s_br = 25 - soc_birthrate_cbr.value * 2.5;
		// 25% by 2 sliders
		var f_ag = 25 - eco_%agriculture.value * 2.5;
		var f_ind = 25 - eco_%industry.value * 2.5;
		var f_ser = 25 - eco_%service.value * 2.5;
		var f_sel = 25 - eco_%self_employed.value * 2.5;
		// 25% by 3 sliders
		var m_pop = 25 - travel_popdensity_/sqmile.value * 2.5;
		var m_cos = 25 - travel_coastline_%ratio.value * 2.5;
		var m_inc = 25 - travel_incountry_%growth.value * 2.5;
		var m_arr = 25 - travel_no_of_arrivals.value * 2.5;
		//  25% by 2 sliders
		var c_fem = 25 - pop_%female.value * 2.5;
		var c_avg = 25 - pop_%avghousehold_size.value * 2.5;
		var c_typ = 25 - pop_%householdtype_nuclear.value * 2.5;
		var c_noc = 25 - pop_%householdtype_nochildren.value * 2.5;
		
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