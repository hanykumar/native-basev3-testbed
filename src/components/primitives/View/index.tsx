import styled from "styled-components/native";
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  border,
  color,
  flexbox,
  layout,
  space,
} from "styled-system";

export type IViewProps = ColorProps | SpaceProps | LayoutProps | FlexboxProps | BorderProps;

const View = styled.View<IViewProps>`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${border}
`;

export default View;
