import classNames from "classnames";


function Skeleton({ times, className }) {
    const outerClassNames = classNames(
        'relative',
        'overflow-hidden',
        'bg-gray-200',
        'rounded',
        'mb-2.5'
        className
    );
    const innerClassNames = classNames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full'
    );




    const boxes = Array(times)
        .fill(0)
        .map((_, i) => {
            return <div key={i} className={outerClassNames}>
                <div className={innerClassNames} />
            </div>;
        });

    // const boxes = [];
    // for (let i = 0; i < times; i++) {
    //     boxes.push(<div key={i} />)
    // }

    return boxes;

}

export default Skeleton;