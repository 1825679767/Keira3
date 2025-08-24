import { Option } from '@keira/shared/constants';

export const DISPEL_TYPE: Option[] = [
  { value: 0, name: '无' },
  { value: 1, name: '魔法' },
  { value: 2, name: '诅咒' },
  { value: 3, name: '疾病' },
  { value: 4, name: '毒药' },
  { value: 5, name: '潜行' },
  { value: 6, name: '隐形' },
  { value: 7, name: '所有(魔法+诅咒+疾病+毒药)' },
  { value: 8, name: '特殊 - 仅NPC' },
  { value: 9, name: '狂暴' },
  { value: 10, name: '祖尔格拉布饰品' },
  { value: 11, name: '已废弃' },
];
