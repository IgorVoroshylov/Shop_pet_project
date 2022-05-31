export const wrapperRule = (theme: ThemeType) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: theme.backgroundColor,
  color: theme.color,
});

export const mainRule = () => ({
  flex: '1 1 auto',
  maxWidth: '920px',
  width: '100%',
  margin: '0 auto',
  padding: '20px 10px',
});
