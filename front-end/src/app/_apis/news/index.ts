// import axios from 'axios';

// export interface NewsItem {
//   id: number;
//   title: string;
//   date: string;
//   url: string;
// }

// export async function fetchNews(): Promise<NewsItem[]> {
//   const API_URL = 'https://open.assembly.go.kr/portal/openapi/nbzyjjyoamdqqjorw';
//   try {
//     const response = await axios.get(API_URL);
//     const items = response.data.items;
//     return items.slice(0, 6).map((item: any, index: number) => ({
//       id: index,
//       title: item.COMP_MAIN_TITLE,
//       date: item.REG_DATE,
//       url: item.LINK_URL,
//     }));
//   } catch (error) {
//     console.error('Axios fetch error:', error);
//     return [];
//   }
// }
