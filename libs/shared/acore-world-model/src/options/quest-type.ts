import { Option } from '@keira/shared/constants';

export const QUEST_TYPE: Option[] = [
  {
    value: 0,
    name: '任务已启用，但接受后自动完成；跳过任务目标和任务详情',
  },
  { value: 1, name: '任务已禁用' },
  { value: 2, name: '任务已启用（不会自动完成）' },
];
