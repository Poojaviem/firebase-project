import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {

    const [name, namechange] = useState("");
    const [age, agechange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");
    const [phone, phonechange] = useState("");
    const [doctor, doctorchange] = useState("Dr 1");
    const [message, messagechange] = useState("");
    const [gender, genderchange] = useState("female");
    const [address, addresschange] = useState("");
    


    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' Username';
        }
        if (name === null || name === '') {
            isproceed = false;
            errormessage += ' Fullname';
        }
        
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        if(!isproceed){
            toast.warning(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }


    const handlesubmit = (e) => {
            e.preventDefault();
            e.target.reset()
            let regobj = { age, name, password, email, phone, doctor, address, gender,message,};
            if (IsValidate()) {
            fetch("https://apoiment-5d5a8-default-rtdb.firebaseio.com/regiter.json", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
    
            }).then((res) => {
                toast.success('Registered successfully.')
                navigate('/homepage');

            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        
        }
       
    }
    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h1>Take Apoiment</h1>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label> Name <span className="errmsg">*</span></label>
                                        <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password<span className="errmsg">*</span></label>
                                        <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Age<span className="errmsg">*</span></label>
                                        <input value={age} onChange={e => agechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Phone <span className="errmsg"></span></label>
                                        <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Doctor <span className="errmsg">*</span></label>
                                        <select value={doctor} onChange={e => doctorchange(e.target.value)} className="form-control">
                                            <option value="Dr 1">DR 1</option>
                                            <option value="DR 2">DR 2</option>
                                            <option value="DR 3">DR 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <textarea placeholder="Apartment/Colony/Area" value={address} onChange={e => addresschange(e.target.value)} className="form-control"></textarea>
                                      </div>
                                </div>
                                <div className="col-lg-13">
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea value={message} onChange={e => messagechange(e.target.value)} className="form-control"></textarea>
                                      </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <br></br>
                                        <input type="radio" checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name="gender" value="male" className="app-check"></input>
                                        <label>Male</label>
                                        <input type="radio" checked={gender === 'female'} onChange={e => genderchange(e.target.value)} name="gender" value="female" className="app-check"></input>
                                        <label>Female</label>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Register</button> 
                            
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default Register;