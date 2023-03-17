import React, { useEffect } from 'react';
import Slider from "react-slick";
import { LANGUAGES } from '../../../../utils/constant';
import { useSelector, useDispatch } from 'react-redux';
import { getTopDoctorAction } from '../../../../store/actions';
import { FormattedMessage } from 'react-intl';

function OutstandingDoctor(props) {
    const dispatch = useDispatch()
    let { topDoctor } = useSelector(state => state.user)
    let { language } = useSelector(state => state.app)

    useEffect(() => {
        dispatch(getTopDoctorAction())
    }, [])

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: topDoctor.length >= 4 ? 4 : topDoctor.length,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <section style={{ height: '380px' }} className='section section-container section-bg'>
            <div className='section-content'>
                <div className='section_title'>
                    <h2>
                        <FormattedMessage id="section.title.top_last_week_doctor" />
                    </h2>
                    <a href='/#'>
                        <FormattedMessage id="section.search" />
                    </a>
                </div>
                <Slider {...settings}>
                    {topDoctor && topDoctor.length > 0 && topDoctor.map((item, index) => {
                        let imgBase64 = '';
                        if (item.image) {
                            imgBase64 = new Buffer(item.image, 'base64').toString('binary')
                        }
                        let nameVI = `${item.positionData.value_VI}: ${item.lastName} ${item.firstName}`
                        let nameEN = `${item.positionData.value_EN}: ${item.firstName} ${item.lastName}`
                        return (
                            <div key={index} className='section_item section-item-doctor'>
                                <div className='section_item_img'>
                                    <img src={imgBase64} alt={`avata bs ${item.firstName}`} />
                                </div>
                                <h3>{language === LANGUAGES.VI ? nameVI : nameEN}</h3>
                                <span>Sức khỏe tâm thần - Tư vấn, trị liệu Tâm lý</span>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </section>
    );
}

export default OutstandingDoctor;