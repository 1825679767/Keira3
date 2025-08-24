import { Option } from '@keira/shared/constants';

export const MOVEMENT_TYPE: Option[] = [
  { value: 0, name: '静止（原地不动）' },
  { value: 1, name: '随机（在半径范围内）' },
  { value: 2, name: '路径点移动' },
];
