import './Main.css';

function Main() {
    return (
        <main className="main">
            <section id="home" className="home">
                <img src="/images/1.jpg" alt="Bus Travel" className="image" />
                <h2>Welcome to Our Bus Travel Service</h2>
                <p>Embark on a journey filled with comfort, safety, and luxury with our premium bus services.</p>
                <button className="button">Explore Now</button>
            </section>

            <section id="services" className="services">
                <h2>Our Services</h2>
                <div className="service-container">
                    <div className="service">
                        <h3>Comfortable Seating</h3>
                        <p>Our buses are equipped with plush seats that recline for your comfort.</p>
                    </div>
                    <div className="service">
                        <h3>Affordable Tickets</h3>
                        <p>Travel without breaking the bank with our budget-friendly ticket prices.</p>
                    </div>
                    <div className="service">
                        <h3>Reliable Scheduling</h3>
                        <p>We pride ourselves on punctuality and consistent schedules.</p>
                    </div>
                    <div className="service">
                        <h3>24/7 Support</h3>
                        <p>Our customer support is available around the clock to assist you.</p>
                    </div>
                    <div className="service">
                        <h3>Onboard Entertainment</h3>
                        <p>Enjoy movies and music on long journeys with our entertainment system.</p>
                    </div>
                    <div className="service">
                        <h3>Free Wi-Fi</h3>
                        <p>Stay connected while you travel with our complimentary Wi-Fi.</p>
                    </div>
                </div>
            </section>

            <section id="booking" className="booking">
                <h2>Book Your Bus Now</h2>
                <form className="booking-form">
                    <input type="text" placeholder="From" className="input" required />
                    <input type="text" placeholder="To" className="input" required />
                    <input type="date" className="input" required />
                    <input type="number" placeholder="Number of Passengers" className="input" min="1" required />
                    <button type="submit" className="button">Book Now</button>
                </form>
            </section>

            <section id="gallery" className="gallery">
                <h2>Our Buses</h2>
                <div className="gallery-grid">
                    <img src="/images/2.jpg" alt="Bus 1" className="gallery-image" />
                    <img src="/images/3.jpg" alt="Bus 2" className="gallery-image" />
                    <img src="/images/4.jpg" alt="Bus 3" className="gallery-image" />
                    <img src="/images/5.jpg" alt="Bus 4" className="gallery-image" />
                    <img src="/images/6.jpg" alt="Bus 5" className="gallery-image" />
                    <img src="/images/7.jpg" alt="Bus 6" className="gallery-image" />
                    <img src="/images/8.jpg" alt="Bus 7" className="gallery-image" />
                    <img src="/images/9.jpg" alt="Bus 8" className="gallery-image" />
                    <img src="/images/10.jpg" alt="Bus 9" className="gallery-image" />
                    <img src="/images/11.jpg" alt="Bus 10" className="gallery-image" />
                </div>
            </section>

            <section id="testimonials" className="testimonials">
                <h2>What Our Customers Say</h2>
                <blockquote className="testimonial">
                    <p>"The bus was incredibly comfortable, and the staff were very friendly!"</p>
                    <footer>- Shaik.</footer>
                </blockquote>
                <blockquote className="testimonial">
                    <p>"Great experience! I loved the onboard entertainment options."</p>
                    <footer>- Nagur.</footer>
                </blockquote>
                <blockquote className="testimonial">
                    <p>"I appreciate the reliable schedule. My journey was smooth!"</p>
                    <footer>- Babu.</footer>
                </blockquote>
            </section>

            <section id="about" className="about">
                <h2>About Us</h2>
                <p>With over 10 years in the travel industry, we provide unforgettable travel experiences with a fleet of top-notch buses.</p>
                <p>Our mission is to ensure that every journey you take with us is safe, comfortable, and enjoyable.</p>
                <p>Join us as we explore the world together, creating memories on every trip!</p>
            </section>

            <section id="contact" className="contact">
                <h2>Contact Us</h2>
                <form className="form">
                    <input type="text" placeholder="Name" className="input" required />
                    <input type="email" placeholder="Email" className="input" required />
                    <textarea placeholder="Message" className="textarea" required></textarea>
                    <button type="submit" className="button">Send Message</button>
                </form>
            </section>
        </main>
    );
}

export default Main;
