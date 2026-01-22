const TestimonialCard = ({ item, className }) => {
  return (
    <div className={`testimonialCard ${className}`}>
      <div className="card-header">
        <img src={item.logo} alt="brand" className="brand-logo" />
        <span className="quote-icon">"</span>
      </div>
      <p>{item.para}</p>
      <div className='testimonialUser'>
        <img src={item.avatar} alt={item.name} />
        <p>{item.name}, {item.role}</p>
      </div>
    </div>
  )
}

export default TestimonialCard;