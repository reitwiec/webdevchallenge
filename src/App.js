import React from 'react';
import logo from './logo.svg';
import './App.css';
import Countdown from './components/Countdown';
import styled from 'styled-components';

const Container = styled.div`
  padding:50px;
min-height:100vh;
  margin-left:300px;
  margin-right:300px;
  .title{
    padding:20px;
    width:100%;
    text-align:left;
    margin-top:50px;
    font-size:35px;
    font-weight:900;
    color:#46535E;
    letter-spacing:2px;
    border-bottom:2px solid #E5E7E8;
  }
  h2{
    color:#46535E;
  }
  p{
    font-size:25px;
    color:#46535E;
  }
  li{
    font-size:20px;
    color:#46535E;
    line-height:40px;
  }
`;
function App() {
  return (
    <Container>
      <Countdown />
      <div className="title">
        IECSE WEB Head and DEV Head Challenge
      </div>
      <div>
        <h2 style={{ textDecoration: "underline", color: "#252C33" }}>#Prompt</h2>
        <p style={{ fontWeight: 500, fontSize: "30px", color: "#252C33", border: "2px solid #252C33", padding: "20px" }}>Build a <i style={{ fontWeight: 900 }}>Dribbble for IECSE</i> website or an application using any of your preferred tech-stack.</p>
        <p>You have to implement as many of the following features as possible:</p>
        <ul>
          <li>User Authentication</li>
          <li>Upload designs to an S3 bucket</li>
          <li>Allow user to add a personal bio</li>
          <li>Feature to follow other designers</li>
          <li>Feature to like designs posted by other designers</li>
        </ul>
        <p style={{ fontWeight: 500, textDecoration: "underline", color: "#252C33" }}>Bonus Points:</p>
        <ul>
          <li>Save other users designs</li>
          <li>Comment on other users designs</li>
          <li>Mention a user in the comments</li>
          <li>Deploy your website <strong style={{ color: "#252C33" }}>(Heroku not allowed)</strong> / Release apk</li>
        </ul>
        <p style={{ fontWeight: 500, textDecoration: "underline", color: "#252C33" }}>Judgement and Advice:</p>
        <ul>
          <li>We <strong style={{ color: "#252C33" }}>don't</strong> expect a perfect end product.</li>
          <li><strong style={{ color: "#252C33" }}>Play to your strengths.</strong></li>
          <li>If you are more inclined towards backend development, usage of templates is allowed.</li>
          <li>If you have any queries regarding the challenge, message any one of us from the board.</li>
        </ul>

        <p style={{ fontWeight: 500, textDecoration: "underline", color: "#252C33" }}>Readup on these topics for the test:</p>
        <ul>
          <li>Git</li>
          <li>DevOps</li>
          <li>Basic Network Security</li>
        </ul>

        <div style={{ textAlign: "center", marginTop: '50px' }}>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfLNLHSniHLNmggStJvB76AdMSbaPVWuCWSkYDl2J2miWeByw/viewform?embedded=true" width="640" height="1145" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </div>
    </Container>
  );
}

export default App;
