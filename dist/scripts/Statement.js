var a7_0x524c=['identifier','checkToken','print','Expected\x20a\x20statement\x20instead\x20of\x20\x22','parse','getLexeme','tokens'];(function(_0x16164e,_0x54a771){var _0x33f23b=function(_0x543a95){while(--_0x543a95){_0x16164e['push'](_0x16164e['shift']());}};_0x33f23b(++_0x54a771);}(a7_0x524c,0x17f));var a7_0x3ec4=function(_0x1196c6,_0x44e6fa){_0x1196c6=_0x1196c6-0x0;var _0x18d0d0=a7_0x524c[_0x1196c6];return _0x18d0d0;};class Statement{static['parse'](_0x539a69){let _0x2e3499;let _0xab31f8=_0x539a69[a7_0x3ec4('0x0')](![]);if(_0xab31f8['checkToken'](Lexeme[a7_0x3ec4('0x1')][a7_0x3ec4('0x2')])){_0x2e3499=new AssignmentStatement();}else if(_0xab31f8[a7_0x3ec4('0x3')](Lexeme[a7_0x3ec4('0x1')][a7_0x3ec4('0x4')])){_0x2e3499=new OutputStatement();}else{throw new Error(a7_0x3ec4('0x5')+_0xab31f8['source']+'\x22.');}_0x2e3499[a7_0x3ec4('0x6')](_0x539a69);return _0x2e3499;}['compile'](){return undefined;}}