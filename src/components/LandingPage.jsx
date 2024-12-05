import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const LandingPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeInAnimation} 2s ease;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const LandingPage = () => {
  return (
    <LandingPageWrapper style={{ backgroundImage: `url(https://t3.ftcdn.net/jpg/03/30/81/70/360_F_330817072_DJIe5dlLrZDLjI62ORM5xDcDjixTUQrY.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Container>
        <Row>
          <Col lg={6}>
            <img
              src="https://media4.giphy.com/media/NV4cSrRYXXwfUcYnua/giphy.gif?cid=6c09b952tp2rpif0213qjsn0z5augyoq6mmcnnhu3njvvi93&ep=v1_gifs_search&rid=giphy.gif&ct=g"
              alt="CleanEase"
              style={{
                borderRadius: '10px', 
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
                backgroundColor: '#AED6F1 ', 
                maxWidth: '100%', 
              }}
            />

          </Col>
          <Col lg={6}>
            <ContentWrapper style={{ color: "#2471A3", backgroundColor: '#E5E7E9' }}>
              <h1 className="display-4">CleanEase</h1>
              <h2>Your Cleanliness Partner</h2>
              <Link to="/register">
                <Button variant="primary" size="lg" style={{ color: "#F4D03F" }}>Get Started</Button>
              </Link>
            </ContentWrapper>
          </Col>
        </Row>
      </Container>
    </LandingPageWrapper>
  );
};

export default LandingPage;
