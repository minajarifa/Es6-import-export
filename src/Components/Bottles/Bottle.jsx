export default function Bottle({ bottle }) {
  const {
    brand,
    currency,
    expiry_date,
    id,
    is_recyclable,
    material,
    origin_country,
    product_name,
    volume_ml,
  } = bottle;
  console.log(bottle);
  return (
    <div>
      <div  className="card card-border bg-base-100 w-96">
        <div className="card-body">
          <h2 className="card-title">{product_name}</h2>
          <h2 className="card-title">{origin_country}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="justify-end card-actions">
            <button className="px-3 btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
