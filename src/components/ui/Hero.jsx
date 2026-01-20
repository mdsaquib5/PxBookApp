import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="heroContent">
                        <div className="promo">Hot Promo span</div>
                        <div className="discount">Discount 60% special world book day</div>
                        <div className="heroHeading">Find over 20 million book in panchwatix book</div>
                        <p>A ipsum ad nulla, iure officiis porro aspernatur quod ea odio provident aperiam tempore, voluptatum mollitia recusandae. Accusantium vero iure eos ipsam.</p>
                        <Link to={'/'} className="btn heroBtn">Go to Collections <FaArrowRight /></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;