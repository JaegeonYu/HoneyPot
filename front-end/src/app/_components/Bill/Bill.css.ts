import { style } from '@vanilla-extract/css';
export const billCardWrapper = style({
  width: 50,
  height: 50,
  margin: 'auto',
});

export const fontName = style({
  //   height: 58,
  fontSize: 20,
  fontWeight: 900,
});

export const accordion = style({
  backgroundColor: '#eee',
  color: '#444',
  cursor: 'pointer',
  padding: 18,
  width: '80%',
  border: 'none',
  textAlign: 'left',
  outline: 'none',
  fontSize: 15,
  transition: 'all 0.3s ease',
  // transition: 0.4s,
  ':hover': {
    color: 'pink',
  },
  ':active': {
    backgroundColor: 'gray',
  },
});

// export const active = style({
//   backgroundColor: 'gray',
// });
export const panel = style({
  paddingLeft: 33,
  paddingRight: 33,
  backgroundColor: 'black',
  maxHeight: 0,
  overflow: 'hidden',
  transition: 'max-height 0.2s ease-out',
});

//   .panel {
//     padding: 0 18px;
//     background-color: white;
//     max-height: 0;
//     overflow: hidden;
//     transition: max-height 0.2s ease-out;
//   }
