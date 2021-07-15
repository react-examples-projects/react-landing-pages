import ServiceItem from "./components/ServiceItem";

export default function Services() {
  return (
    <section className="services">
      <h2 className="section-title">Servicios</h2>

      <div className="services-items-container">
        <ServiceItem icon="car" />
        <ServiceItem icon="wifi" />
        <ServiceItem icon="satellite" />
        <ServiceItem icon="phone" />
      </div>
    </section>
  );
}
