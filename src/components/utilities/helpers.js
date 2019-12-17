import styled from "styled-components";
import { TextCopyGrey } from "@typography";

export const Main = styled.main`
  margin: 0 2rem;
`;

export const Section = styled.section`
  margin: 1rem 0;

  button {
    margin: 0.5rem;
  }
`;

export const Split = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors.meta};
  }
`;

export const Desc = styled(TextCopyGrey)`
  font-size: 14px;
`;
