import { Option } from '@keira/shared/constants';

export const ITEM_CLASS: Option[] = [
  { value: 0, name: '消耗品' },
  { value: 1, name: '容器' },
  { value: 2, name: '武器' },
  { value: 3, name: '宝石' },
  { value: 4, name: '护甲' },
  { value: 5, name: '材料' },
  { value: 6, name: '弹药' },
  { value: 7, name: '商品' },
  { value: 8, name: '通用', comment: '已废弃' },
  { value: 9, name: '配方' },
  { value: 0, name: '货币', comment: '已废弃' },
  { value: 11, name: '箭袋' },
  { value: 12, name: '任务' },
  { value: 13, name: '钥匙' },
  { value: 14, name: '永久', comment: '已废弃' },
  { value: 15, name: '其它' },
  { value: 16, name: '雕文' },
];

export const ITEM_SUBCLASS: Option[][] = [];

ITEM_SUBCLASS[0] = [
  { value: 0, name: '消耗品', comment: '战斗中的可用性取决于指定的法术' },
  { value: 1, name: '药水' },
  { value: 2, name: '药剂' },
  { value: 3, name: '合剂' },
  { value: 4, name: '卷轴' },
  { value: 5, name: '食物和饮料' },
  { value: 6, name: '物品强化' },
  { value: 7, name: '绷带' },
  { value: 8, name: '其它' },
];

ITEM_SUBCLASS[1] = [
  { value: 0, name: '背包' },
  { value: 1, name: '灵魂袋' },
  { value: 2, name: '草药袋' },
  { value: 3, name: '附魔材料袋' },
  { value: 4, name: '工程学材料袋' },
  { value: 5, name: '宝石袋' },
  { value: 6, name: '矿石袋' },
  { value: 7, name: '制皮材料袋' },
  { value: 8, name: '铭文材料袋' },
];

ITEM_SUBCLASS[2] = [
  { value: 0, name: '单手斧', comment: '单手' },
  { value: 1, name: '双手斧', comment: '双手' },
  { value: 2, name: '弓' },
  { value: 3, name: '枪' },
  { value: 4, name: '单手锤', comment: '单手' },
  { value: 5, name: '双手锤', comment: '双手' },
  { value: 6, name: '长柄武器' },
  { value: 7, name: '单手剑', comment: '单手' },
  { value: 8, name: '双手剑', comment: '双手' },
  { value: 9, name: '已废弃' },
  { value: 10, name: '法杖' },
  { value: 11, name: '特殊武器' },
  { value: 12, name: '特殊武器' },
  { value: 13, name: '拳套' },
  { value: 14, name: '其它', comment: '铁匠锤、矿工锄等' },
  { value: 15, name: '匕首' },
  { value: 16, name: '投掷武器' },
  { value: 17, name: '矛' },
  { value: 18, name: '弩' },
  { value: 19, name: '魔杖' },
  { value: 20, name: '鱼竿' },
];

ITEM_SUBCLASS[3] = [
  { value: 0, name: '红色' },
  { value: 1, name: '蓝色' },
  { value: 2, name: '黄色' },
  { value: 3, name: '紫色' },
  { value: 4, name: '绿色' },
  { value: 5, name: '橙色' },
  { value: 6, name: '多彩' },
  { value: 7, name: '简单' },
  { value: 8, name: '棱彩' },
];

ITEM_SUBCLASS[4] = [
  { value: 0, name: '其它' },
  { value: 1, name: '布甲' },
  { value: 2, name: '皮甲' },
  { value: 3, name: '锁甲' },
  { value: 4, name: '板甲' },
  { value: 5, name: '小圆盾', comment: '已废弃' },
  { value: 6, name: '盾牌' },
  { value: 7, name: '圣契' },
  { value: 8, name: '神像' },
  { value: 9, name: '图腾' },
  { value: 10, name: '纹章' },
];

ITEM_SUBCLASS[5] = [{ value: 0, name: '材料' }];

ITEM_SUBCLASS[6] = [
  { value: 0, name: '魔杖', comment: '已废弃' },
  { value: 1, name: '弩矢', comment: '已废弃' },
  { value: 2, name: '箭' },
  { value: 3, name: '子弹' },
  { value: 4, name: '投掷武器', comment: '已废弃' },
];

ITEM_SUBCLASS[7] = [
  { value: 0, name: '商品' },
  { value: 1, name: '零件' },
  { value: 2, name: '爆炸物' },
  { value: 3, name: '装置' },
  { value: 4, name: '珠宝加工' },
  { value: 5, name: '布料' },
  { value: 6, name: '皮革' },
  { value: 7, name: '金属和矿石' },
  { value: 8, name: '肉类' },
  { value: 9, name: '草药' },
  { value: 10, name: '元素' },
  { value: 11, name: '其它' },
  { value: 12, name: '附魔' },
  { value: 13, name: '材料' },
  { value: 14, name: '护甲附魔' },
  { value: 15, name: '武器附魔' },
];

ITEM_SUBCLASS[8] = [{ value: 0, name: '通用', comment: '已废弃' }];

ITEM_SUBCLASS[9] = [
  { value: 0, name: '书籍' },
  { value: 1, name: '制皮' },
  { value: 2, name: '裁缝' },
  { value: 3, name: '工程学' },
  { value: 4, name: '锻造' },
  { value: 5, name: '烹饪' },
  { value: 6, name: '炼金' },
  { value: 7, name: '急救' },
  { value: 8, name: '附魔' },
  { value: 9, name: '钓鱼' },
  { value: 10, name: '珠宝加工' },
];

ITEM_SUBCLASS[10] = [{ value: 0, name: '货币', comment: '已废弃' }];

ITEM_SUBCLASS[11] = [
  { value: 0, name: '箭袋（已废弃）' },
  { value: 1, name: '箭袋（已废弃）' },
  { value: 2, name: '箭袋', comment: '（可以存放箭）' },
  { value: 3, name: '弹药袋', comment: '可以存放子弹' },
];

ITEM_SUBCLASS[12] = [{ value: 0, name: '任务' }];

ITEM_SUBCLASS[13] = [
  { value: 0, name: '钥匙' },
  { value: 1, name: '开锁器' },
];

ITEM_SUBCLASS[14] = [{ value: 0, name: '永久' }];

ITEM_SUBCLASS[15] = [
  { value: 0, name: '垃圾' },
  { value: 1, name: '材料' },
  { value: 2, name: '宠物' },
  { value: 3, name: '节日' },
  { value: 4, name: '其它' },
  { value: 5, name: '坐骑' },
];

ITEM_SUBCLASS[16] = [
  { value: 1, name: '战士' },
  { value: 2, name: '圣骑士' },
  { value: 3, name: '猎人' },
  { value: 4, name: '潜行者' },
  { value: 5, name: '牧师' },
  { value: 6, name: '死亡骑士' },
  { value: 7, name: '萨满祭司' },
  { value: 8, name: '法师' },
  { value: 9, name: '术士' },
  { value: 11, name: '德鲁伊' },
];

export const enum ITEM_TYPE {
  CONTAINER = 1,
  WEAPON = 2,
  ARMOR = 4,
  AMMUNITION = 6,
}

// 物品属性修正（与客户端略有不同，参见 g_statToJson）
export const enum ITEM_MOD {
  MANA = 0,                      // 法力值
  HEALTH = 1,                    // 生命值
  AGILITY = 3,                   // 敏捷
  STRENGTH = 4,                  // 力量
  INTELLECT = 5,                 // 智力
  SPIRIT = 6,                    // 精神
  STAMINA = 7,                   // 耐力
  ENERGY = 8,                    // 能量
  RAGE = 9,                      // 怒气
  FOCUS = 10,                    // 集中值
  RUNIC_POWER = 11,             // 符文能量
  DEFENSE_SKILL_RATING = 12,     // 防御等级
  DODGE_RATING = 13,             // 躲闪等级
  PARRY_RATING = 14,             // 招架等级
  BLOCK_RATING = 15,             // 格挡等级
  HIT_MELEE_RATING = 16,         // 近战命中等级
  HIT_RANGED_RATING = 17,        // 远程命中等级
  HIT_SPELL_RATING = 18,         // 法术命中等级
  CRIT_MELEE_RATING = 19,        // 近战暴击等级
  CRIT_RANGED_RATING = 20,       // 远程暴击等级
  CRIT_SPELL_RATING = 21,        // 法术暴击等级
  HIT_TAKEN_MELEE_RATING = 22,   // 被近战命中等级
  HIT_TAKEN_RANGED_RATING = 23,  // 被远程命中等级
  HIT_TAKEN_SPELL_RATING = 24,   // 被法术命中等级
  CRIT_TAKEN_MELEE_RATING = 25,  // 被近战暴击等级
  CRIT_TAKEN_RANGED_RATING = 26, // 被远程暴击等级
  CRIT_TAKEN_SPELL_RATING = 27,  // 被法术暴击等级
  HASTE_MELEE_RATING = 28,       // 近战急速等级
  HASTE_RANGED_RATING = 29,      // 远程急速等级
  HASTE_SPELL_RATING = 30,       // 法术急速等级
  HIT_RATING = 31,               // 命中等级
  CRIT_RATING = 32,              // 暴击等级
  HIT_TAKEN_RATING = 33,         // 被命中等级
  CRIT_TAKEN_RATING = 34,        // 被暴击等级
  RESILIENCE_RATING = 35,        // 韧性等级
  HASTE_RATING = 36,             // 急速等级
  EXPERTISE_RATING = 37,         // 精准等级
  ATTACK_POWER = 38,             // 攻击强度
  RANGED_ATTACK_POWER = 39,      // 远程攻击强度
  FERAL_ATTACK_POWER = 40,       // 野性攻击强度
  SPELL_HEALING_DONE = 41,       // 法术治疗（已废弃）
  SPELL_DAMAGE_DONE = 42,        // 法术伤害（已废弃）
  MANA_REGENERATION = 43,        // 法力值回复
  ARMOR_PENETRATION_RATING = 44,  // 护甲穿透等级
  SPELL_POWER = 45,              // 法术强度
  HEALTH_REGEN = 46,             // 生命值回复
  SPELL_PENETRATION = 47,        // 法术穿透
  BLOCK_VALUE = 48,              // 格挡值
  // MASTERY_RATING = 49,        // 精通等级
  ARMOR = 50,                    // 护甲
  FIRE_RESISTANCE = 51,          // 火焰抗性
  FROST_RESISTANCE = 52,         // 冰霜抗性
  HOLY_RESISTANCE = 53,          // 神圣抗性
  SHADOW_RESISTANCE = 54,        // 暗影抗性
  NATURE_RESISTANCE = 55,        // 自然抗性
  ARCANE_RESISTANCE = 56,        // 奥术抗性
  FIRE_POWER = 57,               // 火焰强度
  FROST_POWER = 58,              // 冰霜强度
  HOLY_POWER = 59,               // 神圣强度
  SHADOW_POWER = 60,             // 暗影强度
  NATURE_POWER = 61,             // 自然强度
  ARCANE_POWER = 62,             // 奥术强度
}

// 物品类别
export const ITEM_CLASS_RECIPE = 9;
