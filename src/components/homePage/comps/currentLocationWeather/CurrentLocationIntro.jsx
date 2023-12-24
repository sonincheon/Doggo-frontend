import styled from "styled-components";


const ItemBox = styled.div.attrs({
    className: "item-container",
  })`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65%;
  `;
  
  const Items = styled.div.attrs({
    className: "item-currentWeather",
  })`
    width: 98%;
    height: 98%;
    border: 1px solid black;
    border-radius: 10px;
    border: 1px solid black;
  `;


const CurrentLocationIntro = () => {

    return (
        <>
        <ItemBox>
            <Items>

            </Items>
        </ItemBox>
        </>
    )

}

export default CurrentLocationIntro;