import SellerCard from "../items/SellerCard";
import { sellerData } from "../../constants/data";

const BestSeller = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="trendingTitle">
                        <div className="trendingHeading">Best Seller</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempora ipsa iusto cum provident saepe vero enim accusantium, labore, error consequuntur ea laboriosam a odio itaque aliquid animi porro ad.</p>
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

export default BestSeller;