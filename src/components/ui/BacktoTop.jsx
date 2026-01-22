import { useEffect, useState } from "react";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const scrollTop = window.scrollY;
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const percent = Math.round((scrollTop / height) * 100);

            document.documentElement.style.setProperty(
                "--scroll-progress",
                percent
            );

            setProgress(percent);
            setVisible(scrollTop > 300);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <button
                className={`back-to-top ${visible ? "show" : ""}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
            >
                <svg viewBox="0 0 100 100">
                    <circle className="bg" cx="50" cy="50" r="45" />
                    <circle className="progress" cx="50" cy="50" r="45" />
                </svg>

                <div className="center">
                    <span className="arrow">↑</span>
                    <small>{progress}%</small>
                </div>
            </button>
        </>
    );
};

export default BackToTop;