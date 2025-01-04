class func {
    /**
     * @param data {{type: String, attr?: Object|null, html?: String|Node|Array|null, events?: Object|null}}
     * @returns {any|null}
     */
    static createEl(data) {
        if (data?.type) {
            const el = document.createElement(data.type);
            data?.attr && Object.entries(data.attr).forEach(([key, value]) => el.setAttribute(this.attrName(key), value));
            if (data?.html) {
                typeof data.html === 'string'
                    ? el.innerHTML = data.html
                    : (Array.isArray(data.html) ? data.html.forEach(e => el.append(e)) : el.appendChild(data.html));
            }
            data?.events && Object.entries(data.events).forEach(([key, value]) => el.addEventListener(key, value));
            return el;
        }
        return null;
    }

    static yaGoal(name) {
        return () => {
            config?.yaCounter ? ym(config.yaCounter, 'reachGoal', name) : console.error(`Undefined counter [event ${name}]`);
        };
    }

    static yaInit() {
        return () => {
            config?.yaCounter
                ? ym(config.yaCounter, "init", {clickmap: true, trackLinks: true, accurateTrackBounce: true})
                : console.error(`Undefined counter [event ${name}]`);
        };
    }

    static attrName(name) {
        return name.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
    }
}

export default func;