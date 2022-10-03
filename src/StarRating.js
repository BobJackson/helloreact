import {FaStar} from "react-icons/fa";

const Star = ({selected = false, onSelect = f => f}) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect}/>
);

const createArray = length => [...Array(length)];

export default function StarRating({style = {}, totalStars = 5, selectedStars = 0, ...props}) {
    return (
        <div style={{padding: "5px", ...style}} {...props}>
            {createArray(totalStars).map((n, i) =>
                <Star key={i}
                      selected={selectedStars > i}
                />)}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    );
}