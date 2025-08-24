import { Flag } from '@keira/shared/constants';

export const GAMEOBJECT_FLAGS: Flag[] = [
  { bit: 0, name: '使用中' },
  { bit: 1, name: '已锁定' },
  { bit: 2, name: '互动条件' },
  { bit: 3, name: '运输工具' },
  { bit: 4, name: '不可选中' },
  { bit: 5, name: '不消失' },
  { bit: 6, name: '已触发' },
  { bit: 7, name: '动画冻结（未使用）' },
  { bit: 9, name: '已损坏' },
  { bit: 10, name: '已摧毁' },
];
