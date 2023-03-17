import React, { useState, useEffect } from 'react';
import MarkdownIt from 'markdown-it';
import Select from 'react-select';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import './CreateDetailtDoctor.scss'
import { useSelector, useDispatch } from 'react-redux';
import { createDetailtInfoDoctor, createDetailtInfoDoctorAction, getAllDoctorAction } from '../../../../store/actions/userActions';
import { LANGUAGES } from '../../../../utils/constant';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

function CreateDetailtDoctor(props) {
    const { allDoctor } = useSelector(state => state.user)
    let { language } = useSelector(state => state.app)
    const [listDoctor, setListDoctor] = useState([])
    const [selectedOption, setSelectedOption] = useState(null);
    const [state, setState] = useState({
        contentMarkdown: '',
        contentHTML: '',
        description: ''
    })

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllDoctorAction())
    }, [])


    const mdParser = new MarkdownIt(/* Markdown-it options */);
    // Finish!
    function handleEditorChange({ html, text }) {
        setState({
            ...state,
            contentMarkdown: text,
            contentHTML: html
        })
    }

    const handleChangeDescription = (e) => {
        setState({
            ...setState,
            description: e.target.value
        })
    }

    // xử lí về dạng option mẫu của thư viện
    const builDataInputSelect = (data) => {
        let result = [];
        data && data.length > 0 && data.map((item, index) => {
            let object = {};
            let lableVi = `${item.lastName} ${item.firstName}`
            let lableEn = `${item.firstName} ${item.lastName}`
            object.label = language === LANGUAGES.VI ? lableVi : lableEn;
            object.value = item.id;
            return (
                result.push(object)
            )
        })
        return result
    }

    useEffect(() => {
        let dataSelect = builDataInputSelect(allDoctor)
        setListDoctor(dataSelect)
    }, [allDoctor, language])

    const submitCreateDetailtDoctor = () => {
        const data = {
            ...state,
            doctorId: selectedOption.value
        }
        dispatch(createDetailtInfoDoctorAction(data))
    }



    return (
        <div className='manage_doctor_container'>
            <div className='manage_doctor_title'>
                <h2>Create detailt doctor</h2>
            </div>
            <div className='more_info'>
                <div className='select_doctor'>
                    <label>Chọn bác sĩ</label>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={listDoctor}
                    />
                </div>
                <div className='more_info_doctor'>
                    <label>Thông tin giới thiệu</label>
                    <textarea rows={4}
                        value={state.description}
                        onChange={(e) => handleChangeDescription(e)}
                    >

                    </textarea>
                </div>
            </div>
            <div className='doctor_makdown_editor'></div>
            <MdEditor style={{ height: '500px' }}
                renderHTML={text => mdParser.render(text)}
                onChange={handleEditorChange}
            />
            <button className='btn_save btn btn-primary mt-2'
                onClick={() => submitCreateDetailtDoctor()}
            >
                Lưu thông tin
            </button>
        </div>
    );
}

export default CreateDetailtDoctor;