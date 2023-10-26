import classNames from "classnames";


function Skeleton({ times }) {
    const outerClassNames = classNames();
    const innerClassNames = classNames();




    const boxes = Array(times)
        .fill(0)
        .map((_, i) => {
            return <div key={i} classNames={outerClassNames}>
                <div />
            </div>;
        });

    // const boxes = [];
    // for (let i = 0; i < times; i++) {
    //     boxes.push(<div key={i} />)
    // }

    return boxes;

}

export default Skeleton;