import styled from "styled-components";

export const Column = styled.div`
  min-height: 445px;
  background: #d2d2d233;
  height: 445px;

  border-radius: 8px;
  min-width: 280px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 2px 2px #00000040;


  @media (min-width: 600px) {
    min-height: 795px;
    min-width: 374px;
    height: auto;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 20px;
    margin-top: 20px;
  }

  @media (min-width: 800px) {
    margin-top: 0px;
  }
`;

export const Row = styled.div`
  min-height: 445px;
  background: #d2d2d233;
  height: 445px;

  margin-bottom: 20px;
  border-radius: 8px;

  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 2px 2px #00000040;

  @media (min-width: 600px) {
    min-height: 795px;
    margin-bottom: 0px;
    margin-right: 20px;
    min-width: 374px;
  }
`;

export const Full = styled.div`
  min-height: 445px;
  background: #d2d2d233;
  width: 270px;

  border-radius: 8px;

  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 2px 2px #00000040;

  margin: 20px auto;

  @media (min-width: 600px) {
    align-items: baseline;
    width: 90%;
    max-width: 1200px;
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr; */
  }

  @media (min-width: 1110px) {
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr 1fr; */
  }
`;
