import React,{ Component } from 'react';
import './App.css';
import firebase from './firebase';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      form: true,
      alert: false,
    };
  }

    onChangeHandler = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    };
  
    setUpRecaptcha = () => {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: function (response) {
            console.log("Captcha Resolved");
            this.onSignInSubmit();
          },
          defaultCountry: "IN",
        }
      );
    };
  
    onSignInSubmit = (e) => {
      e.preventDefault();
      this.setUpRecaptcha();
      let phoneNumber = "+91" + this.state.mobile;
      console.log(phoneNumber);
      let appVerifier = window.recaptchaVerifier;
      firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then(function (confirmationResult) {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          // console.log(confirmationResult);
          console.log("OTP is sent");
        })
        .catch(function (error) {
          console.log(error);
        });
    };
  
    onSubmitOtp = (e) => {
      e.preventDefault();
      let otpInput = this.state.otp;
      let optConfirm = window.confirmationResult;
      // console.log(codee);
      optConfirm
        .confirm(otpInput)
        .then(function (result) {
          // User signed in successfully.
          console.log("Result" + result.verificationID);
          let user = result.user;
        })
        .catch(function (error) {
          console.log(error);
          console.log("otpres",optConfirm);
          console.log("otp",otpInput);
          alert("Incorrect OTP");
        });
    };


  render() {
   return (
        <div>
        <Container fluid="sm" className="mt-3">
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={5}>
              <h2 className="mb-3">Login</h2>
              <Form className="form" onSubmit={this.onSignInSubmit}>
                <div id="recaptcha-container"></div>
                <Form.Group>
                  <Form.Control
                    type="number"
                    name="mobile"
                    placeholder="Mobile Number"
                    onChange={this.onChangeHandler}
                    required
                  />
                </Form.Group>
                <button button="Submit" type="submit" />
              </Form>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={5}>
              <h2 className="mb-3">Enter OTP</h2>
              <Form className="form" onSubmit={this.onSubmitOtp}>
                <Form.Group>
                  <Form.Control
                    id="otp"
                    type="number"
                    name="otp"
                    placeholder="OTP"
                    onChange={this.onChangeHandler}
                  />
                </Form.Group>
                <button button="Submit" type="submit" />
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
  );
  }
}




  //   <div className="App">
  //   <h1>Phone OTP auth</h1>
  //   <div className="row">
  //     <form onSubmit={this.onSignInSubmit}>
  //       <div id="recaptcha-container"></div>
  //       <div className="row">
  //           <div className="input-field col s6">
  //           <i className="material-icons prefix">phone</i>
  //           <input id="icon_telephone" type="tel" className="validate"/>
  //           <label htmlFor="icon_telephone">Telephone</label>
  //         </div>
  //       </div>
  //       <button type="submit" className="button">Submit</button>
  //     </form>
  //   </div>
  // </div>

// setUpRecaptcha = () => {
  //   window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
  //     'recaptcha-container', 
  //     {
  //     'size': 'invisible',
  //     'callback': function(response) {
  //       console.log("Captcha resolved");
  //       this.onSignInSubmit();
  //     },
  //     defaultCountry: "IN",
  //   });
  // }

  // onSignInSubmit = (e) => {
  //   e.preventDefault();
  //   this.setUpRecaptcha();
  //   var phoneNumber = "+919503633396";                                     //getPhoneNumberFromUserInput();
  //   console.log(phoneNumber);
  //   var appVerifier = window.recaptchaVerifier;
  //   firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
  //       .then(function (confirmationResult) {
  //         // SMS sent. Prompt user to type the code from the message, then sign the
  //         // user in with confirmationResult.confirm(code).
  //         window.confirmationResult = confirmationResult;
  //         var code = window.prompt("Enter OTP");
  //         confirmationResult.confirm(code).then(function (result) {
  //           // User signed in successfully.
  //           var user = result.user;
  //           // ...
  //           console.log("User is signin");
  //         }).catch(function (error) {
  //           // User couldn't sign in (bad verification code?)
  //           // ...
  //         });
  //                 }).catch(function (error) {
  //         // Error; SMS not sent
  //         // ...
  //       });
  // }



// export default class PhoneLogin extends Component {
//   constructor() {
//     super();
//     this.state = {
//       form: true,
//       alert: false,
//     };
//   }

//   onChangeHandler = (event) => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   setUpRecaptcha = () => {
//     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//       "recaptcha-container",
//       {
//         size: "invisible",
//         callback: function (response) {
//           console.log("Captcha Resolved");
//           this.onSignInSubmit();
//         },
//         defaultCountry: "IN",
//       }
//     );
//   };

//   onSignInSubmit = (e) => {
//     e.preventDefault();
//     this.setUpRecaptcha();
//     let phoneNumber = "+91" + this.state.mobile;
//     console.log(phoneNumber);
//     let appVerifier = window.recaptchaVerifier;
//     firebase
//       .auth()
//       .signInWithPhoneNumber(phoneNumber, appVerifier)
//       .then(function (confirmationResult) {
//         // SMS sent. Prompt user to type the code from the message, then sign the
//         // user in with confirmationResult.confirm(code).
//         window.confirmationResult = confirmationResult;
//         // console.log(confirmationResult);
//         console.log("OTP is sent");
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   onSubmitOtp = (e) => {
//     e.preventDefault();
//     let otpInput = this.state.otp;
//     let optConfirm = window.confirmationResult;
//     // console.log(codee);
//     optConfirm
//       .confirm(otpInput)
//       .then(function (result) {
//         // User signed in successfully.
//         // console.log("Result" + result.verificationID);
//         let user = result.user;
//       })
//       .catch(function (error) {
//         console.log(error);
//         alert("Incorrect OTP");
//       });
//   };

//   render() {
//     return (
//       <div>
//         <Container fluid="sm" className="mt-3">
//           <Row className="justify-content-center">
//             <Col xs={12} md={6} lg={5}>
//               <h2 className="mb-3">Login</h2>
//               <Form className="form" onSubmit={this.onSignInSubmit}>
//                 <div id="recaptcha-container"></div>
//                 <Form.Group>
//                   <Form.Control
//                     type="number"
//                     name="mobile"
//                     placeholder="Mobile Number"
//                     onChange={this.onChangeHandler}
//                     required
//                   />
//                 </Form.Group>
//                 <PrimaryButton button="Submit" type="submit" />
//               </Form>
//             </Col>
//           </Row>
//           <Row className="justify-content-center">
//             <Col xs={12} md={6} lg={5}>
//               <h2 className="mb-3">Enter OTP</h2>
//               <Form className="form" onSubmit={this.onSubmitOtp}>
//                 <Form.Group>
//                   <Form.Control
//                     id="otp"
//                     type="number"
//                     name="otp"
//                     placeholder="OTP"
//                     onChange={this.onChangeHandler}
//                   />
//                 </Form.Group>
//                 <PrimaryButton button="Submit" type="submit" />
//               </Form>
//             </Col>
//           </Row>
//           <GoogleLogin />
//         </Container>
//       </div>
//     );
//   }
// }