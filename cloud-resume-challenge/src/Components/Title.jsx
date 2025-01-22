export default function Title({ name, contactInfo }){
    return(
        <>
            <h1 className="border-black text-2xl font-bold text-center">{name}</h1>
            <div className="text-center text-sm">
                {contactInfo.map((item) => (
                    <>
                        <span>{item}</span>
                        { contactInfo.indexOf(item)!=contactInfo.length-1 && <span> | </span>}
                    </>
                ))}
            </div>
        </>
    )
}