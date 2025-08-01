import './styles/components/serviceDetail.css';

const ServiceDetail = ({ service }) => {
  return (
    <div className="service-detail">
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      <h3>Key Features:</h3>
      <ul>
        {service.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceDetail;