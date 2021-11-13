import './App.css';

function TextBox(props) {
    const myHandler = (event) => {props.change(event.target.value);}
    return (
        <div className ="TextBox">
            <label>
                {props.label}
                <input type={'text'} onChange={myHandler}></input>
            </label>
        </div>
    );
}

export default TextBox;