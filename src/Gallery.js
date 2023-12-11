function Gallery(props) {
    return (
        <div style={{ width: '100%', textAlign: 'center' }}>
            <img src={props.objectImg} alt={props.title} style={{ maxWidth: '100%', height: 'auto' }} />
            <p>{props.artist}</p>
        </div>
    );
}

export default Gallery;
