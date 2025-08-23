import { ITEM_MOD } from '@keira/shared/acore-world-model';

export const MAX_LEVEL = 80; // 最高等级

export const lvlIndepRating = [
  // 不随等级缩放的属性
  ITEM_MOD.MANA,         // 法力值
  ITEM_MOD.HEALTH,       // 生命值
  ITEM_MOD.ATTACK_POWER, // 攻击强度
  ITEM_MOD.MANA_REGENERATION, // 法力值回复
  ITEM_MOD.SPELL_POWER,  // 法术强度
  ITEM_MOD.HEALTH_REGEN, // 生命值回复
  ITEM_MOD.SPELL_PENETRATION, // 法术穿透
  ITEM_MOD.BLOCK_VALUE,  // 格挡值
];

export const gtCombatRatings = {
  // 战斗评分系数
  12: 1.5,   // 防御评分
  13: 13.8,  // 躲闪评分
  14: 13.8,  // 招架评分
  15: 5,     // 格挡评分
  16: 10,    // 近战命中评分
  17: 10,    // 远程命中评分
  18: 8,     // 法术命中评分
  19: 14,    // 近战暴击评分
  20: 14,    // 远程暴击评分
  21: 14,    // 法术暴击评分
  22: 10,    // 近战急速评分
  23: 10,    // 远程急速评分
  24: 8,     // 法术急速评分
  25: 0,     // 未使用
  26: 0,     // 未使用
  27: 0,     // 未使用
  28: 10,    // 韧性评分
  29: 10,    // 精准评分
  30: 10,    // 护甲穿透评分
  31: 10,    // 精通评分
  32: 14,    // PvP强度评分
  33: 0,     // 未使用
  34: 0,     // 未使用
  35: 28.75, // PvP韧性评分
  36: 10,    // 法术穿透评分
  37: 2.5,   // 格挡评分
  44: 4.26,  // 护甲穿透评分
};

export const resistanceFields = [
  // 抗性类型
  // null,
  'holy',    // 神圣抗性
  'fire',    // 火焰抗性
  'nature',  // 自然抗性
  'frost',   // 冰霜抗性
  'shadow',  // 暗影抗性
  'arcane',  // 奥术抗性
];
