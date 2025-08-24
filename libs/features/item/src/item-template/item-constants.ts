export const ITEM_CONSTANTS = {
  timeUnits: {
    sg: ['年', '月', '周', '天', '小时', '分钟', '秒', '毫秒'],
    pl: ['年', '月', '周', '天', '小时', '分钟', '秒', '毫秒'],
    ab: ['年', '月', '周', '天', '时', '分', '秒', '毫秒'],
  },
  resistances: [
    /* null, */ '神圣抗性',
    '火焰抗性',
    '自然抗性',
    '冰霜抗性',
    '暗影抗性',
    '奥术抗性',
  ], // RESISTANCE?_NAME
  sc: ['物理', '神圣', '火焰', '自然', '冰霜', '暗影', '奥术'], // STRING_SCHOOL_*
  armor: '%s护甲', // ARMOR_TEMPLATE
  block: '%s格挡', // SHIELD_BLOCK_TEMPLATE
  charges: '%d次充能' /* |4Charge: */, // ITEM_SPELL_CHARGES
  locked: '已锁定', // LOCKED
  ratingString: '%s&nbsp;@&nbsp;等级%s',
  fap: '野性攻击强度',
  durability: '耐久度 %d / %d', // DURABILITY_TEMPLATE
  itemLevel: '物品等级 %d', // ITEM_LEVEL
  randEnchant: '&lt;随机附魔&gt', // ITEM_RANDOM_ENCHANT
  readClick: '&lt;右键点击阅读&gt', // ITEM_READABLE
  openClick: '&lt;右键点击打开&gt', // ITEM_OPENABLE
  setBonus: '(%d) 套装：%s', // ITEM_SET_BONUS_GRAY
  setName: '%s (%d/%d)', // ITEM_SET_NAME
  reqMinLevel: '需要等级 %d', // ITEM_MIN_LEVEL
  reqLevelRange: '需要等级 %d 到 %d (%s)', // ITEM_LEVEL_RANGE_CURRENT
  unique: ['唯一', '唯一 (%d)', '唯一：%s (%d)'], // ITEM_UNIQUE, ITEM_UNIQUE_MULTIPLE, ITEM_LIMIT_CATEGORY
  uniqueEquipped: ['唯一装备', null, '唯一装备：%s (%d)'], // ITEM_UNIQUE_EQUIPPABLE, null, ITEM_LIMIT_CATEGORY_MULTIPLE
  dps: '(每秒伤害%.1f)', // DPS_TEMPLATE
  damage: {
    // *DAMAGE_TEMPLATE*
    //  basic,                          basic /w school,                add basic,                  add basic /w school
    single: ['%d点伤害', '%d点%s伤害', '+%d点伤害', '+%d点%s伤害'],
    range: ['%d - %d点伤害', '%d - %d点%s伤害', '+%d - %d点伤害', '+%d - %d点%s伤害'],
    ammo: ['增加每秒%d点伤害', '增加每秒%d点%s伤害', '+每秒%d点伤害', '+每秒%d点%s伤害'],
  },
  socketBonus: '镶嵌奖励：%s', // ITEM_SOCKET_BONUS
  socket: [
    '元能插槽',
    '红色插槽',
    '黄色插槽',
    '蓝色插槽',
    // -1 => '棱彩插槽' // TODO
  ],
  gemColors: [
    // *_GEM
    '元能',
    '红色',
    '黄色',
    '蓝色',
  ],
  gemConditions: {
    // ENCHANT_CONDITION_* in GlobalStrings.lua
    2: '少于%s个%s宝石；',
    3: '%s宝石数量多于%s宝石',
    5: '至少%s个%s宝石',
  },
  reqRating: [
    // ITEM_REQ_ARENA_RATING*
    '需要个人和团队竞技场评分达到%d',
    '需要3v3或5v5竞技场评分达到%d',
    '需要5v5竞技场评分达到%d',
  ],
  quality: [
    // ITEM_QUALITY?_DESC
    '劣质',
    '普通',
    '优秀',
    '精良',
    '史诗',
    '传说',
    '神器',
    '传家宝',
  ],
  trigger: [
    // ITEM_SPELL_TRIGGER_*
    '使用：',
    '装备：',
    '击中时可能：',
    '',
    '',
    '',
    '',
  ],
  bonding: [
    // ITEM_BIND_*
    '账号绑定',
    '拾取绑定',
    '装备绑定',
    '使用绑定',
    '任务物品',
    '任务物品',
  ],
  bagFamily: [
    // ItemSubClass.dbc/1
    '背包',
    '箭袋',
    '弹药袋',
    '灵魂袋',
    '制皮包',
    '铭文包',
    '草药包',
    '附魔材料包',
    '工程包',
    null /* Key */,
    '宝石包',
    '矿石包',
  ],
  inventoryType: [
    // INVTYPE_*
    null,
    '头部',
    '颈部',
    '肩部',
    '衬衣',
    '胸部',
    '腰部',
    '腿部',
    '脚部',
    '手腕',
    '手部',
    '手指',
    '饰品',
    '单手',
    '副手' /*Shield*/,
    '远程',
    '背部',
    '双手',
    '背包',
    '战袍',
    '长袍',
    '主手',
    '副手',
    '副手物品',
    '弹药',
    '投掷',
    '远程',
    '箭袋',
    '圣物',
  ],
  armorSubClass: [
    // ItemSubClass.dbc/2
    '其它',
    '布甲',
    '皮甲',
    '锁甲',
    '板甲',
    null,
    '盾牌',
    '圣契',
    '神像',
    '图腾',
    '纹章',
  ],
  weaponSubClass: [
    // ItemSubClass.dbc/4
    '斧',
    '斧',
    '弓',
    '枪',
    '锤',
    '锤',
    '长柄武器',
    '剑',
    '剑',
    null,
    '法杖',
    null,
    null,
    '拳套',
    '其它',
    '匕首',
    '投掷武器',
    null,
    '弩',
    '魔杖',
    '鱼竿',
  ],
  projectileSubClass: [
    // ItemSubClass.dbc/6
    null,
    null,
    '箭',
    '子弹',
    null,
  ],
  statType: [
    // ITEM_MOD_*
    '法力值',
    '生命值',
    null,
    '敏捷',
    '力量',
    '智力',
    '精神',
    '耐力',
    null,
    null,
    null,
    null,
    '使防御等级提高%d点。',
    '使躲闪等级提高%d点。',
    '使招架等级提高%d点。',
    '使盾牌格挡等级提高%d点。',
    '使近战命中等级提高%d点。',
    '使远程命中等级提高%d点。',
    '使法术命中等级提高%d点。',
    '使近战爆击等级提高%d点。',
    '使远程爆击等级提高%d点。',
    '使法术爆击等级提高%d点。',
    '使近战命中躲闪等级提高%d点。',
    '使远程命中躲闪等级提高%d点。',
    '使法术命中躲闪等级提高%d点。',
    '使近战爆击躲闪等级提高%d点。',
    '使远程爆击躲闪等级提高%d点。',
    '使法术爆击躲闪等级提高%d点。',
    '使近战急速等级提高%d点。',
    '使远程急速等级提高%d点。',
    '使法术急速等级提高%d点。',
    '使命中等级提高%d点。',
    '使爆击等级提高%d点。',
    '使命中躲闪等级提高%d点。',
    '使爆击躲闪等级提高%d点。',
    '使韧性等级提高%d点。',
    '使急速等级提高%d点。',
    '使精准等级提高%d点。',
    '使攻击强度提高%d点。',
    '使远程攻击强度提高%d点。',
    '使猎豹、熊、巨熊和枭兽形态下的攻击强度提高%d点。',
    '使法术治疗效果最多提高%d点。',
    '使法术伤害效果最多提高%d点。',
    '每5秒恢复%d点法力值。',
    '使护甲穿透等级提高%d点。',
    '使法术强度提高%d点。',
    '每5秒恢复%d点生命值。',
    '使法术穿透提高%d点。',
    '使盾牌的格挡值提高%d点。',
    '未知加成#%d (%d)',
  ],
  lockType: [
    // lockType.dbc
    null,
    '开锁',
    '采药',
    '采矿',
    '解除陷阱',
    '打开',
    '宝藏 (DND)',
    '钙化精灵宝石 (DND)',
    '关闭',
    '布置陷阱',
    '快速打开',
    '快速关闭',
    '工程学开启',
    '跪地开启',
    '战斗开启',
    "加兹瑞迪安 (DND)",
    '爆破',
    'PvP开启',
    'PvP关闭',
    '钓鱼 (DND)',
    '铭文',
    '从载具开启',
  ],
};

export const SPELL_TRIGGERS = ['使用', '装备', '击中时可能', '未知', '灵魂石', '立即使用', '学习法术ID'] as const;
