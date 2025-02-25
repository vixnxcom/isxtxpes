import { useState, useEffect } from "react";

const CountdownTimer = () => {
    const initialTime = 8 * 60 * 60; // 8 hours in seconds

    // Get stored time from localStorage or start fresh
    const getStoredTime = () => {
        const storedTime = localStorage.getItem("countdownTime");
        return storedTime ? parseInt(storedTime, 10) : initialTime;
    };

    const [timeLeft, setTimeLeft] = useState(getStoredTime);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                const newTime = prevTime > 0 ? prevTime - 1 : initialTime;
                localStorage.setItem("countdownTime", newTime); // Save progress
                return newTime;
            });
        }, 1000);

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };
    return (
        <div className="text-4xl font-bold  text-black text-center p-4 rounded-[24px] shadow-md w-64 mx-auto">
            {formatTime(timeLeft)}
        </div>
    );
};

export default CountdownTimer;
