import React, { Component } from 'react'

class SideTotal extends Component {
    constructor(props){
        super(props);
        this.state = {
            subtotal: null,
            total: null
        }
    }

    componentDidMount(){
        this.timeID = setInterval(()=>{
            this.cartInfo();
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.timeID);
    }

    cartInfo = () =>{
        let local = localStorage.getItem('cart');
        local = JSON.parse(local);
        let total = 0; 
        let subtotal = 0;
        for(let i=0; i<local.length; i++){
            subtotal = subtotal + local[i].total;
        }
        total = subtotal + this.props.shipping;
        total = total.toFixed(2);
        subtotal = subtotal.toFixed(2);
        this.setState({subtotal, total});
    }
    
    render() {
        const {subtotal, total} = this.state;
        const {shipping} = this.props;
        return (
            <div className="col-4 col-s-12 col-m-12">
                                <div className="padding-all-10 white-bg">
                                    <div className="row">
                                        <div className="col-8 capitalize font-allerRg">subtotal</div>
                                        <div className="col-4 font-allerBd right-text">$<span id="sub">{subtotal}</span></div>
                                        <div className="col-12 height-2"></div>
                                        <div className="col-8 font-allerRg capitalize">shipping</div>
                                        <div className="col-4 font-allerRg right-text">$<span>{shipping}</span></div>
                                        <div className="col-12 height-2"></div>
                                        <div className="col-8 font-allerRg capitalize">estimated tax</div>
                                        <div className="col-4 font-allerRg right-text">--</div>
                                        <div className="col-12 height-2"></div>
                                        <div className="col-8 font-allerBd uppercase">Total</div>
                                        <div className="col-4 font-allerBd right-text">$<span>{total}</span></div>
                                    </div>
                                </div>
                            </div>
        )
    }
}

export default SideTotal;