import { Option } from '@keira/shared/constants';

export const OPTION_TYPE: Option[] = [
  { value: 0, name: '无 - UNIT_NPC_FLAG_NONE (npcflag=0)' },
  { value: 1, name: '对话 - UNIT_NPC_FLAG_GOSSIP (npcflag=1)' },
  { value: 2, name: '任务发放者 - UNIT_NPC_FLAG_QUESTGIVER (npcflag=2)' },
  {
    value: 3,
    name: '商人 - UNIT_NPC_FLAG_VENDOR (确保此生物有npc_vendor数据) (npcflag=128)',
  },
  { value: 4, name: '飞行管理员 - UNIT_NPC_FLAG_TAXIVENDOR (npcflag=8192)' },
  {
    value: 5,
    name: '训练师 - UNIT_NPC_FLAG_TRAINER (记得在creature_template中设置trainer_class) (npcflag=16)',
  },
  { value: 6, name: '灵魂医者 - UNIT_NPC_FLAG_SPIRITHEALER (npcflag=16384)' },
  { value: 7, name: '灵魂向导 - UNIT_NPC_FLAG_SPIRITGUIDE (npcflag=32768)' },
  { value: 8, name: '旅店老板 - UNIT_NPC_FLAG_INNKEEPER (npcflag=65536)' },
  { value: 9, name: '银行职员 - UNIT_NPC_FLAG_BANKER (npcflag=131072)' },
  { value: 10, name: '请愿者 - UNIT_NPC_FLAG_PETITIONER (npcflag=262144)' },
  { value: 11, name: '战袍设计师 - UNIT_NPC_FLAG_TABARDDESIGNER (npcflag=524288)' },
  { value: 12, name: '战场军官 - UNIT_NPC_FLAG_BATTLEFIELDPERSON (npcflag=1048576)' },
  { value: 13, name: '拍卖师 - UNIT_NPC_FLAG_AUCTIONEER (npcflag=2097152)' },
  { value: 14, name: '兽栏管理员 - UNIT_NPC_FLAG_STABLE (npcflag=4194304)' },
  { value: 15, name: '铁匠 - UNIT_NPC_FLAG_ARMORER (未使用) (npcflag=4096)' },
  { value: 16, name: '遗忘天赋 - UNIT_NPC_FLAG_TRAINER (训练师的额外选项) (npcflag=16)' },
  { value: 17, name: '遗忘宠物天赋 - UNIT_NPC_FLAG_TRAINER (训练师的额外选项) (npcflag=16)' },
  { value: 18, name: '学习双天赋 - UNIT_NPC_FLAG_TRAINER (训练师的额外选项) (npcflag=16)' },
  { value: 19, name: '户外PVP - 由代码添加 (用于户外PVP生物的选项)' },
];
