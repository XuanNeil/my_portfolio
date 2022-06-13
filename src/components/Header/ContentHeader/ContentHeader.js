import React from "react";
import Typical from 'react-typical'
import './ContentHeader.css'

const steps = [
    'Chào mừng bạn đến website của tôi 👋', 1000,
    'Bạn có thể tìm hiểu được gì website này!', 3000,
    '1. Tôi là ai?', 4000,
    '2. Học vấn của tôi thế nào?', 5000,
    '3. Công việc hiện tại của tôi là gì?', 6000,
    '4. Các project của tôi đã làm', 1000,
    'và cuối cùng', 1000,
    'Thank you for visiting my page!', 5000
];

export default function Content() {

    return (
        <div className="home-content">
            <Typical
                steps={steps}
                loop={3}
                wrapper="h2"
                className={'typical'}
            />
        </div>
    )
}