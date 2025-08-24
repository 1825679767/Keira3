import { Option } from '@keira/shared/constants';

// 条件值1

export const CONDITION_OBJECT_ENTRY_GUID_CV1: Option[] = [
  { value: 3, name: '单位类型' },
  { value: 4, name: '玩家类型' },
  { value: 5, name: '游戏对象类型' },
  { value: 7, name: '尸体类型（玩家释放灵魂后的尸体）' },
];

export const CONDITION_STAND_STATE_CV1: Option[] = [
  { value: 0, name: '使用条件值2中的精确状态' },
  { value: 1, name: '使用条件值2中的任意状态' },
];

// 条件值2

export const CONDITION_LEVEL_CV2: Option[] = [
  { value: 0, name: '等级必须相等' },
  { value: 1, name: '等级必须更高' },
  { value: 2, name: '等级必须更低' },
  { value: 3, name: '等级必须大于等于' },
  { value: 4, name: '等级必须小于等于' },
];

export const CONDITION_RELATION_TO_CV2: Option[] = [
  { value: 0, name: '自身关系' },
  { value: 1, name: '小队成员关系' },
  { value: 2, name: '团队或小队成员关系' },
  { value: 3, name: '所属关系（条件目标被条件值1所拥有）' },
  { value: 4, name: '乘客关系（条件目标是条件值1的乘客）' },
  { value: 5, name: '创建关系（条件目标是由条件值1召唤的）' },
];

export const CONDITION_HP_VAL_CV2: Option[] = [
  { value: 0, name: '生命值必须相等' },
  { value: 1, name: '生命值必须更高' },
  { value: 2, name: '生命值必须更低' },
  { value: 3, name: '生命值必须大于等于' },
  { value: 4, name: '生命值必须小于等于' },
];

export const CONDITION_HP_PCT_CV2: Option[] = [
  { value: 0, name: '最大生命值百分比必须相等' },
  { value: 1, name: '最大生命值百分比必须更高' },
  { value: 2, name: '最大生命值百分比必须更低' },
  { value: 3, name: '最大生命值百分比必须大于等于' },
  { value: 4, name: '最大生命值百分比必须小于等于' },
];

export const CONDITION_STAND_STATE_CV2: Option[] = [
  { value: 0, name: '站立' },
  { value: 1, name: '坐下' },
];

// 条件值3

export const CONDITION_DISTANCE_TO_CV3: Option[] = [
  { value: 0, name: '距离必须等于条件值2' },
  { value: 1, name: '距离必须大于条件值2' },
  { value: 2, name: '距离必须小于条件值2' },
  { value: 3, name: '距离必须大于等于条件值2' },
  { value: 4, name: '距离必须小于等于条件值2' },
];

export const CONDITION_NEAR_CREATURE_CV3: Option[] = [
  { value: 0, name: '存活' },
  { value: 1, name: '死亡' },
];

export const CONDITION_INSTANCE_INFO_CV3: Option[] = [
  { value: 0, name: '副本信息数据' },
  { value: 1, name: '副本信息GUID数据' },
  { value: 2, name: '副本信息首领状态' },
  { value: 3, name: '副本信息数据64' },
];
