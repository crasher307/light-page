import config from './config.js';
import func from './func.js';

// Head
document.addEventListener("DOMContentLoaded", () => {
    document.title = config.title;
    document.head.appendChild(func.createEl({type: 'meta', attr: {name: 'description', content: config.description}}));
    document.head.appendChild(func.createEl({type: 'meta', attr: {name: 'keywords', content: config.keywords}}));
    // Services
    document.head.appendChild(func.createEl({type: 'meta', attr: {httpEquiv: 'cache-control', content: 'private'}}));
    document.head.appendChild(func.createEl({type: 'meta', attr: {name: 'referrer', content: 'origin'}}));
    document.head.appendChild(func.createEl({type: 'meta', attr: {name: 'document-state', content: 'dynamic'}}));
    document.head.appendChild(func.createEl({type: 'meta', attr: {name: 'robots', content: 'noarchive'}}));
});

// Body
document.querySelector('#app').prepend(
    // Background
    func.createEl({
        type: 'div',
        attr: {class: 'background'},
        html: func.createEl({
            type: 'video',
            attr: {poster: config.body.background.image},
            html: config.body.background.video.map(e => func.createEl({
                type: 'source',
                attr: {type: e.type, src: e.src},
            })),
            events: {
                loadeddata: (e) => {
                    e.target.autoplay = true;
                    e.target.muted = true;
                    e.target.loop = true;
                    e.target.play();
                },
            },
        }),
    }),
    // Content
    func.createEl({
        type: 'div',
        attr: {class: 'content'},
        html: [
            func.createEl({
                type: 'div',
                attr: {class: 'info'},
                html: [
                    func.createEl({type: 'h1', html: config.body.info.title}),
                    func.createEl({type: 'p', html: config.body.info.description}),
                    func.createEl({type: 'div', attr: {class: 'logo'}}),
                ],
            }),
            func.createEl({
                type: 'div',
                attr: {class: 'contact'},
                html: [
                    func.createEl({
                        type: 'noindex',
                        html: config.body.contact.links.map(e => {
                            const el = func.createEl({
                                type: 'a',
                                attr: {
                                    class: e.type,
                                    title: e.type,
                                    rel: 'noreferrer nofollow',
                                    target: '_blank',
                                    href: e.url,
                                },
                            });
                            e?.event && el.addEventListener('click', () => e.event());
                            return el;
                        }),
                    }),
                    func.createEl({
                        type: 'p',
                        attr: {class: 'description'},
                        html: config.body.contact.description,
                    }),
                ],
            }),
        ],
    }),
);

// Counter
if (config?.yaCounter) {
    (function (m, e, t, r, i, k, a) {
        m[i] = m[i] || function () {
            (m[i].a = m[i].a || []).push(arguments);
        };
        m[i].l = 1 * new Date();
        for (let j = 0; j < document.scripts.length; j++) {
            if (document.scripts[j].src === r) {
                return;
            }
        }
        k = e.createElement(t);
        a = e.getElementsByTagName(t)[0];
        k.async = true;
        k.src = r;
        a.parentNode.insertBefore(k, a);
    })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
    document.querySelector('body').append(
        func.createEl({
            type: 'noscript',
            html: func.createEl({
                type: 'div',
                html: func.createEl({
                    type: 'img',
                    attr: {
                        src: `https://mc.yandex.ru/watch/${config.yaCounter}`,
                        style: 'position:absolute;left:-9999px;',
                        alt: '',
                    },
                }),
            }),
        }),
    );
    func.yaInit();
}