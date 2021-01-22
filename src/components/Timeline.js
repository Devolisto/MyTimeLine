import data from "../data";
import TimelineData from "./TimelineData";

const Timeline = () => {
    const dataList = data.map((data) => <TimelineData key={data.id} data={data} />

    )
    return (
    <div>
    {dataList}
    </div> 
    )  

}

export default Timeline;