import { Flag } from '@keira/shared/constants';

export const ITEM_FLAGS: Flag[] = [
  { bit: 0, name: '无法拾取' },
  { bit: 1, name: '召唤物品' },
  { bit: 2, name: '可开启 - 物品可以右键点击打开其战利品' },
  { bit: 3, name: '英雄提示 - 使物品显示绿色的"英雄"文字' },
  { bit: 4, name: '已弃用 - 无法装备或使用' },
  { bit: 5, name: '无法摧毁 - 物品无法被摧毁，除非使用法术' },
  { bit: 6, name: '玩家可施法 - 物品的法术可以被玩家施放' },
  { bit: 7, name: '无装备冷却 - 装备时没有默认的30秒冷却时间' },
  { bit: 8, name: '多重任务拾取' },
  { bit: 9, name: '可包装 - 物品可以包装其他物品' },
  { bit: 10, name: '使用资源' },
  { bit: 11, name: '多重掉落 - 拾取此物品不会从可用战利品中移除' },
  { bit: 12, name: '物品购买记录 - 物品可以以原始扩展费用退还给商人' },
  { bit: 13, name: '公会契约 - 物品是公会或竞技场契约' },
  { bit: 14, name: '包含文本 - 仅可读物品具有此属性' },
  { bit: 15, name: '无法分解' },
  { bit: 16, name: '实时持续时间' },
  { bit: 17, name: '无制造者' },
  { bit: 18, name: '可勘探' },
  { bit: 19, name: '唯一装备 - 你只能装备一件此类物品' },
  { bit: 20, name: '忽略光环' },
  { bit: 21, name: '忽略竞技场默认限制 - 物品可在竞技场比赛中使用' },
  { bit: 22, name: '无耐久度损失' },
  { bit: 23, name: '可在变形时使用 - 物品可在变形形态下使用' },
  { bit: 24, name: '任务光效' },
  {
    bit: 25,
    name: '隐藏无法使用的配方 - 专业配方：仅在满足要求且尚未学习时可拾取',
  },
  { bit: 26, name: '竞技场内禁用 - 物品无法在竞技场中使用' },
  { bit: 27, name: '账号绑定 - 物品绑定到账号，只能发送给自己的角色' },
  { bit: 28, name: '无材料消耗' },
  { bit: 29, name: '可研磨' },
  { bit: 30, name: '公会聊天通报' },
  { bit: 31, name: '无进度掉落' },
];

// 物品标志值
export const enum ITEM_FLAG {
  CONJURED = 0x00000002,        // 召唤物品
  OPENABLE = 0x00000004,        // 可开启
  HEROIC = 0x00000008,          // 英雄难度
  DEPRECATED = 0x00000010,      // 已弃用
  INDESTRUCTIBLE = 0x00000020,  // 无法摧毁
  NO_EQUIPCD = 0x00000080,      // 无装备冷却
  PARTYLOOT = 0x00000800,       // 队伍拾取
  REFUNDABLE = 0x00001000,      // 可退还
  PROSPECTABLE = 0x00040000,    // 可勘探
  UNIQUEEQUIPPED = 0x00080000,  // 唯一装备
  USABLE_ARENA = 0x00200000,    // 竞技场可用
  USABLE_SHAPED = 0x00800000,   // 变形时可用
  SMARTLOOT = 0x02000000,       // 智能拾取
  ACCOUNTBOUND = 0x08000000,    // 账号绑定
  MILLABLE = 0x20000000,        // 可研磨
}
