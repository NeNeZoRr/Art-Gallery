const ButtonBar = (props) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', position: 'fixed', bottom: 0, width: '100%', padding: '10px', background: 'white' }}>
            <button value={-5} onClick={props.handleIterate}>Back, 5</button>
            <button value={-1} onClick={props.handleIterate}>Back</button>
            <button value={1} onClick={props.handleIterate}>Next</button>
            <button value={5} onClick={props.handleIterate}>Next, 5</button>
        </div>
    )
}

export default ButtonBar;
