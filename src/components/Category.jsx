export default function Category({category,select}){
    return <button onClick={select} className="category">{category}</button>
}