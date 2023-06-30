import { useState, useEffect, useMemo } from "react"
import MainImg1 from "../assets/main1.png"
import MainImg2 from "../assets/main2.png"
import MainImg3 from "../assets/main3.png"

const SlideImg = () => {
    const [imgIndex, setImgIndex] = useState(0);

    const imgList = useMemo(() => [MainImg1, MainImg2, MainImg3], []);


    useEffect(() => {
        const interval = setInterval(() => {
            setImgIndex((prevIndex) => (prevIndex + 1) % imgList.length);
        }, 5000);
    
        return () => {
          clearInterval(interval);
        };
      }, [imgList]);
    
    return(
        <div>
            <img src={imgList[imgIndex]} alt="main img slide" style={{width:"100%"}}/>
        </div>
    )
}

export default SlideImg;