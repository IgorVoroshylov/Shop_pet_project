export const CardWrapper = (theme: any) => ({
  padding: '10px',
  border: '1px solid rgb(211, 211, 211)',
  borderRadius: '5px',
  boxShadow: theme.boxShadow,
  transition: 'all 0.3s ease',
  ':hover': {
    transform: 'scale(1.05)',
  },
  cursor: 'pointer',
});

export const ItemWrapper = () => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
});

export const CardImageContainer = () => ({
  overflow: 'hidden',
  height: '300px',
});

export const CardImage = () => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const InformationBlock = () => ({
  flex: '1 1 auto',
  wordWrap: 'break-word',
  overflow: 'hidden',
  marginBottom: '10px',
});

export const ItemName = () => ({
  marginTop: '15px',
  fontSize: '20px',
});

export const ItemPrice = () => ({
  margin: '5px 0px',
  lineHeight: '16px',
});

export const ButtonBlock = (theme: ThemeType) => ({
  marginTop: 'auto',
  textAlign: 'right',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '> button': {
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
  },
});
