import * as alt from 'alt-server';
import * as Athena from '@AthenaServer/api';
import { Leben } from './src/leben';

const PLUGIN_NAME = 'gpLeben';

Athena.systems.plugins.registerPlugin(PLUGIN_NAME, async () => {
    Leben.init();

    alt.log(`~lg~${PLUGIN_NAME} was Loaded`);
});
