export const ItemInfoWrapper = () => ({
  wordWrap: 'break-word',
  maxWidth: '568px',
});

export const ItemInfoName = () => ({
  fontSize: '30px',
  lineHeight: '3rem',
});

export const ItemStyle = () => ({
  marginTop: '10px',
  fontSize: '20px',
});

export const ButtonRule = (theme: ThemeType) => ({
  marginTop: '15px',
  backgroundColor: 'transparent',
  border: '1px solid rgb(172, 172, 172)',
  borderRadius: '5px',
  padding: '5px',
  color: theme.color,
  transition: 'all 0.2s ease',
  ':hover': {
    backgroundColor: theme.backgroundColorHover,
    color: 'white',
  },
});

export const ButtonContainer = () => ({
  marginTop: '15px',
});
