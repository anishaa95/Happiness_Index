var dataset = {};

let element = document.querySelector('button');
element.onclick = handleSubmit;
// d3.select(sarah).on("click", handleSubmit);

// Code from Reed
function handleSubmit(event) {
	const soc_gdp_percapita = document.getElementById("soc_gdp_percapita");
	const soc_literacy_pop = document.getElementById("soc_literacy_pop");
	const soc_suicide_per_100K = document.getElementById("soc_suicide_per_100K");
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
	
	
	d3.json("/api/v1.0/happyness_index", function (data) {
	  console.log(data);
	  dataset = data;
	});
	// TBD - perform your magical calculation
	
	
	
	bestCountriestoLiveIn = dataset.filter( c => c.happyscore >= ourscore );
	
	let magical_calculation_results = {
		bestCountriestoLiveIn: bestCountriestoLiveIn,
		geoDataforMap: {}
	};
	
	// once you're done with the magical calculation...
  showOutput(magical_calculation_results);
}

function showOutput(magical_calculation_results) {
	
// generate some HTML (maybe through d3) - e.g Table
	const countrylistlocation = document.getElementById("countryList");

	let countries = magical_calculation_results.bestCountriestoLiveIn;

	countylistlocation.innerHTML = "";
	countries.forEach( c => {
		let countryData = document.createElement("li");
		countryData.innerText = c;
		countrylistlocation.add(countryData);s
	});

	// and maybe do something with a map
}

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
