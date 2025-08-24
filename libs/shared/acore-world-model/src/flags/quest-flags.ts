import { Flag } from '@keira/shared/constants';

export const QUEST_FLAG_SHARABLE = 0x00008;

export const QUEST_FLAGS: Flag[] = [
  { bit: 0, name: '保持存活 - 如果玩家死亡，任务失败' },
  {
    bit: 1,
    name: '队伍接受 - 所有可接受此任务的队伍成员都会收到确认框以接受任务',
  },
  { bit: 2, name: '探索 - 需要触发区域触发器' },
  { bit: 3, name: '可共享 - 允许与其他玩家共享任务' },
  { bit: 4, name: '有条件' },
  { bit: 5, name: '隐藏奖励坐标' },
  { bit: 6, name: '团队 - 可在团队中完成' },
  { bit: 7, name: '燃烧的远征 - 仅在启用TBC资料片时可用' },
  { bit: 8, name: '无经验金币 - 满级后经验不会转换为金币' },
  {
    bit: 9,
    name: '隐藏奖励 - 在初始任务详情页和任务日志中隐藏物品和金钱奖励',
  },
  { bit: 10, name: '追踪' },
  { bit: 11, name: '声望折旧' },
  { bit: 12, name: '日常 - 每日可重复任务' },
  { bit: 13, name: 'PVP标记 - 接取此任务会强制开启PVP' },
  { bit: 14, name: '不可用 - 用于标记通常无法获取的任务' },
  { bit: 15, name: '周常 - 每周可重复任务' },
  { bit: 16, name: '自动完成' },
  { bit: 17, name: '追踪器显示物品 - 在任务追踪器中显示可用物品' },
  { bit: 18, name: '目标文本 - 使用目标文本作为完成文本' },
  { bit: 19, name: '自动接受 - 客户端将此标记识别为自动接受' },
];
