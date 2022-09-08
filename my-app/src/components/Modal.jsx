import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class Modal extends React.Component{
    static Header = Header;
    static Body = Body;
    static Footer = Footer;

    render() {
        const { isOpen } = this.props;
        const styleModal = isOpen ? {display : 'block', width: '50%'} : {display : 'none'};
        const classNameModal = isOpen ? "modal fade show" : "modal";

        return(
            <div className={classNameModal} style={styleModal} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }

}

export default Modal;
