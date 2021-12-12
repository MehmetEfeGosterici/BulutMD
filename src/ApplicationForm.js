import React, { useState } from 'react'
import "./ApplicationForm.css"
import axios from 'axios';


function ApplicationForm() {

    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    const numRegex = /^[1-9]\d*$/;
    const nameRegex = /^[a-z ,.'-]+$/i;

    const request = async ()=>{

        if(nameRegex.test(name)&&numRegex.test(tc)&&numRegex(phone)&&emailRegex(email)){
            const res = await axios.post("http://localhost:8080/form/api/v1/",{
                name:name,
                identityNum:tc,
                email:email,
                phone:phone,
                address:address,
                dob:dob,
                q1:q1,
                q2:q2,
                q3:q3,
                q4:q4,
                q5:q5
            })
            console.log(res.data)
            alert("Application sent successfully")
        }
        alert("Please make sure the form is filled out correctly.")
        return;
    }

    const [name,setName] = useState("");
    const [tc,setTc] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("")
    const [address,setAdress] = useState("")
    const [dob,setDob] = useState("")
    const [q1,setq1] = useState("")
    const [q2,setq2] = useState("")
    const [q3,setq3] = useState("")
    const [q4,setq4] = useState("")
    const [q5,setq5] = useState("")
    return <>
        <form className="form" >
            
            <div className="applicationForm">
                <h2>Franchise Application Form</h2>
                <div className="formLabel">
                    <label>Name&Surname
                        <input className={nameRegex.test(name)||name.length==0?"":"invalid"} type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                        <p className={nameRegex.test(name)||name.length==0?"warning":"warningInvalid"}>Name&Surname must consist of only english characters</p>
                    </label>
                    <label>Identity Number
                        <input className={numRegex.test(tc)||tc.length==0?"":"invalid"} id="tc" type="text" value={tc} onChange={(e)=>setTc(e.target.value)}/>
                        <p className={numRegex.test(tc)||tc.length==0?"warning":"warningInvalid"}>Identity number must consist of only numbers and can't start with 0</p>
                    </label>
                    <label>Email
                        <input className={emailRegex.test(email)||email.length==0?"":"invalid"} type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <p className={emailRegex.test(email)||email.length==0?"warning":"warningInvalid"}>Email address must consist of only english characters and include @ and . signs</p>
                    </label>
                    <label>Phone Number
                        <input className={numRegex.test(phone)||phone.length==0?"":"invalid"} type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                        <p className={numRegex.test(phone)||phone.length==0?"warning":"warningInvalid"}>Phone number must consist of only numbers and can't start with 0</p>
                    </label>
                    <label>Address
                        <textarea rows={5} value={address} onChange={(e)=>setAdress(e.target.value)}></textarea>
                    </label>
                    <label>Date of Birth
                        <input type="date" value={dob} onChange={(e)=>setDob(e.target.value)}/>
                    </label>
                    <label>Were you ever involved with retail trade?
                        <div className="checkbox">
                            <label> Yes
                                <input type="radio" value="Yes"  onChange={(e)=>setq1(e.target.value)} />
                            </label>
                            <label>No
                                <input type="radio" value="No" onChange={(e)=>setq1(e.target.value)} />
                            </label>
                        </div>
                    </label>
                    <label>What is your reason for preferring Lokumcu Baba?
                        <textarea rows={5} value={q2} onChange={(e)=>setq2(e.target.value)} ></textarea>
                    </label>
                    <label>Which City/district are you considering a franchise for?
                        <select value={q3}  onChange={(e)=>setq3(e.target.value)}>
                            <option selected value="Edirne">Edirne</option>
                            <option value="Istanbul">Istanbul</option>
                            <option value="Ankara">Ankara</option>
                            <option value="Izmir">Izmir</option>
                        </select>
                    </label>
                    <label>What is your sum of investment?
                    <textarea rows={5} value={q4} onChange={(e)=>setq4(e.target.value)} ></textarea>
                    </label>
                    <label>Anything you would like to add?
                    <textarea rows={5} value={q5} onChange={(e)=>setq5(e.target.value)} ></textarea>
                    </label>
                </div>
                
            <input className="submitButton" type="submit" value="Send" onClick={(e)=>{
                e.preventDefault();
                request()
            }} />
            </div>
        </form>
        <form >
        </form>
    </>
}

export default ApplicationForm
