export const AlreadyBasketButton = (theme: ThemeType) => ({
  backgroundColor: 'transparent',
  border: '1px solid #66bb6a',
  borderRadius: '5px',
  padding: '5px',
  color: '#66bb6a',
  transition: 'all 0.2s ease',
  ':focus': {
    backgroundColor: theme.backgroundColorFocus,
  },
});

export const ButtonRule = (theme: ThemeType) => ({
  backgroundColor: 'transparent',
  border: '1px solid rgb(172, 172, 172)',
  borderRadius: '5px',
  padding: '5px',
  color: theme.color,
  transition: 'all 0.2s ease',
  ':hover': {
    backgroundColor: theme.backgroundColorHover,
    color: '#fff',
  },
  ':focus': {
    backgroundColor: theme.backgroundColorFocus,
    color: theme.colorFocus,
  },
});

export const svgSizeRule = () => ({
  width: '15px',
  height: '15px',
  verticalAlign: 'middle',
  marginLeft: '5px',
});
