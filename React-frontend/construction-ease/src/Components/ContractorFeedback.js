import React, { useState } from "react"
import ContractorService from "../Services/ContractorService"

const ContractorFeedbackComponent = (props) => {

  const[id,setId] = useState('')
  const[username,setusername] = useState('')
  const[message,setMessage] = useState('')


  console.log('id in asd',props.id);


  const sendFeedback = (e) =>{

    e.preventDefault();

    const feedbackdata = {id,username,message}

    ContractorService.contractorFeedback(id,feedbackdata).then((response)=>{
      console.log(response.data);
      alert("feedback sent")
    }).catch(error => { console.log(error)})
  }
    return(

			<div>
			<section className="md-section" id="id7" style={{ backgroundColor: "#fff", padding: "160px 0 0" }}>
		
				<div className="row">
					<div className="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2 ">
		
						<div className="sec-title sec-title__lg-title md-text-center">
							<h2 className="sec-title__title">Feedback</h2><span className="sec-title__divider"></span>
						</div>
		
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-lg-9  col-lg-push-3">
							<div className="main-content">
								<div className="row">
									<div className="col-lg-6 ">
										<form className="contact-form">
		
		
											<div className="form-item">
												<input className="form-control" type="text" value={props.id} name="input" onChange={(e)=>setId(e.target.value)}/>
											</div>

                      <div className="form-item">
												<input className="form-control" type="text" value={username} name="input"  onChange={(e)=>setusername(e.target.value)}/>
											</div>
		
		
		
											<div className="form-item">
												<textarea name="message" placeholder="Message" value={message} style={{ height: "150px" }} onChange={(e)=>setMessage(e.target.value)}></textarea>
		
											</div>
		
											<button className="btn btn-outline-primary btn-round mb-30" type="submit" onClick={(e)=>sendFeedback(e)}>Send message</button>
										</form>
									</div>
									
								</div>
							</div>
						</div>
		
					</div>
				</div>
			</section>
		</div>
		
    )
}

export default ContractorFeedbackComponent;