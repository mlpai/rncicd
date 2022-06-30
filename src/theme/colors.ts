import { Colors } from "react-native-paper";

export const MyColors = {
    primary : Colors.blue900,
    secondary : Colors.blueGrey800,
    warning : Colors.deepOrangeA400,
    danger : Colors.redA700,
    success : Colors.green800,
    dark : Colors.black,
    light : Colors.white,
}

export const getColor = (color: string) => {
    return MyColors[color] || color;
}