import type { ItemType } from "../data/items";

export function normalizeType(type: string): ItemType {
  const value = type.trim();

  const map: Record<string, ItemType> = {
    貼紙: "貼紙",
    胸章: "胸章",
    徽章: "徽章",
    勳章: "勳章",
    鑰匙圈: "鑰匙圈",
    吊飾: "吊飾",
    吊牌: "吊牌",
    杯套: "杯套",
    透卡: "透卡",
    小卡: "小卡",
    方卡: "小卡",
    卡片: "小卡",
    票卡: "票卡",
    票根: "票卡",
    手幅: "手幅",
    手搖旗: "手幅",
    扇子: "扇子",
    透扇: "扇子",
    拍立得: "拍立得",
    撕拉片: "撕拉片",
    書籤: "書籤",
    原子筆: "原子筆",
    髮夾: "髮夾",
    手機支架: "手機支架",
    擦拭布: "擦拭布",
    眼鏡布: "擦拭布",
    磁鐵: "磁鐵",
    鏡子: "鏡子",
    鈔票: "鈔票",
    戒指: "戒指",
    尺: "尺",
    湯匙: "湯匙",
    鐵盒: "鐵盒",
    燈箱: "燈箱",
    壓克力: "壓克力",
    透明底片: "小卡",
    應援幣: "其他",
    束口袋: "其他",
  };

  return map[value] ?? "其他";
}

export function normalizeTypes(types: string[]): ItemType[] {
  return Array.from(new Set(types.map(normalizeType)));
}
