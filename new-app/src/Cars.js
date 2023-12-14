import './Cars.css';
const cars = [
    { brand: 'Audi', year: 2018, mileage: 10000, id: 1 },
    { brand: 'BMW', year: 2020, mileage: 5000, id: 2 },
    { brand: 'Mercedes', year: 2017, mileage: 60000, id: 3 },
    { brand: 'Moskvich', year: 2023, mileage: 100000, id: 4 },
]
export default function Cars() {
    const item = cars.map(car =>
        <div className = "cars" style={{color: "red", fontSize:"95px"}}
            key={car.id}>
            <div className="brand">{car.brand}</div>
            <div className="year">{car.year}</div>
            <div className="mileage">{car.mileage}</div>
        </div>
    );

    return (
        <div className = "one">{item}</div>
    );
}

