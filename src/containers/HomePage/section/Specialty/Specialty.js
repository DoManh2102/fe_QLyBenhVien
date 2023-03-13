import React from 'react';
import Slider from "react-slick";


function Specialty(props) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <section className='section section-container section-bg'>
            <div className='section-content'>
                <div className='section_title'>
                    <h2>Chuyên khoa phổ biến</h2>
                    <a href='/#'>Xem thêm</a>
                </div>
                <Slider {...settings}>
                    <div className='section_item '>
                        <div className='img_section section-specialty'></div>
                        <h3>Cơ xương</h3>
                    </div>
                    <div className='section_item '>
                        <div className='img_section section-specialty'></div>
                        <h3>Thần kinh</h3>
                    </div>
                    <div className='section_item '>
                        <div className='img_section section-specialty'></div>
                        <h3>Tiêu hoá</h3>
                    </div>
                    <div className='section_item '>
                        <div className='img_section section-specialty'></div>
                        <h3>Tim mạch</h3>
                    </div>
                    <div className='section_item '>
                        <div className='img_section section-specialty'></div>
                        <h3>Tai mũi họng</h3>
                    </div>
                    <div className='section_item '>
                        <div className='img_section section-specialty'></div>
                        <h3>Cột sống</h3>
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default Specialty;