import { Flag } from '@keira/shared/constants';

export const DYNAMIC_FLAGS: Flag[] = [
  { bit: 0, name: '可拾取' },
  { bit: 1, name: '追踪单位 - 生物位置将在小地图上显示为小点' },
  { bit: 2, name: '已标记 - 使生物名字显示为灰色 (Lua_UnitIsTapped)' },
  { bit: 3, name: '被玩家标记 - Lua_UnitIsTappedByPlayer 通常用于玩家控制载具' },
  { bit: 4, name: '特殊信息' },
  { bit: 5, name: '死亡 - 使生物显示为死亡状态（这不会使生物名字变灰或停止攻击玩家）' },
  { bit: 6, name: '招募好友' },
  { bit: 7, name: '被所有仇恨列表标记 - Lua_UnitIsTappedByAllThreatList' },
];
