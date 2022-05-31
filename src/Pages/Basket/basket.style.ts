export const BasketContainer = () => ({
  maxWidth: '600px',
  margin: '10px auto 0px auto',
});

export const BasketTitle = () => ({
  fontSize: '26px',
  textAlign: 'center',
});

export const BasketItem = () => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '15px',
});

export const BasketItemInfoLeft = (theme: ThemeType) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.color,
  ':hover': {
    color: '#64b5f6',
    transition: 'all 0.2s ease',
  },
});

export const BasketItemInfoRight = (theme: ThemeType) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.color,
  '> div': {
    marginRight: '10px',
  },
});

export const BasketImage = () => ({
  width: '50px',
  hight: '50px',
  '> img': {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderRadius: '5px',
  },
});

export const BasketItemName = () => ({
  marginLeft: '15px',
});

export const BasketButton = () => ({
  backgroundColor: '#64b5f6',
  padding: '10px',
  lineHeight: '15px',
  color: '#fff',
  borderRadius: '5px',
  transition: 'all 0.2s ease',
  ':hover': {
    '> svg': {},
    ':hover': {
      color: 'tomato',
    },
  },
});

export const BasketCheckout = () => ({
  marginTop: '15px',
  textAlign: 'center',
  '> button': {
    marginLeft: '15px',
    padding: '10px',
    lineHeight: '15px',
    borderRadius: '5px',
    backgroundColor: '#c5e1a5',
    transition: 'all 0.2s ease',
    ':hover': {
      color: '#ef5350',
    },
  },
});

export const EmptyMessage = () => ({
  textAlign: 'center',
});
