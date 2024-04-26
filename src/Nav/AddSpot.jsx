import SmallCarosel from "../Pages/SmallCarosel";

const AddSpot = () => {

	const handleAddSpot = event => {
		event.preventDefault();
		const form = event.target;

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
		const addSpot = {image, tourists_spot_name, country_Name, location, short_description , average_cost, seasonality, travel_time, totaVisitorsPerYear, email, name};
		console.log(addSpot);
	}


	return (
		<div>
			<SmallCarosel></SmallCarosel>

			<section className="p-6 dark:bg-gray-100 dark:text-gray-900">
				<form onSubmit={handleAddSpot} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
					<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-blue-100">
						<div className="space-y-2 col-span-full lg:col-span-1">
							<p className="font-medium">Personal Inormation</p>
							<p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
						</div>
						<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="image" className="text-sm">Image</label>
								<input id="image" type="text" placeholder="Image" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-sky-800 p-1 bg-white dark:border-gray-300 text-black" />
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="tourists_spot_name" className="text-sm">Spot Name</label>
								<input id="tourists_spot_name" type="text" placeholder="Spot Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-sky-800 p-1 bg-white dark:border-gray-300 text-black" />
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="country_Name" className="text-sm">Country Name</label>
								<input id="country_Name" type="text" placeholder="Country Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-sky-800 p-1 bg-white dark:border-gray-300 text-black" />
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="location" className="text-sm">Location</label>
								<input id="location" type="text" placeholder="Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-sky-800 p-1 bg-white dark:border-gray-300 text-black" />
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="short_description" className="text-sm">Short description</label>
								<input id="short_description" type="text" placeholder="short description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-sky-800 p-1 bg-white dark:border-gray-300 text-black" />
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="average_cost" className="text-sm">average Cost</label>
								<input id="average_cost" type="text" placeholder="average_cost" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-sky-800 p-1 bg-white dark:border-gray-300 text-black" />
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="seasonality" className="text-sm">Seasonality</label>
								<input id="seasonality" type="text" placeholder="seasonality" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-sky-800 p-1 bg-white dark:border-gray-300 text-black" />
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="travel_time" className="text-sm">Travel Time</label>
								<input id="travel_time" type="text" placeholder="travel_time" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-sky-800 p-1 bg-white dark:border-gray-300 text-black" />
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="totaVisitorsPerYear" className="text-sm">Tota Visitors PerYear</label>
								<input id="totaVisitorsPerYear" type="text" placeholder="totaVisitorsPerYear" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-sky-800 p-1 bg-white dark:border-gray-300 text-black" />
							</div>
							<div className="col-span-full sm:col-span-3">
								<label htmlFor="email" className="text-sm">Email</label>
								<input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-sky-800 p-1 bg-white dark:border-gray-300 text-black" />
							</div>
							<div className="col-span-full">
								<label htmlFor="name" className="text-sm">Name</label>
								<input id="name" type="text" placeholder="name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-black focus:dark:ring-sky-800 p-1 bg-white dark:border-gray-300 text-black " />
							</div>
							<div className="col-span-full w-full">
								<input type="submit" value="Add New Spot" className="btn btn-block bg-sky-800 text-white" />
							</div>
						</div>
					</fieldset>

				</form>
			</section>
		</div>
	);
};

export default AddSpot;