import { booksData } from "../../constants/data";
import BookCard from "../items/BookCard";

const Trending = () => {
  return (
    <>
        <section>
            <div className="container">
                <div className="sectionTitle">
                    <div className="sectionHeading">Trending this week</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tempora ipsa iusto cum provident saepe vero enim accusantium, labore, error consequuntur ea laboriosam a odio itaque aliquid animi porro ad.</p>
                </div>
                <div className="booksGrid">
                    {
                        booksData.map( (item, index)=> (
                            <BookCard key={index} item={item}/>
                        ))
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default Trending;