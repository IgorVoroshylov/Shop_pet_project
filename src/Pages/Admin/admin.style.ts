export const AdminContainer = () => ({
  textAlign: 'center',
});

export const AdminTitle = () => ({
  fontSize: '28px',
});

export const ButtonContainer = () => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const ShowButton = (theme: ThemeType) => ({
  width: '300px',
  backgroundColor: 'transparent',
  border: '1px solid rgb(172, 172, 172)',
  borderRadius: '5px',
  padding: '5px',
  color: theme.color,
  marginBottom: '15px',
  transition: 'all 0.2s ease',
  ':hover': {
    backgroundColor: theme.backgroundColorHover,
    color: 'white',
  },
});
