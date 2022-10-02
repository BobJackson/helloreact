import {FaStar} from "react-icons/fa";
import {useState} from "react";

const Star = ({selected = false}) => (
    <FaStar color={selected ? "red" : "grey"}/>
);

const createArray = length => [...Array(length)];

export default function StarRating({length: totalStars = 5}) {
    const [selectedStars] = useState(3);
    return (
        <>
            {createArray(totalStars).map((n, i) => <Star key={i} selected={selectedStars > i}/>)}
            <p>
                {selectedStars} of {totalStars} stars
            </p>¬
        </>
    );
}