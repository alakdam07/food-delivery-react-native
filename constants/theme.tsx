import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import styled from 'styled-components';


export const COLORS = {
  // base colors
  primary: "#FC6D3F", // orange
  secondary: "#CDCDD2",   // gray

  // colors
  black: "#1E1F20",
  white: "#FFFFFF",

  lightGray: "#F5F5F6",
  lightGray2: "#F6F6F7",
  lightGray3: "#EFEFF1",
  lightGray4: "#F8F8F9",
  transparent: "transparent",
  darkgray: '#898C95',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,
  // app dimensions
  width,
  height
};

export const Headline1 = styled.Text`
@font-face {
  font-family: "Roboto-Black";
  src: url("../fonts/Roboto-Black.ttf");
}
font-size: 30px;
line-height: 36;
`
export const Headline2 = styled.Text`
@font-face {
  font-family: "Roboto-Bold";
  src: url("../fonts/Roboto-Bold.ttf");
}
font-size: 22px;
line-height: 30;
`

export const Headline3 = styled(Headline2)`
font-size: 20px;
line-height: 22;
`

export const Headline4 = styled(Headline3)`
font-size: 20px;
line-height: 18;
`
export const Body1 = styled.Text`
@font-face {
  font-family: "Roboto-Regular";
  src: url("../fonts/Roboto-Regular.ttf");
}
font-size: 30px;
line-height: 36;
`
export const Body2 = styled(Body1)`
font-size: 20px;
line-height: 30;
`

export const Body3 = styled(Body2)`
font-size: 16px;
line-height: 22;
`

export const Body4 = styled(Body3)`
font-size: 14px;
`
export const Body5 = styled(Body3)`
font-size: 12px;
`
const LargeTitle = styled.Text`
@font-face {
  font-family: "Roboto-Regular";
  src: url("../fonts/Roboto-Regular.ttf");
}
font-size: 50px;
line-height: 55;
`



const appTheme = { COLORS, SIZES };

export default appTheme;
