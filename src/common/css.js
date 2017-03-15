import { css } from 'glamor';

css.global('html, body', { height: '100%', margin: 0 });

export const container = attrs => css({
  textAlign: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  ...attrs,
});

export const content = attrs => css({
  position: 'relative',
  top: '50%',
  width: '40%',
  margin: 'auto',
  transform: 'translateY(-50%)',
  ' > .title': {
    fontSize: '2rem',
    fontWeight: 'lighter',
    margin: 0,
  },
  ...attrs,
});

export const mainText = css({
  fontWeight: '100',
  fontSize: '1.5rem',
});

export const normalText = css({
  fontWeight: '100',
  fontSize: '1rem',
});

export const btn = css({
  color: '#fff',
  display: 'inline-block',
  textDecoration: 'none',
  fontWeight: 100,
  margin: '1rem auto',
  padding: '1rem 3rem',
  transition: 'all 500ms',
  background: 'transparent',
  border: 'none',
  fontSize: '1rem',
  cursor: 'pointer',
  ':hover': {
    background: 'rgba(255, 255, 255, 0.2)',
  },
  ':focus': {
    outline: 'none',
  },
});

export const form = css({
  overflow: 'hidden',
  width: '75%',
  margin: 'auto',
});

export const formGroup = css({
  margin: '1rem 0',
  ' > input': {
    border: 'none',
    fontSize: '1rem',
    fontWeight: 100,
    color: '#fff',
    borderBottom: '1px solid #d4d4d4',
    padding: '1rem 0',
    background: 'transparent',
    width: '100%',
    textIndent: '.7rem',
    ':-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 1000px white inset !important',
    },
    ':focus': {
      outline: 'none',
    },
    '::placeholder': {
      color: 'rgba(255, 255, 255, 0.4)',
    },
  },
});
