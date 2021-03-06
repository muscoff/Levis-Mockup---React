import React from 'react'

export default function SelectBrand(props) {
    let {name, content, onChange, label} = props;
    content = content?content:[];
    const items = content.map(item=>{
        return (
            <option key={item.id} value={item.id}>{item.brand}</option>
        )
    });
    return (
        <div>
            <div className="font-allerRg capitalize">{label}</div>
           <select name={name} onChange={onChange}>
                <option value=""></option>
                {items}
           </select> 
        </div>
    )
}
