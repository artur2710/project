import img1 from './auto.jpg';
import img2 from './moto.jpg';
import img3 from './velo.jpg';

function Products() {
    return(
        <ul className='Three'>
<li>Automobiles</li>
<img src={img1} alt="img1"/>
<li>Motocycles</li>
<img src={img2} alt="img1"/>
<li>Bicycles</li>
<img src={img3} alt="img1"/>
</ul>
    );
}

export default Products