import { Column, Row, Full } from "./style";

export const DisplayContainer = ({ children, type }) => {
  return (
    <>
      {type === "column" ? (
        <Column>{children}</Column>
      ) : type === "row" ? (
        <Row>{children}</Row>
      ) : (
        <Full>{children}</Full>
      )}
    </>
  );
};
