import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";

const ASpot = () => {
	const { user } = useContext(AuthContext)


	const handleASpot = event => {
		event.preventDefault();
		const form = event.target;
		const userEmail = user.email;
		const image = form.image.value;
		const tourists_spot_name = form.tourists_spot_name.value;
		const country_Name = form.country_Name.value;
		const location = form.location.value;
		const short_description = form.short_description.value;
		const average_cost = form.average_cost.value;
		const seasonality = form.seasonality.value;
		const travel_time = form.travel_time.value;
		const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
		const email = form.email.value;
		const name = form.name.value;

		const aSpot = { userEmail, image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time, totaVisitorsPerYear, email, name };

		console.log(aSpot);

		// Send Data
		fetch('https://euro-journey.vercel.app/aspot', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(aSpot)
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				if (data.insertedId) {
					Swal.fire({
						title: 'Success!',
						text: 'Your Tourist Spot Aed Successfully',
						icon: 'success',
						confirmButtonText: 'Cool'
					})
				}
			})

	}


	return (
		<div>
			<section className="p-6 bg-gray-100 text-gray-900">
				<form onSubmit={handleASpot} noValidate="" className="container flex flex-col mx-auto space-y-12">
					<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-royal-blue">
						<div className="space-y-2 col-span-full lg:col-span-1">
							<p className="font-bold text-lg text-[#4169E1]">Add A New Spot</p>
							<p className="text-xs text-gray-500">Explore some of the world's most renowned tourist attractions and breathtaking natural sites. </p>
							<img src="https://i.ibb.co/b5HFTXt/pexels-photo-4065617.webp" alt="" />
						</div>
						<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="image" className="text-sm text-[#333333]">Image</label>
								<input id="image" type="text" placeholder="Image" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-800 p-1 bg-white border-gray-300 text-black" />
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="tourists_spot_name" className="text-sm text-[#333333]">Spot Name</label>
								<input id="tourists_spot_name" type="text" placeholder="Spot Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-800 p-1 bg-white border-gray-300 text-black" />
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="country_Name" className="text-sm text-[#333333]">Country Name</label>
								<input id="country_Name" type="text" placeholder="Country Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-800 p-1 bg-white border-gray-300 text-black" />
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="location" className="text-sm text-[#333333]">Location</label>
								<input id="location" type="text" placeholder="Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-800 p-1 bg-white border-gray-300 text-black" />
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="short_description" className="text-sm text-[#333333]">Short Description</label>
								<input id="short_description" type="text" placeholder="Short Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-800 p-1 bg-white border-gray-300 text-black" />
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="average_cost" className="text-sm text-[#333333]">Average Cost</label>
								<input id="average_cost" type="text" placeholder="Average Cost" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-800 p-1 bg-white border-gray-300 text-black" />
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="seasonality" className="text-sm text-[#333333]">Seasonality</label>
								<input id="seasonality" type="text" placeholder="Seasonality" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-800 p-1 bg-white border-gray-300 text-black" />
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="travel_time" className="text-sm text-[#333333]">Travel Time</label>
								<input id="travel_time" type="text" placeholder="Travel Time" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-800 p-1 bg-white border-gray-300 text-black" />
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="totaVisitorsPerYear" className="text-sm text-[#333333]">Total Visitors Per Year</label>
								<input id="totaVisitorsPerYear" type="text" placeholder="Total Visitors Per Year" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-800 p-1 bg-white border-gray-300 text-black" />
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="email" className="text-sm text-[#333333]">Email</label>
								<input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-800 p-1 bg-white border-gray-300 text-black" />
							</div>
							<div className="col-span-full">
								<label htmlFor="name" className="text-sm text-[#333333]">Name</label>
								<input id="name" type="text" placeholder="Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-sky-800 p-1 bg-white border-gray-300 text-black" />
							</div>
							<div className="col-span-full mx-auto items-center justify-center ">
								<input type="submit" value="A New Spot" className="btn mx-auto bg-[#FFD700] text-[#333333]  #FFD700 hover:text-[#333333]" />
							</div>
						</div>
					</fieldset>
				</form>
			</section>

		</div>
	);
};

export default ASpot;