import { BrandTitle, BrandWrapper, SubInfo, TextInfo, ViewBtn } from "./tfitness";
import ModelViewer from "./modelviewer";
import Model from "../assets/3d2.png"
import { styled } from "styled-components";

export const InfoWrapper = styled.div`
margin-left: 90px;
text-align: left;
@media screen and (max-width: 768px) {
    margin: 0;
    width: 80%;
    margin-bottom: 40px;
  }
`

const Sportspanda = () => {
    return(
        <BrandWrapper>
        <div>
                <ModelViewer Model={Model}/>
            </div>
            <InfoWrapper>
                <BrandTitle>SPORTSPANDA</BrandTitle>
                <SubInfo>HIGHEND WORKOUT EQUIPMENT</SubInfo>
                <TextInfo>
                    <p>Try the first workout from the new TotalBody Strong program</p>
                    <p>and be prepared to feel from head to toe!</p>
                    <p>Hit three days a week of this style of training hard</p>
                    <p>and it just might be all the lifting you need.</p>
                </TextInfo>
                <ViewBtn />
            </InfoWrapper>
            
            
        </BrandWrapper>
    )
}

export default Sportspanda;

