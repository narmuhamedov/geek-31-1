import React, {useState} from 'react';

const FormPage = () => {
    const [inputValue, setInputValue] = useState({
        user: '',
        age: '',
        position: ''
    })
    const changeInput = (event) => {
        setInputValue({
            ...inputValue,
            [event.target.name]: event.target.value
        })
    }

    const check = () => {
        if (inputValue.user === ''){
            alert('user пустой')
        }

        if (inputValue.age === ''){
            alert('age пустой')
        }

        if (inputValue.position === ''){
            alert('positon пустой')
        }
    }
    return (
        <div>
            <input
                name='user'
                type="text"
                placeholder='user'
                onChange={changeInput}
            />

            <input
                name='age'
                type="number"
                placeholder='number'
                onChange={changeInput}
            />

            <input
                name='position'
                type="number"
                placeholder='position'
                onChange={changeInput}
            />
            <button onClick={check}>check</button>
        </div>
    );
};

export default FormPage;