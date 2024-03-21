export const SIDO_LIST = [{ id: 0, name: '' }];

export const CATEGORY_LIST = [
  { id: 0, name: '모두 보기' },
  { id: 1, name: '국회운영' },
  { id: 2, name: '법제사법' },
  { id: 3, name: '교육' },
  { id: 4, name: '국방' },
  { id: 5, name: '농림축산식품해양수산' },
  { id: 6, name: '과학기술정보방송통신' },
  { id: 7, name: '문화체육관광' },
  { id: 8, name: '국토교통' },
  { id: 9, name: '기획재정' },
  { id: 10, name: '외교통일' },
  { id: 11, name: '환경노동' },
  { id: 12, name: '보건' },
  { id: 13, name: '행정안전' },
  { id: 14, name: '정무' },
  { id: 15, name: '산업통상자원중소벤처기업' },
  { id: 16, name: '정보' },
  { id: 17, name: '여성가족' },
];

interface PALETTE_TYPE {
  service: {
    MAIN_COLOR_100: 'rgba(243, 185, 26, 1)';
    MAIN_COLOR_80: 'rgba(243, 185, 26, 0.8)';
    MAIN_COLOR_60: 'rgba(243, 185, 26, 0.6)';
    MAIN_COLOR_40: 'rgba(243, 185, 26, 0.4)';
    MAIN_COLOR_20: 'rgba(243, 185, 26, 0.2)';

    MAIN_BLACK: '#222222';
    SUB_BLACK: '#717171';
    STROKE_OR_BLUR: '#DDDDDD';
    HOVER_STROKE: '#EBEBEB';
    HOVER_BACKGROUND: '#F7F7F7';
    MAIN_WHITE: '#FFFFFF';
    SUB_WHITE: '#F7F7F7';
    MAIN_GOLD: '#FFD067';
  };
  party: {
    [party: string]: { [blur: string]: string };
    국민의힘: { 100: string; 80: string; 60: string; 40: string; 20: string };
    더불어민주당: { 100: string; 80: string; 60: string; 40: string; 20: string };
    녹색정의당: { 100: string; 80: string; 60: string; 40: string; 20: string };
    개혁신당: { 100: string; 80: string; 60: string; 40: string; 20: string };
    국민의미래: { 100: string; 80: string; 60: string; 40: string; 20: string };
    새로운미래: { 100: string; 80: string; 60: string; 40: string; 20: string };
    자유통일당: { 100: string; 80: string; 60: string; 40: string; 20: string };
    진보당: { 100: string; 80: string; 60: string; 40: string; 20: string };
    더불어민주연합: { 100: string; 80: string; 60: string; 40: string; 20: string };
    새진보연합: { 100: string; 80: string; 60: string; 40: string; 20: string };
    조국혁신당: { 100: string; 80: string; 60: string; 40: string; 20: string };
    무소속: { 100: string; 80: string; 60: string; 40: string; 20: string };
  };
}

export const PALETTE: PALETTE_TYPE = {
  service: {
    MAIN_COLOR_100: 'rgba(243, 185, 26, 1)',
    MAIN_COLOR_80: 'rgba(243, 185, 26, 0.8)',
    MAIN_COLOR_60: 'rgba(243, 185, 26, 0.6)',
    MAIN_COLOR_40: 'rgba(243, 185, 26, 0.4)',
    MAIN_COLOR_20: 'rgba(243, 185, 26, 0.2)',

    MAIN_BLACK: '#222222',
    SUB_BLACK: '#717171',
    STROKE_OR_BLUR: '#DDDDDD',
    HOVER_STROKE: '#EBEBEB',
    HOVER_BACKGROUND: '#F7F7F7',
    MAIN_WHITE: '#FFFFFF',
    SUB_WHITE: '#F7F7F7',
    MAIN_GOLD: '#FFD067',
  },
  party: {
    국민의힘: {
      100: 'rgba(230, 30, 43, 1)',
      80: 'rgba(230, 30, 43, 0.8)',
      60: 'rgba(230, 30, 43, 0.6)',
      40: 'rgba(230, 30, 43, 0.4)',
      20: 'rgba(230, 30, 43, 0.2)',
    },
    국민의미래: {
      100: 'rgba(230, 30, 43, 1)',
      80: 'rgba(230, 30, 43, 0.8)',
      60: 'rgba(230, 30, 43, 0.6)',
      40: 'rgba(230, 30, 43, 0.4)',
      20: 'rgba(230, 30, 43, 0.2)',
    },
    더불어민주당: {
      100: 'rgba(21, 36, 132, 1)',
      80: 'rgba(21, 36, 132, 0.8)',
      60: 'rgba(21, 36, 132, 0.6)',
      40: 'rgba(21, 36, 132, 0.4)',
      20: 'rgba(21, 36, 132, 0.2)',
    },
    녹색정의당: {
      100: 'rgba(0, 124, 54, 1)',
      80: 'rgba(0, 124, 54, 0.8)',
      60: 'rgba(0, 124, 54, 0.6)',
      40: 'rgba(0, 124, 54, 0.4)',
      20: 'rgba(0, 124, 54, 0.2)',
    },
    개혁신당: {
      100: 'rgba(255, 121, 32, 1)',
      80: 'rgba(255, 121, 32, 0.8)',
      60: 'rgba(255, 121, 32, 0.6)',
      40: 'rgba(255, 121, 32, 0.4)',
      20: 'rgba(255, 121, 32, 0.2)',
    },

    새로운미래: {
      100: 'rgba(69, 186, 189, 1)',
      80: 'rgba(69, 186, 189, 0.8)',
      60: 'rgba(69, 186, 189, 0.6)',
      40: 'rgba(69, 186, 189, 0.4)',
      20: 'rgba(69, 186, 189, 0.2)',
    },
    자유통일당: {
      100: 'rgba(9, 88, 167, 1)',
      80: 'rgba(9, 88, 167, 0.8)',
      60: 'rgba(9, 88, 167, 0.6)',
      40: 'rgba(9, 88, 167, 0.4)',
      20: 'rgba(9, 88, 167, 0.2)',
    },
    진보당: {
      100: 'rgba(214, 0, 28, 1)',
      80: 'rgba(214, 0, 28, 0.8)',
      60: 'rgba(214, 0, 28, 0.6)',
      40: 'rgba(214, 0, 28, 0.4)',
      20: 'rgba(214, 0, 28, 0.2)',
    },
    더불어민주연합: {
      100: 'rgba(21, 36, 132, 1)',
      80: 'rgba(21, 36, 132, 0.8)',
      60: 'rgba(21, 36, 132, 0.6)',
      40: 'rgba(21, 36, 132, 0.4)',
      20: 'rgba(21, 36, 132, 0.2)',
    },
    새진보연합: {
      100: 'rgba(0, 210, 195, 1)',
      80: 'rgba(0, 210, 195, 0.8)',
      60: 'rgba(0, 210, 195, 0.6)',
      40: 'rgba(0, 210, 195, 0.4)',
      20: 'rgba(0, 210, 195, 0.2)',
    },
    조국혁신당: {
      100: 'rgba(0, 115, 207, 1)',
      80: 'rgba(0, 115, 207, 0.8)',
      60: 'rgba(0, 115, 207, 0.6)',
      40: 'rgba(0, 115, 207, 0.4)',
      20: 'rgba(0, 115, 207, 0.2)',
    },
    무소속: {
      100: 'rgba(113, 113, 113, 1)',
      80: 'rgba(113, 113, 113, 0.8)',
      60: 'rgba(113, 113, 113, 0.6)',
      40: 'rgba(113, 113, 113, 0.4)',
      20: 'rgba(113, 113, 113, 0.2)',
    },
  },
};
