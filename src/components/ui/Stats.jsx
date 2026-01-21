import { useRef, useState, useEffect } from 'react';
import { useCountUp } from '../../constants/counter';

const Stats = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Multiple counters with different target values
    const customersCount = useCountUp(1500, 2000, isVisible);
    const booksCount = useCountUp(800, 2000, isVisible);
    const authorsCount = useCountUp(500, 2000, isVisible);
    const countriesCount = useCountUp(25, 2000, isVisible);

    // 3. Intersection Observer to trigger animation on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Stop observing once triggered
                }
            },
            { threshold: 0.3 } // Trigger when 30% of section is visible
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);
    return (
        <>
            <section ref={sectionRef} className="statsBg">
                <div className="container">
                    <div className="statsGrid hangerLine">
                        <div className="statWrapper">
                            <div className="statsCard">
                                <div className="statsBox">
                                    <div className="statRing"></div>
                                    <div className="statItem">
                                        <div className="statIcon">
                                            <img src="/assets/images/stat-1.png" alt="Stat Image" />
                                        </div>
                                        <div>
                                            <div className="statCount">{customersCount} +</div>
                                            <div className="statsTitle">Happy Customers</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="statWrapper">
                            <div className="statsCard">
                                <div className="statsBox">
                                    <div className="statRing"></div>
                                    <div className="statItem">
                                        <div className="statIcon">
                                            <img src="/assets/images/stat-1.png" alt="Stat Image" />
                                        </div>
                                        <div>
                                            <div className="statCount">{booksCount} +</div>
                                            <div className="statsTitle">Books Sold</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="statWrapper">
                            <div className="statsCard">
                                <div className="statsBox">
                                    <div className="statRing"></div>
                                    <div className="statItem">
                                        <div className="statIcon">
                                            <img src="/assets/images/stat-1.png" alt="Stat Image" />
                                        </div>
                                        <div>
                                            <div className="statCount">{authorsCount} +</div>
                                            <div className="statsTitle">Authors</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="statWrapper">
                            <div className="statsCard">
                                <div className="statsBox">
                                    <div className="statRing"></div>
                                    <div className="statItem">
                                        <div className="statIcon">
                                            <img src="/assets/images/stat-1.png" alt="Stat Image" />
                                        </div>
                                        <div>
                                            <div className="statCount">{countriesCount} +</div>
                                            <div className="statsTitle">Countries</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Stats;