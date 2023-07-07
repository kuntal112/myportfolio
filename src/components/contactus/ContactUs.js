import React, { useState, useContext, useEffect } from 'react'
import { routeContext } from "../../App"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {
  let {dispatch } = useContext(routeContext);
  useEffect(() => {
    dispatch({ page: "home", payload: { next: "", prev: "myworks" } })

  }, [dispatch]);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  let postData = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    }).then(res => res.json())
      .then(res => {
        if (res.error) {
          toast.error(res.error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: false,
          })
          return
        }

        setName("");
        setEmail("");
        setMessage("");
      });


  }
  return (
    <div className="" >
      <div className="fixed-heading">
        <h1 className="component-headings">Contact Me</h1>
        <hr></hr>
      </div>
      <div className="contact-form-area contact-Div text-white">
        <form className=" align-item-center needs-validation" noValidate>
        <h3 className="contact-page-intro"> Have a question or want to give any suggestion ???? Drop here</h3>

          <div className="">
            <input type="text" className="form-control form-control-sm" id="validationCustom01" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />

          </div>

          <div className="">
            <div className="input-group has-validation">
              <input type="email" className="form-control  form-control-sm" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            </div>
          </div>
          <div className="">
            <textarea placeholder="Message" type="text" rows="6" cols="30" className="form-control form-control-sm" id="validationCustom03" value={message} onChange={(e) => setMessage(e.target.value)} required />

          </div>

          <div className="">
            <button className="btn btn-primary" type="submit" onClick={(e) => { postData(e) }}>Send</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>

  )
}

export default ContactUs
