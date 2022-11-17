import "@/Components/Stars/Stars.css";

import GrayStar from "@/Assets/Images/Components/Stars/StarsWhite.png"
import OrangeStar from "@/Assets/Images/Components/Stars/StarsOrange.png"

const Stars = ({ rating }) => {

    return (
        <div>
            {
                [...Array(5)].map((_, index) => {
                    if (index + 1 > rating) {
                        return (
                            <img src={GrayStar} alt="étoile" key={index} className="starImg" />
                        )
                    }
                    else {
                        return (
                            <img src={OrangeStar} alt="étoile" key={index} className="starImg" />
                        )
                    }
                })
            }
        </div>
    )

}

export default Stars;