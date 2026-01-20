const ServiceCard = ({ item }) => {
    return (
        <div className="serviceCard">
            <img src={item.icon} alt="" />
            <div className="serviceHeading">{item.title}</div>
            <p>{item.description}</p>
        </div>
    )
}

export default ServiceCard;