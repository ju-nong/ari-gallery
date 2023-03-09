const MODE = import.meta.env.VITE_SERVER_MODE;

const isDev = () => MODE === "DEV";
const isPrd = () => MODE === "PRD";

export { MODE, isDev, isPrd };
