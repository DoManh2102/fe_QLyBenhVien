import React from 'react';
import Slider from "react-slick";

function Handbook(props) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <section className='section section-container'>
            <div className='section-content'>
                <div className='section_title'>
                    <h2>Cẩm nang</h2>
                    <a href='/#'>Tất cả bài viết</a>
                </div>
                <Slider {...settings}>
                    <div className='section_item'>
                        <div className='row'>
                            <div className='img_section section-handbook col-6'></div>
                            <h3 className='section_item_description col-6 px-3'>Top 6 Bệnh viện, Phòng khám Nam khoa Hà Nội đáng tin cậy (phần 2)</h3>
                        </div>
                    </div>
                    <div className='section_item'>
                        <div className='row'>
                            <div className='img_section section-handbook col-6'></div>
                            <h3 className='section_item_description col-6 px-3'>Top 6 Bệnh viện, Phòng khám Nam khoa Hà Nội đáng tin cậy (phần 2)</h3>
                        </div>
                    </div>
                    <div className='section_item'>
                        <div className='row'>
                            <div className='img_section section-handbook col-6'></div>
                            <h3 className='section_item_description col-6 px-3'>Top 6 Bệnh viện, Phòng khám Nam khoa Hà Nội đáng tin cậy (phần 2)</h3>
                        </div>
                    </div>
                    <div className='section_item'>
                        <div className='row'>
                            <div className='img_section section-handbook col-6'></div>
                            <h3 className='section_item_description col-6 px-3'>Top 6 Bệnh viện, Phòng khám Nam khoa Hà Nội đáng tin cậy (phần 2)</h3>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default Handbook;