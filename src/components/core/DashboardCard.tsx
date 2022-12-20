import { faker } from "@faker-js/faker";
import { Col, Row } from "antd";
import { useEffect, useState } from "react";

interface props {
    title: string;
    icon: React.ReactNode;
    numberPrefix?: string;
    numberSuffix?: string;
    number: number;
    color: string;
    updateTime?: Date;
}
function DashboardCard({ title, icon, numberPrefix, numberSuffix, number, color, updateTime = new Date() }: props) {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const intervalTime = number / 40;
        const interval = setInterval(() => {
            if (count < number) {
                setCount(count + intervalTime)
                console.log(count)
            }
        }, 30)
        return () => {
            clearInterval(interval);
        }
        // setTimeout(() => {
        //     clearInterval(interval)
        // }, 5000)
    }, [count])
    return (
        <div className="dashboard-card" style={{ backgroundColor: color }}>
            <Row>
                <Col span={18}>
                    <div className="dashboard-card-number" >
                        {`${numberPrefix ?? ""}${Math.floor(count)}${numberSuffix ?? ""}`}
                    </div>
                    <div className="dashboard-card-title">{title}</div>
                </Col>
                <Col span={6}>
                    <div className="dashboard-card-icon">{icon}</div>
                </Col>
            </Row>
            <div className="line-container">
                <div className="line"></div>
            </div>
            <div className="dashboard-card-update-time">Cập nhật cuối {updateTime.toLocaleTimeString()}</div>
        </div>)
}

export default DashboardCard;