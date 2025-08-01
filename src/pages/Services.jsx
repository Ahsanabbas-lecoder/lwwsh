import ServiceDetail from '../components/ServiceDetail';
import './styles/pages/services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "We build custom e-commerce solutions tailored to co-operative businesses with features like inventory management, payment processing, and member discounts.",
      features: [
        "Custom product catalogs",
        "Secure payment gateways",
        "Member management system",
        "Order tracking"
      ]
    },
    {
      id: 2,
      title: "Business Management System",
      description: "Comprehensive tools to streamline your co-operative's operations, from accounting to member relations.",
      features: [
        "Financial reporting",
        "Inventory tracking",
        "Member database",
        "Decision-making tools"
      ]
    }
    // Add other services similarly
  ];

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map(service => (
          <ServiceDetail key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;