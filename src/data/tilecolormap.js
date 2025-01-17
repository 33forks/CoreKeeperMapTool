/*

			{
				"type": "wall",
				"name": "Dirt",
				"r": "",
				"g": "",
				"b": "",
			}
*/

const TileType = {
	Ungrouped: "Ungrouped",
	Grounds: "Grounds",
	Floors: "Floors",
	Walls: "Walls",
	SpawnTiles: "Spawn Tiles",
	Liquids: "Liquids",
	Boulders: "Boulders",
	Ores: "Ores",
	Objects: "Objects"
};

class Tile {
	visible = false;
	disabled = false;

	constructor(name, r, g, b, textBlack = false) {
		this.name = name;
		this.r = r;
		this.g = g;
		this.b = b;
		this.textColor = textBlack ? "#000000" : "#FFFFFF";
	}
}

let tileColors = [
	{
		"set": TileType.SpawnTiles,
		"tiles": [
			new Tile("地面黏液", 217, 98, 23),
			new Tile("菌丝土", 183, 83, 60),
			new Tile("石头苔藓", 207, 241, 255),
			new Tile("地面滑溜黏液", 46, 46, 255),
			new Tile("蛹", 252, 166, 148),
			new Tile("地面酸性黏液", 193, 170, 33),
			new Tile("地面带毒黏液", 184, 86, 165),
		]
	},
	{
		"set": TileType.Liquids,
		"tiles": [
			new Tile("水", 30, 61, 129),
			new Tile("虫巢水", 117, 103, 48),
			new Tile("霉菌水", 61, 85, 135),
			new Tile("海水", 52, 208, 255),
		]
	},
	{
		"set": TileType.Boulders,
		"tiles": [
			new Tile("大型铜矿", 237, 96, 87),
			new Tile("大型锡矿", 142, 122, 118),
			new Tile("大型金矿", 242, 204, 61),
			new Tile("大型铁矿", 130, 155, 203),
			new Tile("大型猩红金属矿", 206, 59, 59),
			new Tile("大型幻光金属矿", 139, 82, 238),
			new Tile("大型星河矿", 247, 240, 220),
		]
	},
	{
		"set": TileType.Ores,
		"tiles": [
			new Tile("上古宝石矿石", 0, 147, 255),
			new Tile("铜矿石", 237, 96, 87),
			new Tile("锡矿石", 142, 122, 118),
			new Tile("金矿石", 242, 204, 61),
			new Tile("铁矿石", 130, 155, 203),
			new Tile("猩红金属矿石", 206, 59, 59),
			new Tile("幻光金属矿石", 139, 82, 238),
			new Tile("星河金属矿石", 247, 240, 220, true),
		]
	},
	{
		"set": TileType.Walls,
		"tiles": [
			new Tile("黑曜石砖块", 22, 42, 39),
			new Tile("泥土砖块", 97, 73, 39),
			new Tile("沙砖块", 172, 143, 58),
			new Tile("草皮砖块", 70, 103, 81),
			new Tile("粘土砖块", 193, 100, 54),
			new Tile("石头砖块", 73, 103, 125),
			new Tile("Great 砖块", 19, 94, 82),
			new Tile("木砖块", 148, 105, 51),
			new Tile("石头砖块", 106, 108, 114),
			new Tile("Scarlet 砖块", 144, 38, 19),
			new Tile("虫巢砖块", 163, 97, 83),
			new Tile("City 砖块", 49, 77, 87),
			new Tile("Limestone 砖块", 180, 147, 154),
			new Tile("黑色砖块", 62, 62, 62),
			new Tile("白色砖块", 157, 180, 203),
			new Tile("棕色砖块", 124, 58, 28),
			new Tile("蓝色砖块", 28, 93, 216),
			new Tile("紫色砖块", 109, 49, 137),
			new Tile("红色砖块", 187, 10, 10),
			new Tile("绿色砖块", 64, 169, 16),
			new Tile("黄色砖块", 212, 194, 42),
			new Tile("可以涂色的砖块", 154, 165, 212),
			new Tile("草砖块", 22, 131, 27),
			new Tile("霉菌砖块", 89, 156, 186),
		]
	},
	{
		"set": TileType.Grounds,
		"tiles": [
			new Tile("黑曜石地面", 31, 67, 62),
			new Tile("泥土地面", 127, 95, 48),
			new Tile("沙子地面", 212, 185, 89),
			new Tile("草皮地面", 86, 128, 100),
			new Tile("粘土地面", 232, 139, 105),
			new Tile("石头地面", 103, 131, 151),
			new Tile("草地面", 61, 155, 65),
			new Tile("虫巢地面", 199, 116, 99),
			new Tile("霉菌地面", 108, 188, 224),
			new Tile("海滩地面", 235, 192, 190),

			new Tile("Tilled Dirt地面", 180, 127, 73),
			new Tile("Watered Dirt地面", 141, 102, 62),
			new Tile("Tilled Grass地面", 12, 115, 43),
			new Tile("Watered Grass地面", 26, 93, 46),
		]
	},
	{
		"set": TileType.Floors,
		"tiles": [
			new Tile("木头地板", 199, 148, 79),
			new Tile("石头地板", 129, 132, 140),
			new Tile("可以涂色的地板", 174, 189, 241),
			new Tile("黄色地板", 255, 232, 46),
			new Tile("绿色地板", 85, 182, 39),
			new Tile("红色地板", 223, 0, 0),
			new Tile("紫色地板", 139, 79, 167),
			new Tile("蓝色地板", 43, 108, 228),
			new Tile("棕色地板", 151, 75, 40),
			new Tile("白色地板", 178, 206, 233),
			new Tile("黑色地板", 76, 84, 85),
			new Tile("Scarlet 地板", 178, 53, 38),
			new Tile("Caveling 地板 Tile", 130, 130, 130),
			new Tile("City 地板", 87, 128, 132),

		]
	},
	{
		"set": TileType.Objects,
		"tiles": [
			new Tile("Root", 225, 163, 104),
			new Tile("Wooden Crate", 114, 60, 17),
			new Tile("Ancient Crate", 77, 168, 202),
			new Tile("Electrical Wire", 89, 80, 73),
			new Tile("Ancient Wire (core)", 66, 93, 94),
			new Tile("Rail", 122, 122, 122),
			new Tile("Wood Bridge", 140, 88, 38),
			new Tile("Wood Fence", 112, 72, 33),
			new Tile("Rug", 124, 71, 123),
			new Tile("Stone Bridge", 123, 116, 108),
			new Tile("Stone Fence", 97, 91, 85),
			new Tile("Woven Mat", 58, 139, 65),
			new Tile("Scarlet Bridge", 168, 30, 46),
			new Tile("Scarlet Fence", 128, 36, 46),
			new Tile("Flower Vessel", 205, 189, 48),
			new Tile("Mold Vessel", 229, 229, 229),
			new Tile("Conveyor Belt", 104, 127, 174),
			new Tile("Coral Wood", 250, 89, 163),
		]
	},
	{
		"set": TileType.Ungrouped,
		"tiles": [
			new Tile("鱼塘", 31, 31, 31),
			new Tile("水母", 48, 124, 205),
			new Tile("大型水母", 48, 124, 205),
		]
	},
];

let tileColorMap = [
	{
		"tilesetname": "Dirt",
		"type": "pit",
		"name": "Pit",
		"r": "31",
		"g": "31",
		"b": "31"
	},
	{
		"tilesetname": "Dirt",
		"type": "wall",
		"name": "Dirt Wall",
		"r": "97",
		"g": "73",
		"b": "39"
	},
	{
		"tilesetname": "Dirt",
		"type": "ground",
		"name": "Dirt Ground",
		"r": "127",
		"g": "95",
		"b": "48"
	},
	{
		"tilesetname": "Dirt",
		"type": "water",
		"name": "Water",
		"r": "30",
		"g": "61",
		"b": "129"
	},
	{
		"tilesetname": "Boulder",
		"type": "boulder",
		"name": "Copper Boulder",
		"r": "237",
		"g": "96",
		"b": "87"
	},
	{
		"tilesetname": "Boulder",
		"type": "boulder",
		"name": "Gold Boulder",
		"r": "242",
		"g": "204",
		"b": "61"
	},
	{
		"tilesetname": "Dirt",
		"type": "ore",
		"name": "Copper Ore",
		"r": "237",
		"g": "96",
		"b": "87"
	},
	{
		"tilesetname": "Dirt",
		"type": "ore",
		"name": "Gold Ore",
		"r": "242",
		"g": "204",
		"b": "61"
	},
	{
		"tilesetname": "Dirt",
		"type": "ore",
		"name": "Root",
		"r": "225",
		"g": "163",
		"b": "104"
	},
	{
		"tilesetname": "Dirt",
		"type": "ground",
		"name": "Tilled Dirt Ground",
		"r": "180",
		"g": "127",
		"b": "73"
	},
	{
		"tilesetname": "Dirt",
		"type": "ore",
		"name": "Ancient Gemstone Ore",
		"r": "0",
		"g": "147",
		"b": "255"
	},
	{
		"tilesetname": "Dirt",
		"type": "ground",
		"name": "Watered Dirt Ground",
		"r": "141",
		"g": "102",
		"b": "62"
	},
	{
		"tilesetname": "Dirt",
		"type": "ground",
		"name": "Ground Slime",
		"r": "217",
		"g": "98",
		"b": "23"
	},
	{
		"tilesetname": "Hive",
		"type": "ground",
		"name": "Chrysalis",
		"r": "252",
		"g": "166",
		"b": "148"
	},
	{
		"tilesetname": "Sand",
		"type": "wall",
		"name": "Sand Wall",
		"r": "172",
		"g": "143",
		"b": "58"
	},
	{
		"tilesetname": "Sand",
		"type": "ground",
		"name": "Sand Ground",
		"r": "212",
		"g": "185",
		"b": "89"
	},
	{
		"tilesetname": "Dirt",
		"type": "wall",
		"name": "Turf Wall",
		"r": "70",
		"g": "103",
		"b": "81"
	},
	{
		"tilesetname": "Dirt",
		"type": "ground",
		"name": "Turf Ground",
		"r": "86",
		"g": "128",
		"b": "100"
	},
	{
		"tilesetname": "Clay",
		"type": "wall",
		"name": "Clay Wall",
		"r": "193",
		"g": "100",
		"b": "54"
	},
	{
		"tilesetname": "Clay",
		"type": "ground",
		"name": "Clay Ground",
		"r": "232",
		"g": "139",
		"b": "105"
	},
	{
		"tilesetname": "Stone",
		"type": "wall",
		"name": "Stone Wall",
		"r": "73",
		"g": "103",
		"b": "125"
	},
	{
		"tilesetname": "Stone",
		"type": "ground",
		"name": "Stone Ground",
		"r": "103",
		"g": "131",
		"b": "151"
	},
	{
		"tilesetname": "Stone",
		"type": "ore",
		"name": "Iron Ore",
		"r": "130",
		"g": "155",
		"b": "203"
	},
	{
		"tilesetname": "Boulder",
		"type": "boulder",
		"name": "Iron Boulder",
		"r": "130",
		"g": "155",
		"b": "203"
	},
	{
		"tilesetname": "Obsidian",
		"type": "wall",
		"name": "Obsidian Wall",
		"r": "22",
		"g": "42",
		"b": "39"
	},
	{
		"tilesetname": "Obsidian",
		"type": "ground",
		"name": "Obsidian Ground",
		"r": "31",
		"g": "67",
		"b": "62"
	},
	{
		"tilesetname": "Structures",
		"type": "floor",
		"name": "Electrical Wire",
		"r": "89",
		"g": "80",
		"b": "73"
	},
	{
		"tilesetname": "Structures",
		"type": "floor",
		"name": "Ancient Wire (core)",
		"r": "66",
		"g": "93",
		"b": "94"
	},
	{
		"tilesetname": "Structures",
		"type": "floor",
		"name": "Rail",
		"r": "122",
		"g": "122",
		"b": "122"
	},
	{
		"tilesetname": "Obsidian",
		"type": "wall",
		"name": "Great Wall",
		"r": "19",
		"g": "94",
		"b": "82"
	},
	{
		"tilesetname": "Structures",
		"type": "wall",
		"name": "Wood Wall",
		"r": "148",
		"g": "105",
		"b": "51"
	},
	{
		"tilesetname": "Structures",
		"type": "floor",
		"name": "Wood Floor",
		"r": "199",
		"g": "148",
		"b": "79"
	},
	{
		"tilesetname": "Structures",
		"type": "floor",
		"name": "Wood Bridge",
		"r": "140",
		"g": "88",
		"b": "38"
	},
	{
		"tilesetname": "Structures",
		"type": "wall",
		"name": "Wood Fence",
		"r": "112",
		"g": "72",
		"b": "33"
	},
	{
		"tilesetname": "Structures",
		"type": "floor",
		"name": "Rug",
		"r": "124",
		"g": "71",
		"b": "123"
	},
	{
		"tilesetname": "Structures",
		"type": "wall",
		"name": "Stone Bricks Wall",
		"r": "106",
		"g": "108",
		"b": "114"
	},
	{
		"tilesetname": "Structures",
		"type": "floor",
		"name": "Stone Floor",
		"r": "129",
		"g": "132",
		"b": "140"
	},
	{
		"tilesetname": "Structures",
		"type": "floor",
		"name": "Stone Bridge",
		"r": "123",
		"g": "116",
		"b": "108"
	},
	{
		"tilesetname": "Structures",
		"type": "wall",
		"name": "Stone Fence",
		"r": "97",
		"g": "91",
		"b": "85"
	},
	{
		"tilesetname": "Structures",
		"type": "floor",
		"name": "Woven Mat",
		"r": "58",
		"g": "139",
		"b": "65"
	},
	{
		"tilesetname": "Structures",
		"type": "wall",
		"name": "Scarlet Wall",
		"r": "144",
		"g": "38",
		"b": "19"
	},
	{
		"tilesetname": "Structures",
		"type": "floor",
		"name": "Scarlet Floor",
		"r": "178",
		"g": "53",
		"b": "38"
	},
	{
		"tilesetname": "Structures",
		"type": "floor",
		"name": "Scarlet Bridge",
		"r": "168",
		"g": "30",
		"b": "46"
	},
	{
		"tilesetname": "Structures",
		"type": "wall",
		"name": "Scarlet Fence",
		"r": "128",
		"g": "36",
		"b": "46"
	},
	{
		"tilesetname": "Hive",
		"type": "wall",
		"name": "Larva Hive Wall",
		"r": "163",
		"g": "97",
		"b": "83"
	},
	{
		"tilesetname": "Hive",
		"type": "ground",
		"name": "Larva Hive Ground",
		"r": "199",
		"g": "116",
		"b": "99"
	},
	{
		"tilesetname": "Hive",
		"type": "water",
		"name": "Larva Hive Water",
		"r": "117",
		"g": "103",
		"b": "48"
	},
	{
		"tilesetname": "Hive",
		"type": "ground",
		"name": "Ground Acid Slime",
		"r": "193",
		"g": "170",
		"b": "33"
	},
	{
		"tilesetname": "Boulder",
		"type": "bolder",
		"name": "Tin Boulder",
		"r": "142",
		"g": "122",
		"b": "118"
	},
	{
		"tilesetname": "Clay",
		"type": "ore",
		"name": "Tin Ore",
		"r": "142",
		"g": "122",
		"b": "118"
	},
	{
		"tilesetname": "Wilderness",
		"type": "wall",
		"name": "Grass Wall",
		"r": "22",
		"g": "131",
		"b": "27"
	},
	{
		"tilesetname": "Wilderness",
		"type": "ground",
		"name": "Grass Ground",
		"r": "61",
		"g": "155",
		"b": "65"
	},
	{
		"tilesetname": "Boulder",
		"type": "boulder",
		"name": "Scarlet Boulder",
		"r": "206",
		"g": "59",
		"b": "59"
	},
	{
		"tilesetname": "Wilderness",
		"type": "ore",
		"name": "Scarlet Ore",
		"r": "206",
		"g": "59",
		"b": "59"
	},
	{
		"tilesetname": "Wilderness",
		"type": "ground",
		"name": "Tilled Grass Ground",
		"r": "12",
		"g": "115",
		"b": "43"
	},
	{
		"tilesetname": "Wilderness",
		"type": "ground",
		"name": "Watered Grass Ground",
		"r": "26",
		"g": "93",
		"b": "46"
	},
	{
		"tilesetname": "Wilderness",
		"type": "ground",
		"name": "Ground Poison Slime",
		"r": "184",
		"g": "86",
		"b": "165"
	},
	{
		"tilesetname": "Mold",
		"type": "wall",
		"name": "Mold Wall",
		"r": "89",
		"g": "156",
		"b": "186"
	},
	{
		"tilesetname": "Mold",
		"type": "ground",
		"name": "Mold Ground",
		"r": "108",
		"g": "188",
		"b": "224"
	},
	{
		"tilesetname": "Mold",
		"type": "water",
		"name": "Mold Water",
		"r": "61",
		"g": "85",
		"b": "135"
	},
	{
		"tilesetname": "Structures",
		"type": "wall",
		"name": "Unpainted Wall",
		"r": "154",
		"g": "165",
		"b": "212"
	},
	{
		"tilesetname": "Structures",
		"type": "floor",
		"name": "Unpainted Floor",
		"r": "174",
		"g": "189",
		"b": "241"
	},
	{
		"tilesetname": "Structures",
		"type": "wall",
		"name": "Yellow Wall",
		"r": "212",
		"g": "194",
		"b": "42"
	},
	{
		"tilesetname": "Structures",
		"type": "floor",
		"name": "Yellow Floor",
		"r": "255",
		"g": "232",
		"b": "46"
	},
	{
		"tilesetname": "Structures",
		"type": "wall",
		"name": "Green Wall",
		"r": "64",
		"g": "169",
		"b": "16"
	},
	{
		"tilesetname": "Structures",
		"type": "floor",
		"name": "Green Floor",
		"r": "85",
		"g": "182",
		"b": "39"
	},
	{
		"tilesetname": "Structures",
		"type": "wall",
		"name": "Red Wall",
		"r": "187",
		"g": "10",
		"b": "10"
	},
	{
		"tilesetname": "Structures",
		"type": "floor",
		"name": "Red Floor",
		"r": "223",
		"g": "0",
		"b": "0"
	},
	{
		"tilesetname": "Structures",
		"type": "wall",
		"name": "Purple Wall",
		"r": "109",
		"g": "49",
		"b": "137"
	},
	{
		"tilesetname": "Structures",
		"type": "floor",
		"name": "Purple Floor",
		"r": "139",
		"g": "79",
		"b": "167"
	},
	{
		"tilesetname": "Structures",
		"type": "wall",
		"name": "Blue Wall",
		"r": "28",
		"g": "93",
		"b": "216"
	},
	{
		"tilesetname": "Structures",
		"type": "floor",
		"name": "Blue Floor",
		"r": "43",
		"g": "108",
		"b": "228"
	},
	{
		"tilesetname": "Structures",
		"type": "wall",
		"name": "Brown Wall",
		"r": "124",
		"g": "58",
		"b": "28"
	},
	{
		"tilesetname": "Structures",
		"type": "floor",
		"name": "Brown Floor",
		"r": "151",
		"g": "75",
		"b": "40"
	},
	{
		"tilesetname": "Structures",
		"type": "wall",
		"name": "White Wall",
		"r": "157",
		"g": "180",
		"b": "203"
	},
	{
		"tilesetname": "Structures",
		"type": "floor",
		"name": "White Floor",
		"r": "178",
		"g": "206",
		"b": "233"
	},
	{
		"tilesetname": "Structures",
		"type": "wall",
		"name": "Black Wall",
		"r": "62",
		"g": "62",
		"b": "62"
	},
	{
		"tilesetname": "Structures",
		"type": "floor",
		"name": "Black Floor",
		"r": "76",
		"g": "84",
		"b": "85"
	},
	{
		"tilesetname": "Furniture",
		"type": "furniture",
		"name": "Flower Vessel",
		"r": "205",
		"g": "189",
		"b": "48"
	},
	{
		"tilesetname": "Furniture",
		"type": "furniture",
		"name": "Wooden Crate",
		"r": "114",
		"g": "60",
		"b": "17"
	},
	{
		"tilesetname": "Furniture",
		"type": "furniture",
		"name": "Mold Vessel",
		"r": "229",
		"g": "229",
		"b": "229"
	},
	{
		"tilesetname": "Furniture",
		"type": "furniture",
		"name": "Ancient Crate",
		"r": "77",
		"g": "168",
		"b": "202"
	},
	{
		"tilesetname": "Structures",
		"type": "floor",
		"name": "Conveyor Belt",
		"r": "104",
		"g": "127",
		"b": "174"
	},
	{
		"tilesetname": "Stone",
		"type": "ground",
		"name": "Caveling Floor Tile",
		"r": "130",
		"g": "130",
		"b": "130"
	},
	{
		"tilesetname": "SunkenSea",
		"type": "ground",
		"name": "Beach Sand Ground",
		"r": "235",
		"g": "192",
		"b": "190"
	},
	{
		"tilesetname": "SunkenSea",
		"type": "wall",
		"name": "Limestone Wall",
		"r": "180",
		"g": "147",
		"b": "154"
	},
	{
		"tilesetname": "SunkenSea",
		"type": "ore",
		"name": "Octarine Ore",
		"r": "139",
		"g": "82",
		"b": "238"
	},
	{
		"tilesetname": "Boulder",
		"type": "boulder",
		"name": "Octarine Boulder",
		"r": "139",
		"g": "82",
		"b": "238"
	},
	{
		"tilesetname": "SunkenSea",
		"type": "ore",
		"name": "Coral Wood",
		"r": "250",
		"g": "89",
		"b": "163"
	},
	{
		"tilesetname": "SunkenSea",
		"type": "ore",
		"name": "Jellyfish",
		"r": "48",
		"g": "124",
		"b": "205"
	},
	{
		"tilesetname": "Boulder",
		"type": "boulder",
		"name": "Large Jellyfish",
		"r": "48",
		"g": "124",
		"b": "205"
	},
	{
		"tilesetname": "SunkenSea",
		"type": "water",
		"name": "Sea Water",
		"r": "52",
		"g": "208",
		"b": "255"
	},
	{
		"tilesetname": "SunkenSea",
		"type": "wall",
		"name": "City Wall",
		"r": "49",
		"g": "77",
		"b": "87"
	},
	{
		"tilesetname": "SunkenSea",
		"type": "ground",
		"name": "City Floor",
		"r": "87",
		"g": "128",
		"b": "132"
	}
];