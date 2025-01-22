export default function List({ event, bullets, date, columns=1, bulletDate }) {
    const getGridColumns = (cols) => {
        switch(cols) {
            case 1: return 'grid-cols-1';
            case 2: return 'grid-cols-2';
            case 3: return 'grid-cols-3';
            case 4: return 'grid-cols-4';
            default: return 'grid-cols-1';
        }
    }
    
    function bulletColumn(){
        let container = []
        let counter = 0

        for(let i = 0; i<columns;i++){
            container.push([])
        }

        bullets.forEach((value) => {
            container[counter].push(value)
            counter = (counter+1)%columns
        })

        return(
            <ul className={`grid ${getGridColumns(columns)} text-sm text-wrap break-words mb-3`}>
                {container.map((column, columnIndex) => (
                    <div key={columnIndex}>
                        {column.map((item, i) => (
                            <div className="flex justify-between">
                                <li className="order-first list-disc list-inside mx-1" key={item}>{item}</li>
                                {bulletDate && <span className="order-last"> {bulletDate[i]} </span>}
                            </div>
                        ))}
                    </div>
                ))}
            </ul> 
        )
    }
    
    return (
        <>
            <div className="flex justify-between text-sm font-bold">
                <h1 className="order-first">{event}</h1>
                <h1 className="order-last"> {date} </h1>
            </div>
            {bulletColumn()}
        </>
    )
}