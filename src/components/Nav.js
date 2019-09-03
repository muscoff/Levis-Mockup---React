import React from 'react'
import Logo from './Logo';
import Menu from './Menu';
import Input from './Input';

export default function Nav(props) {
    return (
        <div id="fixed" className="width-100 height-10 white-bg flex-row border-bottom-1 z-index-1">
        <Logo />
        <Menu />
        <Input onKeyDown={props.onKeyDown} display={props.display} />
        </div>
    )
}
