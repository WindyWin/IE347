import { LineChartOutlined, MoneyCollectOutlined, UserOutlined } from '@ant-design/icons';
import { faker } from '@faker-js/faker';
import { Col, Row } from "antd";
import { Chart } from "chart.js/auto";
import { useEffect } from "react";
import DashboardCard from "../../components/core/DashboardCard";
function AdminHome() {
    useEffect(() => {

        const data = [
            { Month: "Jan", count: 25 },
            { Month: "Feb", count: 26 },
            { Month: "Mar", count: 28 },
            { Month: "Apr", count: 30 },
            { Month: "May", count: 32 },
            { Month: "Jun", count: 32 },
            { Month: "Jul", count: 33 },
        ]

        //user growth chart data
        const userGrowthData = {
            allUser: [
                { Month: "Jan", count: 1000 },
                { Month: "Feb", count: 999 },
                { Month: "Mar", count: 1020 },
                { Month: "Apr", count: 1040 },
                { Month: "May", count: 1080 },
                { Month: "Jun", count: 1150 },
                { Month: "Jul", count: 1234 },
            ],
            activeUser: [
                { Month: "Jan", count: 600 },
                { Month: "Feb", count: 499 },
                { Month: "Mar", count: 590 },
                { Month: "Apr", count: 540 },
                { Month: "May", count: 520 },
                { Month: "Jun", count: 650 },
                { Month: "Jul", count: 734 },
            ]
        }
        //turn over rate chart data
        const turnOverRateData = {
            labels: ["Thú cưng", "Phụ kiện thú cưng", "Thức ăn thú cưng", "Dịch vụ", "Vật dụng thú cưng", "Đồ chơi thú cưng", "Khác"],
            datasets: [{
                label: "Tỉ lệ doanh thu",
                data: [10, 40, 40, 60, 50, 30, 10],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)',
                    'rgba(255, 99, 132)'
                ],
                hoverOffset: 4
            }]
        }
        new Chart(
            document.getElementById('revenueChart') as HTMLCanvasElement,
            {
                type: "bar",

                data: {
                    labels: data.map(row => row.Month),
                    datasets: [
                        {
                            label: 'Doanh thu theo tháng',
                            data: data.map(row => row.count),
                            barThickness: 80,
                            animation: {
                                duration: 1000,
                                delay: 250,
                                easing: 'easeInOutSine'
                            }

                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            title: {
                                display: true,
                                text: 'Doanh thu (Triệu đồng)'
                            }
                        }
                    }
                }
            }
        );
        new Chart(
            document.getElementById('userChart') as HTMLCanvasElement,
            {
                type: "line",
                data: {
                    labels: userGrowthData.allUser.map(row => row.Month),
                    datasets: [
                        {
                            label: 'Tổng số thành viên',
                            data: userGrowthData.allUser.map(row => row.count),
                            fill: false,
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.1,
                            animation: {
                                duration: 1000,
                                delay: 250,
                                easing: 'easeInOutSine'
                            }
                        },
                        {
                            label: 'Thành viên đang hoạt động',
                            data: userGrowthData.activeUser.map(row => row.count),
                            fill: false,
                            borderColor: 'rgb(255, 99, 132)',
                            tension: 0.1,
                            animation: {
                                duration: 1000,
                                delay: 250,
                                easing: 'easeInOutSine'
                            }
                        }
                    ]
                },
            }
        )
        new Chart(
            document.getElementById('turnoverRateChart') as HTMLCanvasElement,
            {
                type: "pie",
                data: turnOverRateData,

            }
        )
    }, [])
    return (
        <><div className="admin-home">

            <Row gutter={80} >
                <Col span={8}><DashboardCard title="Số lương thành viên" icon={<UserOutlined />} color="#333C83" number={1234} updateTime={faker.date.past()} /></Col>
                <Col span={8}><DashboardCard title="Tổng doanh thu" icon={<MoneyCollectOutlined />} color="#F24A72" number={123} numberSuffix=" triệu đồng" updateTime={faker.date.past()} /></Col>
                <Col span={8}><DashboardCard title="Tăng trưởng doanh thu" icon={<LineChartOutlined />} color="#FDAF75" number={12} numberSuffix="%" updateTime={faker.date.past()} /></Col>
            </Row>
            <Row className='section2' gutter={80} >
                <Col span={16} >
                    <h2>Biểu đồ số lượng thành viên theo tháng</h2>
                    <canvas id="userChart"></canvas>
                </Col>
                <Col span={8} >
                    <h2>Biểu đồ tỉ lệ doanh thu</h2>
                    <canvas id="turnoverRateChart"></canvas>
                </Col>
            </Row>
            <div style={{ width: '100%' }}>
                <h2>Biểu đồ doanh thu theo tháng</h2>
                <canvas id="revenueChart"></canvas></div>
        </div>

        </>
    )

}

export default AdminHome