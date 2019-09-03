import React from 'react';

export default function Button(props) {
    const {value, className, onClick, id} = props;
    return (
        <div>
            <input id={id?id:''} type="submit" className={className?className:'deep-grey-bg white-text'} value={value?value:'Send'} onClick={onClick?onClick:''} />
        </div>
    )
}
