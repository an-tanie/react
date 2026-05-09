export default function Card({image,title,price}){
    return <div className="card">
        <img src={image} />
        <h5>{title}</h5>
        <span>{price}</span>
    </div>
}