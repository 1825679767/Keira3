import { Option } from '@keira/shared/constants';

export const CREATURE_AI_NAME: Option[] = [
  { value: 'NullCreatureAI', name: '空AI，生物不执行任何动作；无法被魅惑' },
  {
    value: 'TriggerAI',
    name: '与"空AI"相同，但生物被召唤时会施放技能栏1中的法术',
  },
  { value: 'AggressorAI', name: '生物进入仇恨范围时会攻击；仅使用近战攻击' },
  { value: 'ReactorAI', name: '生物仅在被主动攻击时反击；仅使用近战攻击' },
  { value: 'PassiveAI', name: '生物保持被动，无法攻击' },
  { value: 'CritterAI', name: '小动物AI，被攻击时会逃跑' },
  { value: 'GuardAI', name: '区域守卫AI' },
  { value: 'PetAI', name: '宠物AI' },
  { value: 'TotemAI', name: '图腾AI，施放技能栏1中的法术；不会移动' },
  { value: 'CombatAI', name: '生物在仇恨范围内立即攻击；可使用法术' },
  { value: 'ArcherAI', name: '射手AI，施放技能栏1中的法术；会追逐目标' },
  { value: 'TurretAI', name: '炮塔AI，使用技能栏1中的法术攻击；不会移动' },
  { value: 'VehicleAI', name: '载具AI，作为玩家载具运作' },
  { value: 'SmartAI', name: '使用智能AI系统' },
];
