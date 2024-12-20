import dynamic from 'next/dynamic';
import { IThemeColor, ITemplateContent } from './index.interface';

// Define system colors
export const SYSTEM_COLORS: IThemeColor[] = [
  {
    backgroundColor: 'white',
    fontColor: 'black',
    titleColor: '#1890ff',
    highlighterColor: 'yellowgreen',
    id: 1,
  },
  {
    backgroundColor: 'white',
    fontColor: '#780650',
    titleColor: '#254000',
    highlighterColor: 'burlywood',
    id: 2,
  },
  {
    backgroundColor: '#FFFFFF',
    fontColor: '#000000',
    titleColor: '#217503',
    highlighterColor: '#F556E5',
    id: 3,
  },
];

// Define available templates
export const AVAILABLE_TEMPLATES: { [key: string]: ITemplateContent } = {
  // modern: {
  //   id: 'modern',
  //   name: 'Modern Resume',
  //   thumbnail: '/templates/modern.png',
  //   component: dynamic(() => import('../../templates/modern/MordernTemplateTemplate'), {
  //     ssr: false,
  //   }),
  // },
  professional: {
    id: 'professional',
    name: 'Professional Resume',
    thumbnail: '/templates/professional.png',
    component: dynamic(() => import('@/templates/professional/ProfessionalTemplate'), {
      ssr: false,
    }),
  },
  ats: {
    id: 'ats',
    name: 'ATS-Friendly Resume',
    thumbnail: '/templates/ats.png',
    component: dynamic(() => import('@/templates/ats/ATSTemplate'), {
      ssr: false,
    }),
  },
  minimalist: {
    id: 'minimalist',
    name: 'Minimalist Resume',
    thumbnail: '/templates/minimalist.png',
    component: dynamic(() => import('@/templates/minimalist/MinimalistTemplate'), {
      ssr: false,
    }),
  },
  elegant: {
    id: 'elegant',
    name: 'Elegant Template',
    thumbnail: '/templates/creative.png',
    component: dynamic(() => import('@/templates/elegant/ElegantTemplate'), {
      ssr: false,
    }),
  },
  creative: {
    id: 'creative',
    name: 'Creative Template',
    thumbnail: '/templates/creative.png',
    component: dynamic(() => import('@/templates/creative/CreativeTemplate'), {
      ssr: false,
    }),
  },
  deedy: {
    id: 'deedy',
    name: 'Deedy Resume',
    thumbnail: '/templates/deedy.png',
    component: dynamic(() => import('@/templates/deedy/DeedyTemplate'), {
      ssr: false,
    }),
  },
};

// Define custom theme color
export const CUSTOM_THEME_COLOR: IThemeColor = {
  backgroundColor: 'white',
  fontColor: 'black',
  titleColor: 'green',
  highlighterColor: '#ff7875',
  id: 4,
};

// Date picker format
export const DATE_PICKER_FORMAT = 'DD/MM/YYYY';
