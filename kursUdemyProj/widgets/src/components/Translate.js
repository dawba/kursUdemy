import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from "./Convert";

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>
                        Enter text to translate
                    </label>
                    <input value={text} onChange={(event) => setText(event.target.value)}/>
                </div>
            </div>
            <Dropdown
                label="Select language"
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr />
            <h3 className="ui header">Translated:</h3>
            <Convert text={text} language={language}/>
        </div>
    );
};

export default Translate;