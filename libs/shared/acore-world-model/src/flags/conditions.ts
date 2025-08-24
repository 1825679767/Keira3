import { Flag } from '@keira/shared/constants';
import { FACTION_RANK } from '../options/faction-rank';

export const QUEST_STATE: Flag[] = [
  { bit: 0, name: '未接取' },
  { bit: 1, name: '已完成' },
  { bit: 2, name: '不可用（未使用）' },
  { bit: 3, name: '进行中' },
  { bit: 4, name: '可接取（未使用）' },
  { bit: 5, name: '失败' },
  { bit: 6, name: '已领取奖励' },
];

export const RANKMASK: Flag[] = FACTION_RANK.map((option) => ({ bit: option.value as number, name: option.name }));

export const TYPEMASK: Flag[] = [
  { bit: 3, name: '单位类型掩码' },
  { bit: 4, name: '玩家类型掩码' },
  { bit: 5, name: '游戏对象类型掩码' },
  { bit: 7, name: '尸体类型掩码（灵魂释放后）' },
];
