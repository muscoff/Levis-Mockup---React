import React from 'react'

export default function UploadFiles(props) {
    const {name, onChange, className, max, label} = props;
    return (
        <div>
            <div className="font-allerRg capitalize">{label}</div>
            <input type="file" name={name?name:'files[]'} onChange={onChange} multiple max={max?max:4} className={className?className:'input'} />
        </div>
    )
}
