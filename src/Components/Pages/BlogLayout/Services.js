import ServiceItem from "./components/ServiceItem";

export default function Services() {
  return (
    <section class="services">
      <h2 class="section-title">Servicios</h2>

      <div class="services-items-container">
        <ServiceItem icon="car" />
        <ServiceItem icon="wifi" />
        <ServiceItem icon="satellite" />
        <ServiceItem icon="phone" />
      </div>
    </section>
  );
}
