import Metrics from './metrics';

export const enum FontFamily {
  extraBold = 'Lato-Black',
  extraBoldItalic = 'Lato-BlackItalic',
  bold = 'Lato-Bold',
  boldItalic = 'Lato-BoldItalic',
  regular = 'Lato-Regular',
  light = 'Lato-Light',
  thin = 'Lato-Thin',
}


export const Sizes = {
  margin: Metrics.rfv(10),
  padding: Metrics.rfv(10),
  marginSmall: Metrics.rfv(5),
  paddingSmall: Metrics.rfv(5),
  marginLarge: Metrics.rfv(20),
  paddingLarge: Metrics.rfv(20),
  paddingMid: Metrics.rfv(15),
  h1: Metrics.rfv(28),
  h2: Metrics.rfv(24),
  h3: Metrics.rfv(20),
  h4: Metrics.rfv(18),
  h5: Metrics.rfv(16),
  h6: Metrics.rfv(14),
  h7: Metrics.rfv(12),
  h8: Metrics.rfv(10),
  iconSize: Metrics.rfv(24),
  radius: Metrics.rfv(8),
};
