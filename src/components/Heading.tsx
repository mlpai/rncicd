import { View, Text, TextStyle } from 'react-native'
import React from 'react'
import fonts from '../theme/fonts'
import { getColor } from '../theme/colors'



type Iprop = {
    text: string,
    fontFamily?: string,
    size?: number,
    weight?: string,
    varient?: string,
    style?: TextStyle,
    color?: string | 'primary'| 'secondary' | 'danger' | 'warning' | 'success' | 'light' | 'danger' | 'dark',
    center?: boolean,
    textAlign?: 'left' | 'center' | 'right' | 'justify' | 'justify-content',
    mt?: number
    mb?: number
    ml?: number
    mr?: number
}

const Heading = (props: Iprop) => {
    const { fontFamily, size, weight, varient, style, text, ...rest } = props
    
    let fontSize;
    let fontWeight;
    switch (varient) {
        case 'h1':
            fontSize = size || 22
            fontWeight = weight || '700'; 
            break;
        
        case 'h2':
            fontSize = size || 20 
            fontWeight = weight || '700'; 
            break;
        
        case 'h3':
            fontSize = size || 18 
            fontWeight = weight || '700'; 
            break;
        
        case 'body':
            fontSize = size || 16;
            fontWeight = weight || '500';

        default:
            fontWeight = weight || '500';
            fontSize = size || 16; 
            break;
    }

    let faimly = fontFamily || fonts.faimly.OPEN_SANS_REGULAR;

  return (
    <View style={[
      rest.center ? {
      alignItems: 'center',
    }: null,
    rest.mt ? {marginTop : rest.mt} : null,
    rest.mb ? {marginBottom : rest.mb} : null,
    rest.ml ? {marginLeft : rest.ml} : null,
    rest.mr ? {marginRight : rest.mr} : null,
    ]} >
      <Text 
      allowFontScaling
      adjustsFontSizeToFit
      style={[{
        textAlign : rest?.textAlign || 'left',
        fontFamily : faimly,
        fontSize,
        fontWeight,
        color: getColor(rest.color)
      }, style]}>{text}</Text>
    </View>
  )
}

export default Heading