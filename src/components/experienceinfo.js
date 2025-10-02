import { useState } from "react";
function Experienceinfo({experiencedata,isediting,onedit,onsave}){
    const [formdata,setformdata]=useState(experiencedata);
    const handleinputchange=(e)=>{
        console.log(formdata)
        setformdata({...formdata,[e.target.name]:e.target.value})
        console.log(formdata)
    }
    if (isediting){
        return(
            <div className="experience-section">
                <h2>Experience</h2>
                <div className="form-container">
                    <input type="text" placeholder="Job Title" name="jobtitle" value={formdata.jobtitle} onChange={handleinputchange}></input>
                    <input type="text" placeholder="Company Name" name="companyname" value={formdata.companyname} onChange={handleinputchange}></input>
                    <input type="text" placeholder="Location" name="loc" value={formdata.loc} onChange={handleinputchange}></input>
                    <input type="date" placeholder="Start-Date" name="start" value={formdata.start} onChange={handleinputchange}></input>
                    <input type="date" placeholder="End-Date" name="end" value={formdata.end} onChange={handleinputchange}></input>
                    
                </div>
                <button onClick={()=>onsave(formdata)} className="save-btn">Save Changes</button>
        </div>
        )
    }
    return(
        <div className="experience-section">
            <h2> Work Experience</h2>
            <div className="info-display">
                <div className="info-item">
                    <h3>Job Title</h3>
                    <p>{experiencedata.jobtitle || 'Not specified'}</p>
                </div>
                <div className="info-item">
                    <h3>Company</h3>
                    <p>{experiencedata.companyname || 'Not specified'}</p>
                </div>
                <div className="info-item">
                    <h3>Location</h3>
                    <p>{experiencedata.loc || 'Not specified'}</p>
                </div>
                <div className="info-item">
                    <h3>Start Date</h3>
                    <p>{experiencedata.start || 'Not specified'}</p>
                </div>
                <div className="info-item">
                    <h3>End Date</h3>
                    <p>{experiencedata.end || 'Not specified'}</p>
                </div>
            </div>
            <button onClick={onedit} className="edit-btn">Edit Information</button>
        </div>
    )
}   
export default Experienceinfo