import React from 'react';

export default function InputField(props) {
    const {name, className, onChange, value, label, id} = props;
    return (
        <div>
            <input type="text" name={name} id={id?id:''} required="required" className={className?className:''} onChange={onChange} value={value} placeholder={label}  />
        </div>
    )
}
