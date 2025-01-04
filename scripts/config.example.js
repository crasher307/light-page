import func from './func.js';

export default {
    title: 'Заголовок', // Заголовок
    description: '', // Описание
    keywords: '', // Ключевые слова
    yaCounter: null, // Счетчик Яндекса (номер)
    body: {
        background: {
            image: 'sources/background.png',
            video: [
                {type: 'video/mp4', src: 'sources/background.mp4'},
            ],
        },
        info: {
            title: 'Фамилия Имя',
            description: 'должность / вид деятельности',
        },
        contact: {
            description: 'описание',
            links: [
                {type: 'github', url: '//github.com/example', event: func.yaGoal('eventNameFromYaCounter')},
                {type: 'email', url: 'mailto:mail@example.ru', event: func.yaGoal('eventNameFromYaCounter')},
                {type: 'telegram', url: '//t.me/example', event: func.yaGoal('eventNameFromYaCounter')},
                {type: 'vk', url: '//vk.com/example', event: func.yaGoal('eventNameFromYaCounter')},
            ],
        },
    },
};