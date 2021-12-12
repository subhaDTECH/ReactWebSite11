import React,{useState} from 'react';

const Contact=()=> {

 const [username,setName]=useState("");
 const [phone,setPhone]=useState("");
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");
 const [text,setText]=useState("");

const onsubmits=(event)=>{
    event.preventDefault();
     alert("you have successfully submit data");
     const dataall={username,phone,email,password,text}
    
     
     alert(dataall);
     
 }


    return (
        <section className="Contact  jumbotron">
        <h1 className="text-center">Contact</h1>
          <div className="container">
              <div  className="row">
                  <div className className="contact_page">

                  <form className="mx-auto" >


                  <div className="form-group">
                    <label for="exampleInputPassword1">Usere Name</label>
                    <input name="username" onChange={(e)=>{setName(e.target.username)}} value={username} autoComplete="off" type="text" className="form-control" id="exampleInputPassword1" placeholder="Usre Name"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Phone</label>
                    <input name="phone" onChange={(e)=>setPhone(e.target.phone)} value={phone} autoComplete="off" type="text" className="form-control" id="exampleInputPassword1" placeholder="phone no"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input name="email" onChange={(e)=>setEmail(e.target.email)} value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  autoComplete="off"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input name="password" onChange={(e)=>setPassword(e.target.password)} value={password} autoComplete="off" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea name="text" onChange={(e)=>setText(e.target.text)} value={text} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-check">
                    <input  type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button onClick={onsubmits} type="submit" class="btn btn-primary">Submit</button>
                </form>


                  </div>

                


              </div>


          </div>



        </section>
    );
}

export  default Contact;
