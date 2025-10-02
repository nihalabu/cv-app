import React ,{ useState } from "react";

function Personalinfo({personaldata,isediting,onedit,onsave}){
    const [formdata,setformdata]=useState(personaldata);
    const handleinputchange=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
    }
    
if (isediting){return(
        <div className="personal"> 
                <h2>Personal Information</h2>
                <div className="form-container">
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        name="name" 
                        value={formdata.name} 
                        onChange={handleinputchange}
                    />
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        name="email" 
                        value={formdata.email} 
                        onChange={handleinputchange}
                    />
                    <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        name="phone" 
                        value={formdata.phone} 
                        onChange={handleinputchange}
                    />
                </div>
                <button className="save-btn" onClick={() => onsave(formdata)}>
                    Save Changes
                </button>
            </div>
         )}   
    return(
        <div className="personal">
            <h2>Personal Information</h2>
            <div className="info-display">
                <div className="info-item">
                    <h3>Full Name</h3>
                    <p>{personaldata.name || 'Not specified'}</p>
                </div>
                <div className="info-item">
                    <h3>Email</h3>
                    <p>{personaldata.email || 'Not specified'}</p>
                </div>
                <div className="info-item">
                    <h3>Phone</h3>
                    <p>{personaldata.phone || 'Not specified'}</p>
                </div>
            </div>
            <button className="edit-btn" onClick={onedit}>
                Edit Information
            </button>
        </div>
    )
}

export default Personalinfo;