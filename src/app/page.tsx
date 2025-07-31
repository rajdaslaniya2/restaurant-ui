"use client";
import React, { useState } from "react";
import { EyeOff, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import TopNavbar from "./components/TopNavbar";

export default function Home() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simple validation - you can replace this with actual authentication logic
        if (username.trim() && password.trim()) {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Redirect to lunchtime page after successful login
            router.push('/lunchtime');
        } else {
            alert('Please enter both username and password');
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex flex-col">
            {/* Status Bar */}
            <div className="flex justify-between items-center px-6 pt-3 pb-2 text-black max-w-3xl mx-auto w-full">
                <span className="font-semibold text-lg">9:41</span>
                <TopNavbar currentPage="login" />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center">
                {/* Illustration */}
                <div className="mb-16">
                    <div className="relative">
                        {/* Person illustration */}
                        <div className="w-64 h-80 relative">
                            {/* Person body */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                                <div className="w-24 h-32 bg-green-400 rounded-t-full relative">
                                    {/* Arms */}
                                    <div className="absolute -left-6 top-8 w-12 h-6 bg-green-400 rounded-full transform -rotate-12"></div>
                                    <div className="absolute -right-6 top-8 w-12 h-6 bg-green-400 rounded-full transform rotate-12"></div>
                                    {/* Head */}
                                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-2 border-gray-200">
                                        <div className="w-8 h-8 bg-gray-800 rounded-full mt-1 mx-auto"></div>
                                    </div>
                                </div>
                                {/* Legs */}
                                <div className="flex justify-center space-x-2 mt-1">
                                    <div className="w-3 h-16 bg-gray-800 rounded-full"></div>
                                    <div className="w-3 h-16 bg-gray-800 rounded-full"></div>
                                </div>
                            </div>

                            {/* Phone mockup */}
                            <div className="absolute top-8 right-4 w-24 h-40 bg-white rounded-2xl border-2 border-gray-300 shadow-lg">
                                <div className="p-2">
                                    <div className="w-8 h-8 bg-gray-200 rounded-full mx-auto mb-2"></div>
                                    <div className="space-y-1">
                                        <div className="h-2 bg-green-400 rounded w-3/4"></div>
                                        <div className="h-1 bg-gray-300 rounded w-full"></div>
                                        <div className="h-1 bg-gray-300 rounded w-full"></div>
                                        <div className="h-1 bg-gray-300 rounded w-full"></div>
                                        <div className="h-1 bg-gray-300 rounded w-full"></div>
                                    </div>
                                    <div className="mt-2 h-4 bg-gray-800 rounded text-xs text-white flex items-center justify-center">
                                        LOGIN
                                    </div>
                                </div>
                            </div>

                            {/* Security shield */}
                            <div className="absolute top-4 right-0 w-12 h-14 bg-green-500 rounded-lg flex items-center justify-center transform rotate-12">
                                <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                            </div>

                            {/* Checkmark */}
                            <div className="absolute bottom-8 left-8 w-8 h-8 bg-white rounded-full border-2 border-green-500 flex items-center justify-center">
                                <div className="w-3 h-2 border-b-2 border-r-2 border-green-500 transform rotate-45"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form Container with White Background */}
                <div className="w-full max-w-3xl mx-auto bg-white rounded-3xl rounded-b-none px-6 py-6 shadow-sm">
                    <h1 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Login</h1>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-base font-medium text-gray-700">Username</label>
                            <input
                                type="text"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-300 bg-gray-50 text-gray-700 placeholder-gray-400"
                                required
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-base font-medium text-gray-700">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-300 bg-gray-50 text-gray-700 placeholder-gray-400"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center pt-1">
                            <input
                                id="remember"
                                type="checkbox"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-1"
                            />
                            <label htmlFor="remember" className="ml-3 text-base text-gray-700">
                                Remember me
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gray-800 text-white py-3 rounded-xl font-medium text-base hover:bg-gray-900 transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Logging in...' : 'Login'}
                        </button>
                        <div className="mt-6 w-32 h-1 bg-gray-800 rounded-full mx-auto"></div>
                    </form>
                </div>

                {/* Bottom indicator */}
            </div>
        </div>
    );
}
