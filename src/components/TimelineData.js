const TimelineData = (props) => {
   
    
    return (
        <div>
            <img src={props.data.image} />
            <h2>{props.data.year}</h2>
            <h4>{props.data.event}</h4>
        </div>

        
    )
}

export default TimelineData;