// js/data.js — FIFA World Cup 2026 data

const FLAGS = {
  MEX:'🇲🇽', RSA:'🇿🇦', KOR:'🇰🇷', CZE:'🇨🇿', SUI:'🇨🇭', CAN:'🇨🇦', BIH:'🇧🇦', QAT:'🇶🇦',
  BRA:'🇧🇷', MAR:'🇲🇦', SCO:'🏴󠁧󠁢󠁳󠁣󠁴󠁿', HTI:'🇭🇹', USA:'🇺🇸', AUS:'🇦🇺', PAR:'🇵🇾', TUR:'🇹🇷',
  GER:'🇩🇪', CIV:'🇨🇮', ECU:'🇪🇨', CUW:'🇨🇼', NED:'🇳🇱', JPN:'🇯🇵', SWE:'🇸🇪', TUN:'🇹🇳',
  BEL:'🇧🇪', EGY:'🇪🇬', IRN:'🇮🇷', NZL:'🇳🇿', ESP:'🇪🇸', CPV:'🇨🇻', URU:'🇺🇾', KSA:'🇸🇦',
  FRA:'🇫🇷', NOR:'🇳🇴', SEN:'🇸🇳', IRQ:'🇮🇶', ARG:'🇦🇷', AUT:'🇦🇹', DZA:'🇩🇿', JOR:'🇯🇴',
  COL:'🇨🇴', POR:'🇵🇹', COD:'🇨🇩', UZB:'🇺🇿', ENG:'🏴󠁧󠁢󠁥󠁮󠁧󠁿', CRO:'🇭🇷', GHA:'🇬🇭', PAN:'🇵🇦'
};

const NAMES = {
  MEX:'Mexico',     RSA:'South Africa',   KOR:'Korea Republic', CZE:'Czechia',
  SUI:'Switzerland',CAN:'Canada',         BIH:'Bosnia & Herz.', QAT:'Qatar',
  BRA:'Brazil',     MAR:'Morocco',        SCO:'Scotland',        HTI:'Haiti',
  USA:'USA',        AUS:'Australia',      PAR:'Paraguay',        TUR:'Türkiye',
  GER:'Germany',    CIV:'Ivory Coast',    ECU:'Ecuador',         CUW:'Curaçao',
  NED:'Netherlands',JPN:'Japan',          SWE:'Sweden',          TUN:'Tunisia',
  BEL:'Belgium',    EGY:'Egypt',          IRN:'IR Iran',         NZL:'New Zealand',
  ESP:'Spain',      CPV:'Cape Verde',     URU:'Uruguay',         KSA:'Saudi Arabia',
  FRA:'France',     NOR:'Norway',         SEN:'Senegal',         IRQ:'Iraq',
  ARG:'Argentina',  AUT:'Austria',        DZA:'Algeria',         JOR:'Jordan',
  COL:'Colombia',   POR:'Portugal',       COD:'Congo DR',        UZB:'Uzbekistan',
  ENG:'England',    CRO:'Croatia',        GHA:'Ghana',           PAN:'Panama'
};

const SCORES = [
  { home:'CPV', away:'KSA', scoreH:0, scoreA:0, date:'27 Jun', venue:'SoFi Stadium' },
  { home:'NZL', away:'BEL', scoreH:1, scoreA:5, date:'27 Jun', venue:'MetLife Stadium' },
  { home:'EGY', away:'IRN', scoreH:1, scoreA:1, date:'27 Jun', venue:'Levi\'s Stadium' },
  { home:'PAN', away:'ENG', scoreH:0, scoreA:2, date:'28 Jun', venue:'AT&T Stadium' },
  { home:'CRO', away:'GHA', scoreH:2, scoreA:1, date:'28 Jun', venue:'Rose Bowl' },
  { home:'COL', away:'POR', scoreH:0, scoreA:0, date:'28 Jun', venue:'Hard Rock Stadium' },
  { home:'COD', away:'UZB', scoreH:3, scoreA:1, date:'28 Jun', venue:'Gillette Stadium' },
  { home:'JOR', away:'ARG', scoreH:1, scoreA:3, date:'28 Jun', venue:'BC Place' },
  { home:'DZA', away:'AUT', scoreH:3, scoreA:3, date:'28 Jun', venue:'Estadio Azteca' },
  { home:'RSA', away:'CAN', scoreH:0, scoreA:1, date:'29 Jun', venue:'BMO Field' },
];

const GROUPS = {
  A:[
    {t:'MEX',w:3,d:0,l:0,gf:7,ga:2,pts:9},
    {t:'RSA',w:1,d:1,l:1,gf:3,ga:4,pts:4},
    {t:'KOR',w:1,d:0,l:2,gf:3,ga:5,pts:3},
    {t:'CZE',w:0,d:1,l:2,gf:2,ga:4,pts:1},
  ],
  B:[
    {t:'SUI',w:2,d:1,l:0,gf:5,ga:2,pts:7},
    {t:'CAN',w:1,d:1,l:1,gf:3,ga:3,pts:4},
    {t:'BIH',w:1,d:1,l:1,gf:4,ga:4,pts:4},
    {t:'QAT',w:0,d:1,l:2,gf:1,ga:4,pts:1},
  ],
  C:[
    {t:'BRA',w:2,d:1,l:0,gf:6,ga:2,pts:7},
    {t:'MAR',w:2,d:1,l:0,gf:5,ga:2,pts:7},
    {t:'SCO',w:1,d:0,l:2,gf:3,ga:5,pts:3},
    {t:'HTI',w:0,d:0,l:3,gf:1,ga:6,pts:0},
  ],
  D:[
    {t:'USA',w:2,d:0,l:1,gf:5,ga:3,pts:6},
    {t:'AUS',w:1,d:1,l:1,gf:3,ga:3,pts:4},
    {t:'PAR',w:1,d:1,l:1,gf:3,ga:4,pts:4},
    {t:'TUR',w:1,d:0,l:2,gf:3,ga:4,pts:3},
  ],
  E:[
    {t:'GER',w:2,d:0,l:1,gf:7,ga:4,pts:6},
    {t:'CIV',w:2,d:0,l:1,gf:5,ga:3,pts:6},
    {t:'ECU',w:1,d:1,l:1,gf:4,ga:4,pts:4},
    {t:'CUW',w:0,d:1,l:2,gf:1,ga:6,pts:1},
  ],
  F:[
    {t:'NED',w:2,d:1,l:0,gf:6,ga:3,pts:7},
    {t:'JPN',w:1,d:2,l:0,gf:4,ga:3,pts:5},
    {t:'SWE',w:1,d:1,l:1,gf:4,ga:4,pts:4},
    {t:'TUN',w:0,d:0,l:3,gf:1,ga:5,pts:0},
  ],
  G:[
    {t:'BEL',w:1,d:2,l:0,gf:7,ga:4,pts:5},
    {t:'EGY',w:1,d:2,l:0,gf:3,ga:2,pts:5},
    {t:'IRN',w:0,d:3,l:0,gf:3,ga:3,pts:3},
    {t:'NZL',w:0,d:1,l:2,gf:2,ga:5,pts:1},
  ],
  H:[
    {t:'ESP',w:2,d:1,l:0,gf:8,ga:3,pts:7},
    {t:'CPV',w:0,d:3,l:0,gf:2,ga:2,pts:3},
    {t:'URU',w:0,d:2,l:1,gf:2,ga:4,pts:2},
    {t:'KSA',w:0,d:2,l:1,gf:2,ga:5,pts:2},
  ],
  I:[
    {t:'FRA',w:3,d:0,l:0,gf:9,ga:2,pts:9},
    {t:'NOR',w:2,d:0,l:1,gf:6,ga:4,pts:6},
    {t:'SEN',w:1,d:0,l:2,gf:4,ga:6,pts:3},
    {t:'IRQ',w:0,d:0,l:3,gf:1,ga:8,pts:0},
  ],
  J:[
    {t:'ARG',w:3,d:0,l:0,gf:8,ga:3,pts:9},
    {t:'AUT',w:1,d:1,l:1,gf:6,ga:6,pts:4},
    {t:'DZA',w:1,d:1,l:1,gf:5,ga:5,pts:4},
    {t:'JOR',w:0,d:0,l:3,gf:2,ga:7,pts:0},
  ],
  K:[
    {t:'COL',w:2,d:1,l:0,gf:5,ga:1,pts:7},
    {t:'POR',w:1,d:2,l:0,gf:5,ga:3,pts:5},
    {t:'COD',w:1,d:1,l:1,gf:5,ga:4,pts:4},
    {t:'UZB',w:0,d:0,l:3,gf:2,ga:9,pts:0},
  ],
  L:[
    {t:'ENG',w:2,d:1,l:0,gf:5,ga:2,pts:7},
    {t:'CRO',w:2,d:0,l:1,gf:5,ga:4,pts:6},
    {t:'GHA',w:1,d:1,l:1,gf:4,ga:4,pts:4},
    {t:'PAN',w:0,d:0,l:3,gf:1,ga:5,pts:0},
  ],
};

const FIXTURES = [
  {home:'BRA',away:'JPN',time:'29 Jun · 10:30 PM IST',probH:57,probA:18},
  {home:'GER',away:'PAR',time:'30 Jun · 2:00 AM IST', probH:71,probA:11},
  {home:'NED',away:'MAR',time:'30 Jun · 6:30 AM IST', probH:42,probA:28},
  {home:'CIV',away:'NOR',time:'30 Jun · 10:30 PM IST',probH:26,probA:47},
  {home:'FRA',away:'SWE',time:'1 Jul · 2:30 AM IST',  probH:77,probA:9},
  {home:'MEX',away:'ECU',time:'1 Jul · 6:30 AM IST',  probH:43,probA:25},
  {home:'ENG',away:'COD',time:'1 Jul · 9:30 PM IST',  probH:76,probA:8},
  {home:'BEL',away:'SEN',time:'2 Jul · 1:30 AM IST',  probH:44,probA:27},
  {home:'USA',away:'BIH',time:'2 Jul · 5:30 AM IST',  probH:72,probA:10},
  {home:'ESP',away:'AUT',time:'3 Jul · 12:30 AM IST', probH:74,probA:9},
];
