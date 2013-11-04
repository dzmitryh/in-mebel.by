new Ya.share({
        element: 'ya_share1',
            elementStyle: {
                'type': 'button',
                'border': true,
                'quickServices': ['yaru', 'twitter', '|', 'vkontakte']
            },
            link: 'http://www.yandex.com/',
            title: 'Yandex - the best search engine in the universe!',
            popupStyle: {
                blocks: {
                    'Поделись-ка!': ['yaru', 'twitter', '', 'vkontakte'],
                    'Поделись-ка по-другому!': ['yaru', 'twitter', 'vkontakte']
                },
                copyPasteField: true
            },
            serviceSpecific: {
                twitter: {
                    title: '#Yandex - the best search engine in the universe!'
               }
        }
});