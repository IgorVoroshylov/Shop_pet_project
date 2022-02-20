export const CommentRule = () => ({
  border: '1px solid rgb(172, 172, 172)',
  borderRadius: '5px',
  margin: '5px 0px 0px 10px',
  padding: '5px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const CommentDateRule = () => ({
  marginTop: '10px',
});

export const CommentButton = (theme: ThemeType) => ({
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
  ':focus': {
    backgroundColor: theme.backgroundColorFocus,
    color: theme.colorFocus,
  },
});

export const AddCommentRule = () => ({
  marginTop: '10px',
});

export const TextAreaRule = (theme: ThemeType) => ({
  padding: '5px',
  height: '60px',
  color: theme.color,
  border: '1px solid rgb(172, 172, 172)',
  borderRadius: '5px',
  resize: 'none',
});
