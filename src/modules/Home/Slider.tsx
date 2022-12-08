import { Carousel } from 'antd';
// import Slider1 from "../../assets/images/slider1.png"
// import Slider2 from "../../assets/images/slider2.png"
// import Slider3 from "../../assets/images/slider3.png"
// import Slider4 from "../../assets/images/slider4.png"
// import Slider5 from "../../assets/images/slider5.png"
const Slider = () => {
    return (
        <Carousel className='slider' autoplay >
            <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/elegant-skein-350903.appspot.com/o/banner%2Fkrista-mangulsone-9gz3wfHr65U-unsplash.jpg?alt=media&token=964a081f-3e38-4256-a747-6253284ffcd0" alt='Slider' />
            </div>
            <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/elegant-skein-350903.appspot.com/o/banner%2Fjoe-caione-qO-PIF84Vxg-unsplash.jpg?alt=media&token=b3650d25-66d0-4d09-84e5-5f9078346a76" alt='Slider' />
            </div>
            <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/elegant-skein-350903.appspot.com/o/banner%2Fjamie-street-s9Tf1eBDFqw-unsplash.jpg?alt=media&token=e1448dd0-33ec-4fa6-a8d2-ff3dff3aaaf0" alt='Slider' />
            </div>
            <div>
                <img src="https://firebasestorage.googleapis.com/v0/b/elegant-skein-350903.appspot.com/o/banner%2Fcong-h-RWSh0t7bw68-unsplash%20(2).jpg?alt=media&token=9ae862f6-dc03-44d7-8357-7b4463b3d89f" alt='Slider' />
            </div>

        </Carousel>
    )
}

export default Slider
