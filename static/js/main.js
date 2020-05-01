var dataset = {};

var button = d3.select("#button");

button.on("click", handleSubmit);

// Code from Reed
function handleSubmit(event) {
	const soc_gdp_percapita = document.getElementById("soc_gdp_percapita");
	const soc_literacy_pop = document.getElementById("soc_literacy_pop");
	const soc_suicide_per_100K = document.getElementById("soc_suicide");
	const soc_birthrate_cbr = document.getElementById("soc_birthrate_cbr");
	const eco_agriculture = document.getElementById("eco_agriculture");
	const eco_industry = document.getElementById("eco_industry");
	const eco_service = document.getElementById("eco_service");
	const eco_self_employed = document.getElementById("eco_self_employed");
	const travel_popdensity_sqmile = document.getElementById("travel_popdensity_sqmile");
	const travel_coastline_ratio = document.getElementById("travel_coastline_ratio");
	const travel_incountry_growth = document.getElementById("travel_incountry_growth");
	const travel_no_of_arrivals = document.getElementById("travel_no_of_arrivals");
	const pop_female = document.getElementById("pop_female");
	const pop_avghousehold_size = document.getElementById("pop_avghousehold_size");
	const pop_householdtype_nuclear = document.getElementById("pop_householdtype_nuclear");
	const pop_householdtype_nochildren = document.getElementById("pop_householdtype_nochildren");

	//retrieve your slider variables and scale them
	// 	25% by 3 sliders
	var s_gdp = 25 - soc_gdp_percapita.value * 2.5;
	var s_lit = 25 - soc_literacy_pop.value * 2.5;
	var s_sd = 25 - soc_suicide_per_100K.value * 2.5;
	var s_br = 25 - soc_birthrate_cbr.value * 2.5;
	// 25% by 2 sliders
	var f_ag = 25 - eco_agriculture.value * 2.5;
	var f_ind = 25 - eco_industry.value * 2.5;
	var f_ser = 25 - eco_service.value * 2.5;
	var f_sel = 25 - eco_self_employed.value * 2.5;
	// 25% by 3 sliders
	var m_pop = 25 - travel_popdensity_sqmile.value * 2.5;
	var m_cos = 25 - travel_coastline_ratio.value * 2.5;
	var m_inc = 25 - travel_incountry_growth.value * 2.5;
	var m_arr = 25 - travel_no_of_arrivals.value * 2.5;
	//  25% by 2 sliders
	var c_fem = 25 - pop_female.value * 2.5;
	var c_avg = 25 - pop_avghousehold_size.value * 2.5;
	var c_typ = 25 - pop_householdtype_nuclear.value * 2.5;
	var c_noc = 25 - pop_householdtype_nochildren.value * 2.5;



	d3.json("/api/v1.0/happyness_index", function (happy) {
		dataset = happy;

		// TBD - perform your magical calculation


		// for (var i = 0; i < dataset.length; i++) {
		// 	dataset[i]['happyscore'] = user_rank
		// };
		for (var i = 0; i < dataset['data'].length; i++) {
			//variables for user rank calculations
			var user_s_gdp = dataset['data'][i]['soc_gdp_percapita']
			var user_s_lit = dataset['data'][i]['soc_literacy_pop']
			var user_s_sd = dataset['data'][i]['soc_suicide_per_100k']
			var user_s_br = dataset['data'][i]['soc_birthdarate_cbr']

			var user_f_ag = dataset['data'][i]['eco_agriculture']
			var user_f_ind = dataset['data'][i]['eco_industry']
			var user_f_ser = dataset['data'][i]['eco_service']
			var user_f_sel = dataset['data'][i]['eco_self_employed']

			var user_m_pop = dataset['data'][i]['travel_popdensity_sqmile']
			var user_m_cos = dataset['data'][i]['travel_coastline_ratio']
			var user_m_inc = dataset['data'][i]['travel_incountry_growth']
			var user_m_arr = dataset['data'][i]['travel_number_of_arrivals']

			var user_c_fem = dataset['data'][i]['pop_female']
			var user_c_avg = dataset['data'][i]['pop_avghousehold_size']
			var user_c_typ = dataset['data'][i]['pop_householdtype_nuclear']
			var user_c_noc = dataset['data'][i]['pop_householdtype_numberchildren']

			// 	//Calculations
			// 	soc_rank = (s_gdp * user_s_gdp) + (s_lit * user_s_lit) + (s_sd * user_s_sd) + (s_br * user_s_br)
			// 	eco_rank = (f_ag * user_f_ag) + (f_ind * user_f_ind) + (f_ser * user_f_ser) + (f_sel * user_f_sel)
			// 	travel_rank = (m_pop * user_m_pop) + (m_cos * user_m_cos) + (m_inc * user_m_inc) + (m_arr * user_m_arr)
			// 	pop_rank = (c_fem * user_c_fem) + (c_avg * user_c_avg) + (c_typ * user_c_typ) + (c_noc * user_c_noc)
			// 	user_rank = Math.round((soc_rank * .35)+ (eco_rank * .35) + (travel_rank * .15) + (pop_rank * .15))
			// 	dataset['data'][i]['user_rank'] = user_rank
			// };

			soc_rank = (s_gdp * .50) + (s_lit * .30) + (s_sd * .15) + (s_br * .05)
			eco_rank = (f_ag * .30) + (f_ind * .50) + (f_ser * .05) + (f_sel * .15)
			travel_rank = (m_pop * .05) + (m_cos * .15) + (m_inc * .30) + (m_arr * .50)
			pop_rank = (c_fem * .15) + (c_avg * .05) + (c_typ * .50) + (c_noc * .30)
			user_rank = Math.round((soc_rank * .35) + (eco_rank * .35) + (travel_rank * .15) + (pop_rank * .15))
			dataset['data'][i]['user_rank'] = user_rank
		};

		var ourscore = dataset.data.overall_rank

		bestCountriestoLiveIn = Object.values(dataset).filter(c => c.user_rank >= ourscore);

		sorted_data = bestCountriestoLiveIn.sort(c => c.user_rank)

		// console.log(sorted_data)

		let magical_calculation_results = {
			bestCountriestoLiveIn: bestCountriestoLiveIn,
			geoDataforMap: {}
		};
		console.log(happy);
	});
};

	// once you're done with the magical calculation...
//   showOutput(magical_calculation_results);


// function showOutput(magical_calculation_results) {

// generate some HTML (maybe through d3) - e.g Table
	// const countrylistlocation = document.getElementById("countryList");

	// let countries = magical_calculation_results.bestCountriestoLiveIn;

	// countrylistlocation.innerHTML = " ";
	// countries.forEach( c => {
	// 	let countryData = document.createElement("li");
	// 	countryData.innerText = c;
	// 	countrylistlocation.add(countryData);s
	// });

	// and maybe do something with a map


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
