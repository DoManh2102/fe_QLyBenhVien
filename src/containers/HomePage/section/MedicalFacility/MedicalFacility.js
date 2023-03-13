import React from 'react';
import Slider from "react-slick";


function MedicalFacility(props) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <section className='section section-container'>
            <div className='section-content'>
                <div className='section_title'>
                    <h2>Cơ sở y tế nổi bật</h2>
                    <a href='/#'>Tìm kiếm</a>
                </div>
                <Slider {...settings}>
                    <div className='section_item '>
                        <div className='img_section section-medicalFacility'>   </div>
                        <h3>Bệnh viện Hữu nghị Việt Đức</h3>
                    </div>
                    <div className='section_item '>
                        <div className='img_section section-medicalFacility'></div>
                        <h3>Bệnh viện Chợ Rẫy</h3>
                    </div>
                    <div className='section_item '>
                        <div className='img_section section-medicalFacility'></div>
                        <h3>Phòng khám Bệnh viện Đại học Y Dược 1</h3>
                    </div>
                    <div className='section_item '>
                        <div className='img_section section-medicalFacility'></div>
                        <h3>Bệnh viện Trung ương Quân đội 108</h3>
                    </div>
                    <div className='section_item '>
                        <div className='img_section section-medicalFacility'></div>
                        <h3>Bệnh viện Trung ương Hưng Việt</h3>
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default MedicalFacility;