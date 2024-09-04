
interface Props {
    /*Function Props */
    onClick: () => void;
}

function Button({onClick}: Props) {

    return (
        <>  
            <button type="button" className="btn btn-primary" onClick={onClick}>Alert Button</button>
        </>
    );
}

export default Button;