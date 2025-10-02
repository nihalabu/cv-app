import React, { useState } from 'react';
import './app.css';
import Personalinfo from './components/personalinfo';
import Educationinfo from './components/educationinfo';
import Experienceinfo from './components/experienceinfo';

function App() {
  const [personaldata,setpersonaldata]=useState({name:'',phone:'',email:''});
  const [educationdata,seteducationdata]=useState({name:'',loc:'',degree:'',gpa:''});
  const [experiencedata,setexperiencedata]=useState({jobtitle:'',companyname:'',loc:'',start:'',end:''})
  const [editingsection,seteditingsection]=useState('');
  const handleedit=(section)=>{
    seteditingsection(section)

  }
  const handlepersonaldata=(data)=>{
    setpersonaldata(data);
    seteditingsection('')
  }
  const handlesaveeducation=(data)=>{
    seteducationdata(data);
    seteditingsection('');
  }
  const handlesaveexperience=(data)=>{
    setexperiencedata(data);
    seteditingsection('')
  }
  return (
    <div className="App">
      <header>
        <h1>CV Application</h1>
        <p>click edit to modify informations</p>
      </header>
      <main>
        <Personalinfo
        personaldata={personaldata}
        isediting={editingsection==='personal'}
        onedit={()=>handleedit('personal')}
        onsave={handlepersonaldata}
        />
        <Educationinfo
        educationdata={educationdata}
        isediting={editingsection==='education'}
        onedit={()=>handleedit('education')}
        onsave={handlesaveeducation}/>
        <Experienceinfo
        experiencedata={experiencedata}
        isediting={editingsection==='experience'}
        onedit={()=>handleedit('experience')}
        onsave={handlesaveexperience}/>
      </main>

    </div>
  );
}

export default App;
