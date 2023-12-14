export default function First() {
const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
];
const listitems = products.map(product =>
    <li key={product.id}>
        {product.title}
        </li>
        );

        return (
            <ul>{listitems}</ul>
        );}

