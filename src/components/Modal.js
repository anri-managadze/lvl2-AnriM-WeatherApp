import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';


const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        width                 : '500px',
        height                : '400px'
    }
};

const ModalApp= ({search}) =>{
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [data, setData]=useState({});
    function openModal() {
        setIsOpen(true);
    }
    function closeModal(){
        setIsOpen(false);
    }

    useEffect(()=>{
        getData();
    }, [search]);
    const getData =()=> {
        fetch(` https://api.weatherbit.io/v2.0/forecast/hourly?&city=${search}&units=metric&key=1cd137c42bcd4af28ab1553501a00aab&hours=12`)
            .then(res => res.json())
            .then(weather => {
                setData(weather);
                console.log(weather)
            });
    }
    return (
        <div>
            <button onClick={openModal} className='hourly-btn'>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal} className='hourly-btn-close'>X</button>
                <div>
                    <h4>12 Hours Forecast</h4>
                    {(typeof data.data != 'undefined') ? (
                        <ul>
                            {data.data.map((el, index) => {
                                return (
                                    <li key={index}>{el.datetime}  {el.min_temp} / {el.max_temp} °C <span>{el.weather.description}</span></li>
                                )
                            })}
                        </ul>
                    ) : (' ')}
                </div>
            </Modal>
        </div>
    );
}
export default ModalApp;
