import { SYSTEM_EVENTS } from '@AthenaShared/enums/system';
import * as alt from 'alt-client';
import { LebenKeybind } from './src/lebenKeybind';

alt.onceServer(SYSTEM_EVENTS.TICKS_START, LebenKeybind.init);
alt.log(`~ly~Plugin Loaded -- gpLeben`);
