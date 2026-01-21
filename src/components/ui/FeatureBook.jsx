import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { sellerData } from "../../constants/data";
import SellerCard from "../items/SellerCard";

const FeatureBook = () => {
    return (
        <>
            <section className="featureBook">
                <div className="container">
                    <div className="titleBtn">
                        <div className="sectionHeading">Feature Book</div>
                        <Link to={'/'} className="btn borderBtn">View more <FaArrowRight /></Link>
                    </div>
                    <div className="sellerGrid">
                        {
                            sellerData.map((item, index) => (
                                <SellerCard key={index} item={item} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeatureBook;