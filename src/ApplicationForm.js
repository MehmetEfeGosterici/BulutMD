import React from 'react'
import "./ApplicationForm.css"
import LokumcuBaba from "./LokumcuBaba.png"

function ApplicationForm() {
    return <>
        <form className="form" >
            <div className="container"> 

            <div className="applicationForm">
                <h2>Franchise Application Form</h2>
                <div className="formLabel">
                    <label>Name&Surname
                        <input type="text"/>
                    </label>
                    <label>Identity Number
                        <input type="text"/>
                    </label>
                    <label>Address
                        <input type="text"/>
                    </label>
                    <label>Phone Number
                        <input type="tel"/>
                    </label>
                    <label>Email
                        <input type="email"/>
                    </label>
                    <label>Date of Birth
                        <input type="date"/>
                    </label>
                    <label>Were you ever involved with retail trade?
                        <input type="checkbox" title="yes" />
                    </label>
                    <label>What is your reason for preferring Lokumcu Baba?
                        <textarea rows={5} ></textarea>
                    </label>
                    <label>Which City/district are you considering a franchise for?
                    <textarea rows={5}></textarea>
                    </label>
                    <label>What is your sum of investment?
                    <textarea rows={5} ></textarea>
                    </label>
                    <label>Anything you would like to add?
                    <textarea rows={5}></textarea>
                    </label>
                </div>
                
            </div>
            <input type="submit" value="Send"/>
            </div>
        </form>
        <form >
        </form>
    </>
}

export default ApplicationForm
