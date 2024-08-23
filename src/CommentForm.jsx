import { useState } from "react";


export default function CommentForm() {
    let [formData, setFormData] = useState({
        username: "",
        remark: "",
        rating: ""
    });

    const handleInputChange = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name]: event.target.value};
        });
    };

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();

        setFormData({
            username: "",
            remark: "",
            rating: ""
        });

    }
    return (
        <div>
            <h2>Give a comment</h2>
            <form onSubmit={handleSubmit}>

                <label htmlFor="username">Username : </label>
                <input type="text" 
                    placeholder="username" 
                    value={formData.username} 
                    id="username"
                    onChange={handleInputChange}
                    name="username"
                    />
                <br /><br /><br />

                <label htmlFor="remark">Remarks : </label>
                <textarea placeholder="Add remarks"
                    value={formData.remark}
                    id="remark"
                    onChange={handleInputChange}
                    name="remark" 
                    ></textarea>
                <br /><br />

                <label htmlFor="rating">Rating : </label>
                <input type="number"
                     placeholder="rating" 
                     min={1} max={5} 
                     value={formData.rating}
                     name="rating"
                     onChange={handleInputChange}    
                     />
                <br /><hr />
                <button>Add a Comment</button>
            </form>
        </div>
    );
}