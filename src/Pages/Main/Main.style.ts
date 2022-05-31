export const MainListRule = () => ({
  marginTop: '30px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, calc(33.333% - 13.333px))',
  gap: '20px',
});

export const SelectContainer = () => ({
  display: 'flex',
  alignItems: 'center',
  '> select': {
    marginRight: '20px',
  },
});

export const Select = () => ({
  display: 'block',
  width: '200px',
  height: '40px',
  padding: '0px 5px 0px 5px',
  borderRadius: '5px',
  //appearance: 'none', // off standart style
  fontFamily: 'OpenSans-Semibold',
  color: '#616161',
  fontSize: '1rem',
});

export const SearchInput = () => ({
  backgroundColor: '#f5f5f5 !important',
  padding: '0px 10px !important',
  borderRadius: '5px !important',
});

export const EmptyList = () => ({
  textAlign: 'center',
});

// пока не используем
export const ResetButton = (theme: ThemeType) => ({
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
  ':focus': {
    backgroundColor: theme.backgroundColorFocus,
    color: theme.colorFocus,
  },
});

export const GoToTopButton = (theme: ThemeType) => ({
  backgroundColor: 'grey lighten-1',
  transition: 'all 0.3s ease',
  borderRadius: '50%',
  position: 'fixed',
  bottom: '40px',
  padding: '5px',
  right: '30px',
  ':hover': {
    backgroundColor: theme.backgroundColorHover,
    color: 'white',
  },
  ':focus': {
    backgroundColor: '#f5f5f5',
    color: theme.colorFocus,
  },
});

export const TopSvgSizeRule = () => ({
  width: '25px',
  height: '25px',
  verticalAlign: 'middle',
});
