/*
 * Configurations
 */
import Environment from "./Core/Environment";

let environments: {[key: string]: Environment} = {};

environments.staging = new Environment('staging', 3000, 3001);
environments.production = new Environment('production', 5000, 5001);

const currentEnvironment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV.toLowerCase() : 'staging';
export default environments[currentEnvironment];