import React from 'react'

export default function UploadFile(props) {
    const {name, onChange, className} = props;
    return (
        <div>
            <input type="file" name={name} onChange={onChange} className={className} />
        </div>
    )
}
