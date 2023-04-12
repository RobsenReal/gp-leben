import * as alt from 'alt-client';
import * as AthenaClient from '@AthenaClient/api';
import { KEY_BINDS } from '@AthenaShared/enums/keyBinds';
import { GpLeben_Events } from '@AthenaPlugins/gp-leben/shared/events';

export class LebenKeybind {
    static init() {
        AthenaClient.systems.hotkeys.add({
            key: KEY_BINDS.LEBEN,
            description: 'Toggle Leben',
            identifier: 'Leben-toggle',
            keyDown: LebenKeybind.toggleLeben,
        });
    }

    static toggleLeben() {
        alt.emitServer(GpLeben_Events.TOGGLE);
    }
}
