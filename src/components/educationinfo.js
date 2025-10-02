import React ,{ useState } from "react";
function Educationinfo({educationdata,isediting,onedit,onsave}){
    const [formdata,setformdata]=useState(educationdata);
    const handleinputchange=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
    }
    if (isediting){
        return(
            <div className="education-section">
                <h2>Education Qualification</h2>
                <div className="form-container">
                    <input type="text" placeholder="Institution name" name="name" value={formdata.name} onChange={handleinputchange}></input>
                    <input type="text" placeholder="Location" name="loc" value={formdata.loc} onChange={handleinputchange}></input>
                    <input type="text" placeholder="Degree" name="degree" value={formdata.degree} onChange={handleinputchange}></input>
                    <input type="number" placeholder="GPA" name="gpa" value={formdata.gpa} onChange={handleinputchange}></input>
                    
                </div>
                <button onClick={()=>onsave(formdata)} className="save-btn">Save Changes</button>
            </div>
        )
    }
    return(
        <div className="education-section">
            <h2>Educational Information</h2>
            <div className="info-display">
                <div className="info-item">
                    <h3>Institution</h3>
                    <p>{educationdata.name || 'Not specified'}</p>
                </div>
                <div className="info-item">
                    <h3>Location</h3>
                    <p>{educationdata.loc || 'Not specified'}</p>
                </div>
                <div className="info-item">
                    <h3>Degree</h3>
                    <p>{educationdata.degree || 'Not specified'}</p>
                </div>
                <div className="info-item">
                    <h3>GPA</h3>
                    <p>{educationdata.gpa || 'Not specified'}</p>
                </div>
            </div>
            <button className="edit-btn" onClick={onedit}>
                Edit Information
            </button>

        </div>
    )
}   
export default Educationinfo