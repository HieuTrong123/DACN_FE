import React, { useState } from 'react';
import Select from 'react-select';

const ComboBox = (props) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };
    return (
        <div className={props.className}>
            <label>{props.title}</label>
            <Select
                value={selectedOption}
                onChange={handleChange}
                styles={{
                    control: (provided, state) => ({
                        ...provided,
                        borderColor: state.isFocused ? '#5468E7' : 'gray',
                        '&:hover': {
                            borderColor: '#5468E7',
                        },
                    }),
                    valueContainer: (provided) => ({
                        ...provided,
                        color: 'blue',
                    }),

                }}
                options={props.options} />
            {/* {selectedOption && <p>Selected Value: {selectedOption.label}</p>} */}
        </div>
    );
};

export default ComboBox;