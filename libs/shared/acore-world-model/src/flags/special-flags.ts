import { Flag } from '@keira/shared/constants';

export const SPECIAL_FLAGS: Flag[] = [
  { bit: 0, name: '使任务可重复完成' },
  { bit: 1, name: '使任务只能通过外部事件完成' },
  { bit: 2, name: '使任务自动接取（仅新手区任务需要此标志）' },
  { bit: 3, name: '仅用于地下城查找器任务' },
  { bit: 4, name: '使任务成为月常任务' },
  { bit: 5, name: '任务需要法术施放击杀计数，而非实际击杀NPC' },
  { bit: 6, name: '使任务不与其他联盟阵营共享声望奖励' },
  {
    bit: 7,
    name: '允许任务在任何状态下通过Player::FailQuest()失败，例如：从开始就计时的限时任务',
  },
  {
    bit: 8,
    name: '此任务不计入博学者成就进度',
  },
];
