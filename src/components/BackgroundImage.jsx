import styled from "styled-components"
import img from '../assets/login.jpg'
const BackgroundImage = () => {
  return (
    <Container><img src={img} alt="Background Image" /></Container>
  )
}
const Container=styled.div`
height: 100vh;
width: 100vh;
img {
    height: 100vh;
    width:100vw ;
}
`;
export default BackgroundImage