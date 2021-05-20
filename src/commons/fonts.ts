import {TextStyle} from 'react-native';
import colors from './colors';

type AppFonts = 'h1' | 'h2' | 'h3' | 'h4' | 'title' | 'meta' | 'metaBold' | 'paragraph' | 'info';

const fonts: Record<AppFonts, TextStyle> = {
  h1: {
    fontSize: 32,
    color: colors.darkText,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 28,
    color: colors.darkText,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 24,
    color: colors.darkText,
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 20,
    color: colors.darkText,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    color: colors.defaultText,
  },
  meta: {
    fontSize: 14,
    color: colors.defaultText,
  },
  metaBold: {
    fontSize: 16,
    color: colors.defaultText,
    fontWeight: 'bold'
  },
  paragraph: {
    fontSize: 16,
    color: colors.defaultText,
    textAlign: 'justify',
    lineHeight: 24
  },
  info: {
    fontSize: 12,
    color: colors.defaultText,
  },
};

export default fonts;
