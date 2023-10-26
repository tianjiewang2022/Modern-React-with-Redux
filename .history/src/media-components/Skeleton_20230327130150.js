import classNames from "classnames";

function Skeleton({ times }) {
    const boxes = Array(times),

    // const boxes = [];
    // for (let i = 0; i < times; i++) {
    //     boxes.push(<div key={i} />)
    // }

    return boxes;

}

export default Skeleton;