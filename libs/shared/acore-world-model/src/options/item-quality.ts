import { Option } from '@keira/shared/constants';

export const ITEM_QUALITY: Option[] = [
  { value: 0, name: '灰色（粗糙）' },
  { value: 1, name: '白色（普通）' },
  { value: 2, name: '绿色（优秀）' },
  { value: 3, name: '蓝色（精良）' },
  { value: 4, name: '紫色（史诗）' },
  { value: 5, name: '橙色（传说）' },
  { value: 6, name: '红色（神器）' },
  { value: 7, name: '金色（账号绑定）[需要标志 134221824]' },
];

export const enum ITEMS_QUALITY {
  POOR = 0, // 灰色
  NORMAL = 1, // 白色
  UNCOMMON = 2, // 绿色
  RARE = 3, // 蓝色
  EPIC = 4, // 紫色
  LEGENDARY = 5, // 橙色
  ARTIFACT = 6, // 浅黄色
  HEIRLOOM = 7, // 金色
}
