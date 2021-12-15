import { Column, Row, Full, Grid } from "./style";

export const DisplayContainer = ({ children, type }) => {
  return (
    <>
      {type === "column" ? (
        <Column>{children}</Column>
      ) : type === "row" ? (
        <Row>{children}</Row>
      ) : type === "grid" ? (
        <Grid>{children}</Grid>
      ) : (
        <Full>{children}</Full>
      )}
    </>
  );
};
