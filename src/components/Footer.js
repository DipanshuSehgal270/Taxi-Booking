import React from "react";

function Footer() {
  return (
    <footer id="contact" className="footer">
      <h2>Book Your Ride</h2>
      <form className="booking-form">
        <input type="text" placeholder="Your Name" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="text" placeholder="Pickup Location" required />
        <input type="text" placeholder="Drop Location" required />
        <button type="submit" className="btn">Confirm Booking</button>
      </form>

      <div className="footer-info">
        <p>Email: support@taxiservice.com | Phone: +91 98765 43210</p>
        <p>© 2025 TaxiService. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
