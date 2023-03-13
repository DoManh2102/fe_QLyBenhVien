import React from 'react';

function About(props) {
    return (
        <section style={{ height: '450px' }} className='section section-container'>
            <div className='section-content'>
                <div className='section_title'>
                    <h2>Truyền thông nói về BookingCare</h2>
                </div>
                <div className='about-content row'>
                    <div className='about-left col-6'>
                        <iframe width="100%" height="100%"
                            src="https://www.youtube.com/embed/147SkAVXEqM?list=PLncHg6Kn2JT6E38Z3kit9Hnif1xC_9VqI"
                            title="#51 Kết Thúc Design Giao Diện Clone BookingCare.vn 4 | React.JS Cho Người Mới Bắt Đầu"
                            framborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                    </div>
                    <div className='about-right col-6 '>
                        <p>Trong video này, chúng ta sẽ hoàn tất việc design giao diện theo trang bookingcare.vn. Chúng ta sẽ hoàn thiện những phần đang còn dang dở, để từ video tiếp theo, chúng ta sẽ bắt đầu làm về backend và react để tạo dữ liệu thật cho trang home design này.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;