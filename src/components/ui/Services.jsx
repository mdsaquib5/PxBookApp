import ServiceCard from "../items/ServiceCard";
import { servicesData } from "../../constants/data";

const Services = () => {
    return (
        <>
            <section className="servicesBg">
                <div className="container">
                    <div className="servicesGrid">
                        {servicesData.map((item, index) => (
                            <ServiceCard key={index} item={item} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;