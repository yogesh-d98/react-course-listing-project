// import styles from './Course.module.css' //external css
import PropTypes from "prop-types";
// import HTML from '../assets/HTML.png';
import { useState ,useEffect} from "react";
const course1 = "HTML";
function Course({ course, handleDeleteCourse }) {
    const { id, name, price, img , rating, description } = course;
    useEffect(() => {
        // console.log("use effect run in inside course component ");

    });
    // let purchased = false;
    
    const [purchased, setPurchased] = useState(false);
    const [discount, setDiscount] = useState(price);
    const [discountApplied, setDiscountApplied] = useState(false);
    //img=HTML is default props
    // const styles ={
    //     backgroundColor:"green" //internal css
    // }

    //conditional rendering
    // if (isAvailable == true) {
    // console.log(purchased);
    function Buycourse(discount, event) {
        console.log(`${name}:Purchased with ${discount}%`);
        alert(`${name}:Purchased with ${discount}%`);
        setPurchased(true);

    }

    function Applydiscount(discountAmount) {
        setDiscount(discount - discountAmount);
         alert(` Rs.${discountAmount} dicount applied for course ${name}`);
        setDiscountApplied(true);
    }

    return (
        name &&
        // <div className={styles.card}>  //external css
        // internal css
        // <div style={styles}> 
        <div className="card">
            <img src={img} alt="/" className='card img'></img>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price:{discount}</p>
            <p>Rating:{rating}</p>
            {!purchased && (
                <>
                    <button onClick={((event) => Buycourse(20, event))}>Buy Now</button>

                    <button onClick={() => { Applydiscount(50) }} disabled={discountApplied}>Apply Discount</button>
                </>)}
            <button onClick={() => handleDeleteCourse(id)}>Delete</button>
            <p>{purchased ? "Purchase Successfully" : "Not Purchased"}</p>
        </div>
    );

};
// else {
//     return (
//         <div className="card">Course Not Available</div>
//     )
// };
// };

// Course.propTypes = {
//   name: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
//   img: PropTypes.string,
//   rating: PropTypes.number,
//   isAvailable: PropTypes.bool,
// };


export default Course;