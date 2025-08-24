import { Flag } from '@keira/shared/constants';

export const UNIT_FLAGS_2: Flag[] = [
  { bit: 0, name: '假死' },
  { bit: 1, name: '隐藏模型 - 隐藏单位模型（仅显示玩家装备）' },
  { bit: 2, name: '忽略声望' },
  { bit: 3, name: '通晓语言' },
  { bit: 4, name: '镜像' },
  { bit: 5, name: '禁用淡入 - 召唤时单位模型立即出现（不会淡入）' },
  { bit: 6, name: '强制移动' },
  { bit: 7, name: '缴械副手' },
  { bit: 8, name: '禁用预测属性 - 玩家已禁用预测属性（用于团队框架）' },
  { bit: 10, name: '缴械远程武器 - 这不会禁用远程武器显示（可能需要额外标志？）' },
  { bit: 11, name: '能量回复' },
  { bit: 12, name: '限制队伍互动 - 限制与小队或团队的互动' },
  { bit: 13, name: '禁止法术点击 - 阻止法术点击' },
  { bit: 14, name: '允许敌对互动' },
  { bit: 15, name: '禁止转向' },
  { bit: 16, name: '未知2' },
  { bit: 17, name: '播放死亡动画 - 死亡时播放特殊死亡动画' },
  { bit: 18, name: '允许作弊法术 - 允许施放带有AttributesEx7和SPELL_ATTR7_IS_CHEAT_SPELL属性的法术' },
];
