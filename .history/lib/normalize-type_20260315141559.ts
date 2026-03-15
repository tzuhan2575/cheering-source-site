import type { ItemType } from "../data/items";

export function normalizeType(type: string): ItemType {
  const value = type.trim();

  const map: Record<string, ItemType> = {
    貼紙: "貼紙",
    徽章: "徽章",
    勳章: "其他",
    鑰匙圈: "鑰匙圈",
    吊飾: "吊飾",
    吊牌: "其他",
    杯套: "其他",
    透卡: "透卡",
    小卡: "小卡",
    方卡: "小卡",
    卡片: "小卡",
    透明底片: "小卡",
    票夾: "票夾",
    票卡夾: "票夾",
    票套: "票夾",
    票卡: "其他",
    票根: "其他",
    手幅: "手幅",
    手搖旗: "手幅",
    扇子: "扇子",
    透扇: "扇子",
    拍立得: "其他",
    撕拉片: "撕拉片",
    書籤: "書籤",
    原子筆: "其他",
    髮夾: "其他",
    手機支架: "其他",
    擦拭布: "擦拭布",
    眼鏡布: "擦拭布",
    磁鐵: "磁鐵",
    鏡子: "鏡子",
    鈔票: "其他",
    戒指: "其他",
    尺: "其他",
    湯匙: "其他",
    鐵盒: "其他",
    燈箱: "其他",
    壓克力: "其他",
    應援幣: "其他",
    束口袋: "其他",
    立牌: "其他",
  };

  return map[value] ?? "其他";
}

export function normalizeTypes(types: string[]): ItemType[] {
  return Array.from(new Set(types.map(normalizeType)));
}
