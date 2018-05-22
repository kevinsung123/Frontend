export const VHS_service = [
	"가정간호",
	"방문재활",
];

export const VHS_operator = [
	"==",
	"<>",
	">=",
	">",
	"<=",
	"<",
	"IN",
	"range",
	"YN"
];

export const VHS_property = [
	{"name": "환자구분", "type": "category",
	 "values": ["비위관", "위장루", "정체 도뇨관", "치골상 방광", "장루 설치술", "기관 절개관", "욕창", "일반상처","봉합사제거"] },
	{"name": "활력증상", "type": "category",
	 "values": ["level1", "level2", "level3"]},
	{"name": "의식수준", "type": "category",
	 "values": ["level1", "level2", "level3"]},
	{"name": "영양", "type": "category",
	 "values": ["level1", "level2", "level3"]},
	{"name": "배뇨 및 배변", "type": "category",
	 "values": ["level1", "level2", "level3"]},
	{"name": "호흡 정도", "type": "category",
	 "values": ["level1", "level2", "level3"]},
	{"name": "일상생활수행", "type": "category",
	 "values": ["level1", "level2", "level3"]},
	{"name": "정서상태 및 적응", "type": "category",
	 "values": ["level1", "level2", "level3"]},
];


