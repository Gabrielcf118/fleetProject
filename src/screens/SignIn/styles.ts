import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  padding: 52px;
  background-color: ${theme.COLORS.GRAY_800};
`;

export const Title = styled.Text`
  color: ${theme.COLORS.BRAND_LIGHT};
  font-size: ${theme.FONT_SIZE.XXXL};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  text-align: center;
`;
export const Slogan = styled.Text`
  color: ${theme.COLORS.GRAY_100};
  font-size: ${theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  text-align: center;

  margin-bottom: 32px;
`;
