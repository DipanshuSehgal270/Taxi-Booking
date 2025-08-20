import React from "react";

function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service-card">
          <h3>City Rides</h3>
          <p>Comfortable city travel with our professional drivers.</p>
        </div>
        <div className="service-card">
          <h3>Outstation</h3>
          <p>Travel beyond city limits with affordable packages.</p>
        </div>
        <div className="service-card">
          <h3>Airport Pickup</h3>
          <p>Timely airport pickups and drop-offs 24/7.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
