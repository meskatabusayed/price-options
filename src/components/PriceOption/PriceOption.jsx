import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
    const {name , features , price} = option;
  return (
    <div className="card bg-primary text-primary-content w-96">
      <div className="card-body">
        <h2 className="card-title">{price}/mo</h2>
        <h1>{name}</h1>
        <div>
            {
                features?.map((feature , idx) => <Feature key={idx} feature={feature}></Feature>)
            }
        </div>
        <div className="card-actions justify-end">
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PriceOption;
