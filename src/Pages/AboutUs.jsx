
const AboutUs = () => {
    const feedbacks = [
        {
            "name": "Sarah Johnson",
            "time": "10:00 AM, July 6, 2024",
            "rating": "⭐⭐⭐⭐⭐",
            "description": "Absolutely loved exploring the detailed information about each tourist spot. The user interface is sleek and easy to navigate. Great job!",
            "img": "  https://i.ibb.co/M6YyyM9/pexels-photo-733872.webp"
          
        },
        {
            "name": "Michael Lee",
            "time": "2:15 PM, July 5, 2024",
            "rating": "⭐⭐⭐⭐⭐",
            "description": "The website provides excellent insights and vibrant images of the tourist destinations. The addition of a dark/light theme toggle is a fantastic touch. Highly recommend!",
            "img": "https://i.ibb.co/9ZhSKpg/pexels-photo-3785079.webp"
        },
        {
            "name": "Emily Davis",
            "time": "9:30 AM, July 4, 2024",
            "rating": "⭐⭐⭐⭐",
            "description": "Very informative and well-organized website. The loading speed is a bit slow at times, but overall a great resource for planning trips.",
            "img": "https://i.ibb.co/mvXRYb7/istockphoto-1337405813-612x612.jpg"
        },
        {
            "name": "John Smith",
            "time": "5:45 PM, July 3, 2024",
            "rating": "⭐⭐⭐⭐⭐",
            "description": "I appreciate the detailed descriptions and high-quality images. The protected routes for adding and viewing tourist spots are very secure. Excellent work!",
            "img": "https://i.ibb.co/mqHXRHK/pexels-photo-212286.jpg"
        },
        {
            "name": "Olivia Brown",
            "time": "11:00 AM, July 2, 2024",
            "rating": "⭐⭐⭐⭐",
            "description": "The design is beautiful and the site is very user-friendly. However, I noticed some minor bugs when sorting the tourist spots. Hope they get fixed soon.",
            "img": "https://i.ibb.co/GCsHQdy/pexels-photo-4050078.webp"
        },
        {
            "name": "David Wilson",
            "time": "8:00 PM, July 1, 2024",
            "rating": "⭐⭐⭐⭐⭐",
            "description": "The website is fantastic! I love the animation effects and the detailed cultural insights about each tourist spot. It's a must-visit site for any travel enthusiast.",
            "img": "https://i.ibb.co/jHL8890/pexels-photo-841130.jpg"
        }
    ]
    return (
        <div className='px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-9'>
            {feedbacks.map((feedback) => (
                <div key={feedback.time} className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src={feedback.img} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">{feedback.name}</h4>
                                <h5 className="text-xs dark:text-gray-600">{feedback.time}</h5>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 dark:text-yellow-700">
                            <span className="text-xl font-bold">{feedback.rating}</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                        <p>{feedback.description}</p>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default AboutUs;