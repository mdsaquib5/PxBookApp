import { FaTelegramPlane } from "react-icons/fa";

const Cta = () => {
    return (
        <div className="cta">
            <div className="ctaContent">
                <div className="ctaHeading">Stay Updated with <span>Panchwatix</span> Book App</div>
                <p>Subscribe to our newsletter and get the latest online courses, learning tips, and career guidance delivered straight to your inbox every week.</p>
            </div>
            <div className="ctaForm">
                <div className="ctaFormHeading">Join Our Newsletter</div>
                <p>Sign up to receive updates on new courses, tutorials, and exclusive offers.</p>
                <form action="">
                    <input type="email" name="email" placeholder="Enter your email address" required />
                    <button type="submit"><FaTelegramPlane fill="#ffff" /></button>
                </form>
            </div>
        </div>
    )
}

export default Cta