import { Flag } from '@keira/shared/constants';

export const SMART_EVENT_FLAGS: Flag[] = [
  { bit: 0, name: '不可重复（事件不能重复）' },
  { bit: 1, name: '难度0（普通地下城）' },
  { bit: 2, name: '难度1（英雄地下城）' },
  { bit: 3, name: '难度2（普通团队副本）' },
  { bit: 4, name: '难度3（英雄团队副本）' },
  { bit: 5, name: '保留标志5（未使用）' },
  { bit: 6, name: '保留标志6（未使用）' },
  { bit: 7, name: '仅调试（仅在调试版本中使用）' },
  { bit: 8, name: '不重置（事件不会重置）' },
  { bit: 9, name: '被魅惑时（AI所有者被魅惑时）' },
];
