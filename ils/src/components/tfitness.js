import { styled } from "styled-components";
import ModelViewer from "./modelviewer"
import Model from "../assets/3d1.png" 
export const BrandTitle = styled.div`
font-family: var(--font-googleLeagueSpartan);
font-weight: 800;
font-size: 80px;
color: #514949;
line-height: 92px;
`

export const SubInfo = styled.div`
font-weight: 700;
font-size: 25px;
line-height: 28px;
margin-bottom: 0.5rem;
color: rgba(81, 73, 73, 0.43);
`

export const TextInfo = styled.div`
font-weight: 600;
font-size: 20px;
line-height: 28px;
color: rgba(81, 73, 73, 0.43);
p{
    margin: 0;
}
`
export const BrandWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

  }
`


const InfoWrapper = styled.div`
margin-right: 90px;
text-align: left;
@media screen and (max-width: 768px) {
    margin: 0;
    width: 80%;
    margin-bottom: 40px;
  }
`

export const MoreViewBtn = styled.button`
border: 0;
background-color: #1277C0;
width: 250px;
height: 80px;
border-radius: 1rem;
font-size: 1.3rem;
color: white;
font-weight: 600;
margin-top: 50px;
`
export const ViewBtn = (color) =>{
    return(
        <MoreViewBtn style={{backgroundColor: }}>View More →</MoreViewBtn>
    )
}
const Tfitness = () => {
    return(
        <BrandWrapper>
            <InfoWrapper>
                <BrandTitle>T FITNESS</BrandTitle>
                <SubInfo>IRONBULL & TOTAL SYSTEM</SubInfo>
                <TextInfo>
                    <p>Don’t let bad information scare you away</p>
                    <p>from training the way you want! Learn the real story behind</p>
                    <p>these eight fitness training myths.</p>
                </TextInfo>
                <ViewBtn />
            </InfoWrapper>
            
            <div>
                <ModelViewer Model={Model}/>
            </div>
        </BrandWrapper>
    )
}
export default Tfitness;
