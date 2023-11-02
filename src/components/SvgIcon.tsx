import { IconFiles } from '@/utils/iconNames';

type TSvgIcon = {
  iconName: any;
  w: number;
  h: number;
};

export const SvgIcon = ({ iconName, w, h }: TSvgIcon) => {
  const I = IconFiles[`${iconName}`];
};
