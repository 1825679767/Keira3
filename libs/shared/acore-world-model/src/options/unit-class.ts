import { Option } from '@keira/shared/constants';

export const UNIT_CLASS: Option[] = [
  { value: 1, name: '战士 - 仅有生命值（与潜行者相同）' },
  { value: 2, name: '圣骑士 - 生命值和法力值（比法师生命值高但法力值低）' },
  { value: 4, name: '潜行者 - 仅有生命值（与战士相同）' },
  { value: 8, name: '法师 - 生命值和法力值（比圣骑士生命值低但法力值高）' },
];
