import classNames from "classnames";

function Skeleton({ times }) {

    const boxes = [];
    for (let i = 0; i < times; i++) {
        boxes.push(<div />)
    }

}

export default Skeleton;