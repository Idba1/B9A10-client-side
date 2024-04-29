import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);
    const Successfully = () => toast('Register Successful!');

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // navigation systems
    const navigate = useNavigate();
    const from = "/";

    const validatePassword = (password) => {
        if (password.length < 6) {
            toast.error('Password must contain at least 6 character');
            return;

        }
        if (!/[A-Z]/.test(password)) {
            toast.error('Password must contain at least one uppercase letter');
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error('Password must contain at least one lowercase letter');
            return;
        }
        return true;
    };

    const onSubmit = (data) => {
        const { email, password } = data;


        const passwordValidation = validatePassword(password);
        if (passwordValidation !== true) {
            console.log(passwordValidation);
            return;
        }

        createUser(email, password)
            .then(() => {
                navigate(from);
            });

    };


    return (
        <div className="w-full max-w-md mx-auto my-12 p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
            <h1 className="text-2xl font-bold text-center">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="username" className="block dark:text-gray-600">Name</label>
                    <input type="text" name="username" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-sky-950"
                        {...register("FullName", { required: true })}
                    />
                    {errors.FullName && (
                        <span className="text-red-500">This field is required</span>
                    )}

                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                    <input type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-sky-950"
                        {...register("email", { required: true })}
                    />
                    {errors.email && (
                        <span className="text-red-500">This field is required</span>
                    )}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="photo_url" className="block dark:text-gray-600">Photo Url</label>
                    <input type="text" name="photo_url" id="photo_url" placeholder="photo_url" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-sky-950"
                        {...register("photo_url", { required: true })}
                    />
                    {errors.photo_url && (
                        <span className="text-red-500">This field is required</span>
                    )}
                </div>

                <div className="space-y-1 text-sm relative">
                    <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                    <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-2 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-[#1E0342]"
                        {...register("password", { required: true })}
                    />
                    <span className="absolute top-7 right-2" onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }
                    </span>
                    {errors.password && (
                        <span className="text-red-500">This field is required</span>
                    )}
                </div>
                <button onClick={Successfully} className="block w-full p-3 text-center  dark:text-black font-semibold rounded-md dark:bg-[#9AC8CD]">Register
                    <Toaster> </Toaster>
                </button>
            </form>
            <div className="flex items-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                <p className="px-3 text-sm dark:text-gray-600">Register with social accounts</p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            </div>
            <p className="text-xs text-center sm:px-6 dark:text-gray-600">If you have an accout?
                <a rel="noopener noreferrer" href="/login" className="underline dark:text-gray-800">Log In</a>
            </p>
        </div>
    );
};

export default Register;