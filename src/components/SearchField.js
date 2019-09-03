import React from 'react';

export default function InputField(props) {
    const {name, className, onChange, onKeyDown, value, label, id} = props;
    return (
        <div>
            <div className="font-allerRg capitalize">{label?label:''}</div>
            <input type="search" name={name} id={id?id:''} className={className?className:'input'} onChange={onChange} value={value} placeholder={label} onKeyDown={onKeyDown}  />
        </div>
    )
}
