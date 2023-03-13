import React from 'react';
import Slider from "react-slick";
import bshung from '../../../../assets/images/bshung.jpg';
import bshoaian from '../../../../assets/images/nguyen-thi-hoai-an.jpg';



function OutstandingDoctor(props) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <section style={{ height: '380px' }} className='section section-container section-bg'>
            <div className='section-content'>
                <div className='section_title'>
                    <h2>Bác sĩ nổi bật tuần qua</h2>
                    <a href='/#'>Tìm kiếm</a>
                </div>
                <Slider {...settings}>
                    <div className='section_item section-item-doctor'>
                        <div className='section_item_img'>
                            <img src={bshung} alt="bshung" />
                        </div>
                        <h3>Bác sĩ Chuyên khoa II Trần Minh Khuyên</h3>
                        <span>Sức khỏe tâm thần - Tư vấn, trị liệu Tâm lý</span>
                    </div>
                    <div className='section_item section-item-doctor'>
                        <div className='section_item_img'>
                            <img src={bshoaian} alt="bshung" />
                        </div>
                        <h3>Khám Nam học, Bệnh viện Nam học và Hiếm muộn Hà Nội</h3>
                        <span>Sức khỏe tâm thần - Tư vấn, trị liệu Tâm lý</span>
                    </div>
                    <div className='section_item section-item-doctor'>
                        <div className='section_item_img'>
                            <img src={bshung} alt="bshung" />
                        </div>
                        <h3>Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp Nguyễn Duy Hưng</h3>
                        <span>Sức khỏe tâm thần - Tư vấn, trị liệu Tâm lý</span>
                    </div>
                    <div className='section_item section-item-doctor'>
                        <div className='section_item_img'>
                            <img src={bshung} alt="bshung" />
                        </div>
                        <h3>Khám Nam học, Bệnh viện Nam học và Hiếm muộn Hà Nội</h3>
                        <span>Sức khỏe tâm thần - Tư vấn, trị liệu Tâm lý</span>
                    </div>
                    <div className='section_item section-item-doctor'>
                        <div className='section_item_img'>
                            <img src={bshung} alt="bshung" />
                        </div>
                        <h3>Khám Nam học, Bệnh viện Nam học và Hiếm muộn Hà Nội</h3>
                        <span>Sức khỏe tâm thần - Tư vấn, trị liệu Tâm lý</span>
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default OutstandingDoctor;