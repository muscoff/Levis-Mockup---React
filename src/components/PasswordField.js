import React from 'react';

export default function PasswordField(props) {
    const {name, className, onChange, value, label, id} = props;
    return (
        <div>
            <div className="font-allerRg capitalize">{label?label:''}</div>
            <input type="password" name={name} id={id?id:''} className={className?className:'input'} onChange={onChange} value={value} placeholder={label}  />
        </div>
    )
}
