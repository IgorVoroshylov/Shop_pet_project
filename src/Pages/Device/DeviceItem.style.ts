export const DeviceContainer = () => ({
  position: 'relative',
});

export const DeviceInfoWrapper = () => ({
  padding: '5px',
  display: 'flex',
  overflow: 'hidden',
});

export const DescriptionBlock = () => ({
  marginLeft: '20px',
});

export const BackButton = (theme: ThemeType) => ({
  position: 'absolute',
  left: '-150px',
  backgroundColor: 'transparent',
  border: '1px solid rgb(172, 172, 172)',
  marginTop: '5px',
  borderRadius: '5px',
  padding: '5px',
  color: theme.color,
  transition: 'all 0.2s ease',
  ':hover': {
    backgroundColor: theme.backgroundColorHover,
    color: 'white',
  },
});

export const DeviceImageRule = () => ({
  borderRadius: '10px',
});
