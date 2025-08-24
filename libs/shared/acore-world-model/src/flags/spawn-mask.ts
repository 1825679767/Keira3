import { Flag } from '@keira/shared/constants';

export const SPAWN_MASK: Flag[] = [
  { bit: 0, name: '10人普通（无英雄难度的副本）' },
  { bit: 1, name: '25人普通（或3.2版本前的英雄）' },
  { bit: 2, name: '10人英雄' },
  { bit: 3, name: '25人英雄' },
];
