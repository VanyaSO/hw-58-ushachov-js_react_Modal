const Header = props => {
    return(
        <div className="modal-header">
            <div className="modal-title">{props.children}</div>
            <button onClick={props.toggle}
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
            />
        </div>
    )
}

export default Header



