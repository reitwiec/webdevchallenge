import React, { useEffect, useState } from "react";
import styled from 'styled-components';

const Timer = styled.div`
    width:100%;
    text-align:center;
    font-size:50px;
    font-weight:900;
    letter-spacing:2px;
    color:#252C33;
    text-transform:capitalize;
`;

export default function Countdown() {
    const calculateTimeLeft = () => {
        const difference = +new Date("2020-05-05T00:00:00.000-06:30") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        <Timer>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </Timer>
    );
}
