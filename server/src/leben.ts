import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api';
import { GpLeben_Events } from '@AthenaPlugins/gp-leben/shared/events';
import { VITAL_NAMES } from '@AthenaPlugins/athena-plugin-food-water/shared/enums';
import { VitalsSystem } from '@AthenaPlugins/athena-plugin-food-water/server/src/system';

function finishSetHealth(target: alt.Player, value: number) {
    Athena.player.safe.addHealth(target, value, true);
    Athena.player.emit.message(target, `Neue Gesundheit: ${value}`);
}

export class Leben {
    static init() {
        alt.onClient(GpLeben_Events.TOGGLE, Leben.toggleLeben);
    }

    static toggleLeben(player: alt.Player) {
        if (Athena.systems.permission.hasOne('account', player, ['admin'])) {
            finishSetHealth(player, 199);
            VitalsSystem.adjustVital(player, VITAL_NAMES.FOOD, 100, true);
            VitalsSystem.adjustVital(player, VITAL_NAMES.WATER, 100, true);
            Athena.player.emit.message(player, 'Leben, Essen und Wasser wiederhergestellt.');
            return;
        } else {
            Athena.player.emit.message(player, 'Du hast nicht die erforderliche Berechtigung, \num diesen Befehl auszuführen.');
            return;
        }
    }
}
