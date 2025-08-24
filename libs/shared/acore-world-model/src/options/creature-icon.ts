import { Option } from '@keira/shared/constants';

export const CREATURE_ICON: Option[] = [
  { value: null, name: '无' },
  { value: 'Directions', name: '用于守卫和传送门NPC' },
  { value: 'Gunner', name: '炮塔NPC/玩家控制标识' },
  { value: 'vehichleCursor', name: '玩家控制载具(PCV)标识' },
  { value: 'Driver', name: '鼠标悬停时显示方向盘图标' },
  { value: 'Attack', name: '显示剑形图标，表示可以攻击此目标' },
  { value: 'Buy', name: '显示棕色背包图标，通常用于纯商人NPC' },
  { value: 'Speak', name: '显示对话气泡图标，表示此NPC有任务或对话选项' },
  { value: 'Pickup', name: '显示抓取手势图标，表示此NPC可拾取任务物品' },
  { value: 'Interact', name: '显示齿轮图标，通常用于任务或运输' },
  { value: 'Trainer', name: '显示书本图标，表示此NPC是训练师' },
  { value: 'Taxi', name: '显示带翅膀的靴子图标，表示此NPC提供飞行服务' },
  { value: 'Repair', name: '显示铁砧图标，表示此NPC可以修理装备' },
  { value: 'LootAll', name: '显示多个棕色背包图标（相当于按住Shift拾取生物掉落）' },
  { value: 'Quest', name: '未使用或未知（参见条目32870"真正的罗纳卡达"）' },
  { value: 'PVP', name: '未使用或未知（参见条目29387"竞技场大师：达拉然竞技场"）' },
];
