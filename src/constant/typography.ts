export const fontFamily = 'Raleway';

const typography = {
  unnamedCharacterStyle1: {
    fontFamily,
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: 500, // medium
    letterSpacing: 0,
    color: '#3c3c3f',
  },
  unnamedCharacterStyle2: {
    fontFamily,
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: 400, // normal
    letterSpacing: 0,
    color: '#262626',
  },
  unnamedCharacterStyle3: {
    fontFamily,
    fontSize: '16px',
    lineHeight: '22px',
    fontWeight: 400, // normal
    letterSpacing: 0,
    color: '#59626a',
  },
  unnamedCharacterStyle4: {
    fontFamily,
    fontSize: '18px',
    lineHeight: '21px',
    fontWeight: 400, // normal
    letterSpacing: 0,
    color: '#262626',
  },
  unnamedCharacterStyle5: {
    fontFamily,
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: 400, // normal
    letterSpacing: 0,
    color: '#74b71b',
  },
  unnamedCharacterStyle6: {
    fontFamily,
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: 400, // normal
    letterSpacing: 0,
    color: '#bca235',
  },
  unnamedCharacterStyle7: {
    fontFamily,
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: 700, // bold
    letterSpacing: 0,
    color: '#006a4e',
  },
  unnamedCharacterStyle8: {
    fontFamily,
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: 500, // medium
    letterSpacing: 0,
    color: '#74b71b',
  },
  unnamedCharacterStyle9: {
    fontFamily,
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 600,
    letterSpacing: 0,
    color: '#838eab',
  },
  unnamedCharacterStyle10: {
    fontFamily,
    fontSize: '14px',
    lineHeight: '25px',
    fontWeight: 400, // normal
    letterSpacing: 0.01,
    color: '#262626',
  },
  unnamedCharacterStyle11: {
    fontFamily,
    fontSize: '12px',
    lineHeight: '14px',
    fontWeight: 600,
    letterSpacing: 0,
    color: '#262626',
  },
  unnamedCharacterStyle12: {
    fontFamily,
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 300, // light
    letterSpacing: 0,
    color: '#838eab',
  },
  unnamedCharacterStyle13: {
    fontFamily,
    fontSize: '12px',
    lineHeight: '14px',
    fontWeight: 600,
    letterSpacing: 0,
    color: '#838eab',
  },
  unnamedCharacterStyle14: {
    fontFamily,
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 400, // normal
    letterSpacing: 0,
    color: '#525f7f',
  },
  unnamedCharacterStyle15: {
    fontFamily,
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 400, // normal
    letterSpacing: 0,
    color: '#262626',
  },
  unnamedCharacterStyle16: {
    fontFamily,
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 400, // normal
    letterSpacing: 0,
    color: '#006a4e',
  },

  unnamedCharacterStyle17: {
    fontFamily,
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: 600,
    letterSpacing: 0,
    color: '#838eab',
  },
  unnamedCharacterStyle18: {
    fontFamily,
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: 400, // normal
    letterSpacing: 0,
    color: '#ffffff',
  },
  unnamedCharacterStyle19: {
    fontFamily,
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 400, // normal
    letterSpacing: 0,
    color: '#ffffff',
  },
  unnamedCharacterStyle20: {
    fontFamily,
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: 400, // normal
    letterSpacing: 0,
    color: '#838eab',
  },
  unnamedCharacterStyle21: {
    fontFamily,
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 600, // normal
    letterSpacing: 0,
    color: '#006a4e',
  },
} as const;

export type TypographyVariantType = keyof typeof typography;

export default typography;
