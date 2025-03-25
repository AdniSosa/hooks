const Card = ({title, name, image}) => {
    return (
        <>
        <div className='character'>
            <h2>{title}</h2>
            <h3>{name}</h3>
            <img src={image} alt={name} />
        </div>
        
        </>
    )
}

export default Card;