
const LogIn = () => {
    return (
        <div className="w-full  max-w-md mx-auto my-12 p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <form noValidate="" action="" className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block dark:text-gray-600">email</label>
                    <input type="text" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-sky-950"
                    />

                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-sky-950"
                    />
                </div>
                <button className="block w-full p-3 text-center rounded-sm dark:text-sky-50 dark:bg-sky-950">Sign in</button>
            </form>

            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            </div>

            <p className="text-xs text-center sm:px-6 dark:text-gray-600">If you have no accout?
                <a rel="noopener noreferrer" href="/register" className="underline dark:text-gray-800">Sign up</a>
            </p>
        </div>
    );
};

export default LogIn;